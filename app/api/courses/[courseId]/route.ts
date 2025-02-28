import Mux from "@mux/mux-node";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const { video } = new Mux({
  tokenId: process.env.MUX_TOKEN_ID!,
  tokenSecret: process.env.MUX_TOKEN_SECRET!,
});

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // ✅ Fetch course and associated chapters
    const course = await db.course.findUnique({
      where: { id: params.courseId, userId },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) {
      return new NextResponse("Course not found or unauthorized", { status: 404 });
    }

    // ✅ Delete associated Mux assets first
    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        await video.assets.delete(chapter.muxData.assetId);
      }
    }

    // ✅ Delete Mux Data entries
    await db.muxData.deleteMany({
      where: {
        chapterId: {
          in: course.chapters.map((chapter) => chapter.id),
        },
      },
    });

    // ✅ Delete all chapters related to this course
    await db.chapter.deleteMany({
      where: {
        courseId: params.courseId,
      },
    });

    // ✅ Finally, delete the course itself
    await db.course.delete({
      where: { id: params.courseId },
    });

    return new NextResponse("Course and associated data deleted successfully", { status: 200 });
  } catch (error) {
    // console.error("Error deleting course:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await auth();
    const { courseId } = await params;
    const values = await req.json();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }
    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });
    return new Response(JSON.stringify(course), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: String(error),
      }),
      { status: 500 }
    );
  }
}

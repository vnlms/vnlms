import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { chapterId: string; courseId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // const chapter = await db.chapter.findUnique({
    //     where: {
    //         id: params.chapterId,
    //         courseId: params.courseId,
    //     },
    // });

    // const muxData = await db.muxData.findUnique({
    //     where: {
    //         chapterId: params.chapterId,
    //     },
    // });

    // if (!chapter || !muxData || !chapter.videoUrl || !chapter.title || !chapter.description) {
    //     return new NextResponse("Missing Fields are Required", { status: 400 });
    // }

    const unpublishedChapter = await db.chapter.update({
      where: { id: params.chapterId },
      data: { isPublished: false },
    });
    const publishedChapterInCourse = await db.chapter.findMany({
      where: {
        courseId: params.courseId,
        isPublished: true,
      },
    });
    if (!publishedChapterInCourse.length) {
    //   const course = await db.course.update({
    //     where: { id: params.courseId },
    //     data: { isPublished: false },
    //   });
    console.log("hey");
    
    }
    return NextResponse.json(unpublishedChapter);
  } catch (error) {
    console.log(error);
    
    return new NextResponse("Internal server error", { status: 500 });
  }
}

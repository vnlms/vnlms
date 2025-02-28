import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request, { params }: { params: { chapterId: string; courseId: string } }) {
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

        const chapter = await db.chapter.findUnique({
            where: {
                id: params.chapterId,
                courseId: params.courseId,
            },
        });

        const muxData = await db.muxData.findUnique({
            where: {
                chapterId: params.chapterId,
            },
        });

        if (!chapter || !muxData || !chapter.videoUrl || !chapter.title || !chapter.description ) {
            console.log("chapter", chapter, "muxData", muxData, "chapter.videoUrl");
            
            return new NextResponse("Missing Fields are Required", { status: 400 });
        }

        const publishedChapter = await db.chapter.update({
            where: { id: params.chapterId },
            data: { isPublished: true },
        });

        return NextResponse.json(publishedChapter);
    } catch (error) {
        console.log(error);
        
        return new NextResponse("Internal server error", { status: 500 });
    }
}

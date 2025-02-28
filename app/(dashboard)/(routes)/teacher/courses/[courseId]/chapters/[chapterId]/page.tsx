import { IconBadge } from "@/components/icon-badge";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import ChapterTitleForm from "./_componentss/chapter-title-form";
import ChapterDescriptionForm from "./_componentss/chapter-description-form";
import ChapterAccessForm from "./_componentss/chapter-access-form";
import ChapterVideoForm from "./_componentss/chapter-video-form";
import Banner from "@/components/banner";
import ChapterActions from "./_componentss/chapter-actions";

interface ChapterIdPageProps {
  params: Promise<{ courseId: string; chapterId: string }>;
}

const ChapterIdPage = async ({ params }: ChapterIdPageProps) => {
  // ✅ Ensure params are resolved correctly
  const { courseId, chapterId } = await params;

  // ✅ Ensure user is authenticated properly
  const user = await auth();
  if (!user?.userId) {
    return redirect("/");
  }

  // ✅ Fetch the chapter safely
  const chapter = await db.chapter.findUnique({
    where: { id: chapterId, courseId },
    include: { muxData: true },
  });

  if (!chapter) return redirect("/");

  // ✅ Compute Completion Status
  const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${requiredFields.length})`;
  const isCompleted = requiredFields.every(Boolean);

  return (
    <>
      {!chapter.isPublished && (
        <Banner
          variant="warning"
          label="This chapter is not published. It will not be visible in the course until it is published."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">Chapter Creation</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterActions
                disabled={!isCompleted}
                courseId={courseId}
                chapterId={chapterId}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Customize your chapter</h2>
              </div>
              <ChapterTitleForm initialData={chapter} courseId={courseId} chapterId={chapterId} />
              <ChapterDescriptionForm initialData={chapter} courseId={courseId} chapterId={chapterId} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">Access Settings</h2>
              </div>
              <ChapterAccessForm initialData={chapter} courseId={courseId} chapterId={chapterId} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">Add a video</h2>
            </div>
            <ChapterVideoForm initialData={chapter} chapterId={chapterId} courseId={courseId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;

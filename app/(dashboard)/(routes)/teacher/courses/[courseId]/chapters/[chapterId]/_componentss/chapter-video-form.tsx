"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ImageIcon} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, MuxData } from "@prisma/client";
import { FileUpload } from "@/components/file-upload";
import MuxPlayer from "@mux/mux-player-react"

interface ChapterVideoProps {
  initialData: Chapter & { muxData?: MuxData | null };
  courseId: string;
  chapterId: string;
}

const ChapterVideoForm = ({ initialData, courseId, chapterId }: ChapterVideoProps) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const updateVideo = async (videoUrl: string) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, { videoUrl });
      toast.success("Chapter updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? "Cancel" : initialData.videoUrl ? "Edit Video" : "Add a Video"}
        </Button>
      </div>

      {isEditing ? (
        <div>
          <FileUpload
            endpoint="chapterVideo"
            onChange={(url) => {
              if (url) {
                updateVideo(url);
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">Upload this chapter&apos;s video</div>
        </div>
      ) : initialData.videoUrl ? (
        <div className="relative aspect-video mt-4">
          <MuxPlayer playbackId={initialData?.muxData?.playbackId || ""}/>
        </div>
      ) : (
        <div className="flex items-center justify-center h-60 mt-4 bg-slate-200 rounded-md">
          <ImageIcon className="h-10 w-10 text-slate-500" />
        </div>
      )}

      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-4">
          Video can take a few minutes to process. Refresh the page if the video does not appear.
        </div>
      )}
    </div>
  );
};

export default ChapterVideoForm;

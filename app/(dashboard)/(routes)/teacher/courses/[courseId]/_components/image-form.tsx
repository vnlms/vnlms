"use client";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

// const formSchema = z.object({
//   imageUrl: z.string().min(1, {
//     message: "Image is required",
//   }),
// });

const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const updateImage = async (url: string) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, { imageUrl: url });
      toast.success("Course Image updated");
      toggleEdit();
      router.refresh();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : initialData.imageUrl ? (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Image
            </>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an Image
            </>
          )}
        </Button>
      </div>

      {/* <p className="text-sm mt-2 text-slate-500 italic">
        {initialData.description || "No description"}
      </p> */} 

      {isEditing ? (
        <div>
          <FileUpload
            endpoint="courseImage"
            onChange={(url) => {
              if (url) {
                updateImage(url);
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            16:9 Ratio Recommended
          </div>
        </div>
      ) : initialData.imageUrl ? (
        <div className="relative aspect-video mt-4">
          <Image
            alt="Course Upload"
            fill
            className="object-cover rounded-md"
            src={initialData.imageUrl}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-60 mt-4 bg-slate-200 rounded-md">
          <ImageIcon className="h-10 w-10 text-slate-500" />
        </div>
      )}
    </div>
  );
};

export default ImageForm;

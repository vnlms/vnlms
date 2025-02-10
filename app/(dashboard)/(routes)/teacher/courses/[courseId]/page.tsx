
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

const CourseIdPage = async({params}: {params: {courseId: string}}) => {
    const {userId}= await auth();
    if(!userId){
        return redirect("/");
    }
    const course=await db.course.findUnique({where:{id: params.courseId}});
    if(!course){
        return redirect("/");
    }
    const requiredFields=[
        course.title,
        course.imageUrl,
        course.price,
        course.categoryId,
        course.description

    ];
    const totalFields=requiredFields.length;
    const compeletedFields=requiredFields.filter(Boolean).length;
    const completionText=`(${compeletedFields}/${totalFields})`
    return ( 
        <div className="p-6">
           <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-2">
                <h1>Course Setup</h1>
            </div>
            <span className="text-sm text-slate-700">Complete all fields{completionText}</span>
           </div>
        </div>
     );
}
 
export default CourseIdPage;
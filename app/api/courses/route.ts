import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const { title } = await req.json();
    
    console.log("Received title:", title);

    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        title,
        userId,
      },
    });

    console.log("Created course:", course);

    return new Response(JSON.stringify(course), { status: 201 });

  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error", error: String(error) }), { status: 500 });
  }
}

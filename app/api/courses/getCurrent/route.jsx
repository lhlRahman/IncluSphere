import { NextResponse } from "next/server";
import getCurrentCourse from "../../../../lib/db/get-current-course";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const { userId } = await req.json();
      const courses = await getCurrentCourse(userId);

      return NextResponse.json({ status: 201, data: courses });
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: `${error}: Internal server error`,
      });
    }
  } else {
    return NextResponse.json({ status: 405, message: "Method not allowed" });
  }
}

import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { FileList } from "@/components/file-list";
import { FileUpload } from "@/components/file-upload";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { files: true },
  });

  if (!user) {
    // Handle the case where the user is not found in the database
    return <div>User not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user.role === "ADMIN" && <FileUpload />}
      <FileList files={user.files} isAdmin={user.role === "ADMIN"} />
    </div>
  );
}
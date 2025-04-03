"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="items-center justify-center flex h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={() => router.push("/students/create")}
      >
        Click to Enter Student Details
      </button>
    </div>
  );
}

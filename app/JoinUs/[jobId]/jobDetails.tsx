"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import JobContent from "./jobContent";

export default function JobDetail() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] flex flex-col items-center">
        <Suspense
          fallback={<p className="text-lg text-gray-700">Loading...</p>}
        >
          <JobContent jobId={jobId} />
        </Suspense>
      </div>
    </>
  );
}

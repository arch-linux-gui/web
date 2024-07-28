"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeadCus from "./head";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import JobContent from "./jobContent";
export default function JobDetail() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  return (
    <>
      <div className="min-h-screen bg-[#0F0F12] flex flex-col items-center">
        <Navbar />
        <Suspense
          fallback={<p className="text-lg text-gray-700">Loading...</p>}
        >
          <JobContent jobId={jobId} />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

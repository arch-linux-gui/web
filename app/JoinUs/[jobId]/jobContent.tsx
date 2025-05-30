"use client";

import { useEffect, useRef, useState } from "react";
import NotFound from "@/app/not-found";
import Metadata from "@/components/metadata";
import { getJobById } from "@/lib/JobData";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobContent({ jobId }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const applySectionRef = useRef(null);

  useEffect(() => {
    if (jobId) {
      setLoading(true);
      const foundJob = getJobById(jobId as number);
      setJob(foundJob);
      setLoading(false);
    }
  }, [jobId]);

  const handleApplyClick = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return <JobSkeleton />;
  }

  if (job === undefined || job === null) {
    return <NotFound />;
  }

  return (
    <>
      <Metadata params={job.title} />
      <header className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] shadow w-full">
        <div className="px-4 py-6 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mt-[9rem] mb-3 text-4xl font-bold  text-wrap lg:text-6xl">
            {job.title}
          </h1>
          <p className="text-xl">{job.location}</p>
          <div className="flex flex-wrap justify-center mt-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 m-1 text-sm font-semibold text-orange-800 bg-orange-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <button
            onClick={handleApplyClick}
            className="inline-block mt-4 px-12 py-3 bg-[#F97316] font-bold text-white rounded-full hover:bg-[#ec9a60] transition duration-300"
          >
            Apply
          </button>
        </div>
      </header>
      <main className="flex-1 w-full py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] shadow-md rounded-lg p-6 mb-6 lg:pl-[5rem] lg:pr-[5rem]">
            <p className="mb-4 text-lg">{job.description}</p>

            <h2
              className="mb-4 text-4xl font-bold"
              style={{ marginTop: "30px" }}
            >
              What you'll do at ALG
            </h2>
            <ul className="mb-4 text-lg  list-disc list-inside">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2
              className="mb-4 text-4xl font-bold"
              style={{ marginTop: "30px" }}
            >
              We'd love to hear from you if you have
            </h2>
            <ul className="mb-4 text-lg list-disc list-inside">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2
              className="mb-4 text-4xl font-bold"
              style={{ marginTop: "30px" }}
            >
              Nice to have
            </h2>
            <ul className="mb-4 text-lg  list-disc list-inside">
              {job.niceToHave.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h2
              ref={applySectionRef}
              className="mb-4 text-4xl font-bold"
              style={{ marginTop: "30px" }}
            >
              How to apply
            </h2>
            <p className="text-lg">
              Email us at{" "}
              <a
                href={`mailto:workwithalgofficial@gmail.com?subject=Application%20For%20${job.title}%20Role`}
                target="_blank"
                className="text-[#F97316] underline hover:text-[#ec9a60] transition duration-300"
              >
                workwithalgofficial@gmail.com
              </a>{" "}
              and tell us why you're excited to join ALG! To give the team a
              better understanding of who you are as a whole person, let us know
              what you are passionate about, and share an example of a project,
              job, or skill that you've picked up on your own. You can attach
              your resume or give a link to your Linkedin profile.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function JobSkeleton() {
  return (
    <div className="w-full">
      <header className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] shadow w-full">
        <div className="px-4 py-6 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <Skeleton className="mt-[9rem] mb-3 h-16 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/4 mx-auto mb-4" />
          <div className="flex flex-wrap justify-center mt-2">
            {[1, 2, 3].map((_, index) => (
              <Skeleton key={index} className="h-8 w-20 m-1 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-12 w-32 mx-auto mt-4 rounded-full" />
        </div>
      </header>
      <main className="flex-1 w-full py-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] shadow-md rounded-lg p-6 mb-6 lg:pl-[5rem] lg:pr-[5rem]">
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            <Skeleton className="h-4 w-4/6 mb-4" />

            {[
              "What you'll do at ALG",
              "We'd love to hear from you if you have",
              "Nice to have",
              "How to apply",
            ].map((title, index) => (
              <div key={index}>
                <Skeleton className="h-10 w-3/4 mb-4 mt-8" />
                {[1, 2, 3, 4].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-5/6 mb-2" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

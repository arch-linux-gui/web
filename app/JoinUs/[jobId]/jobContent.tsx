"use client";

import React, { useEffect, useRef, useState } from "react";
import { getJobById } from "./JobData";
import HeadCus from "./head";

export default function JobContent({ jobId }) {
  const [job, setJob] = useState(null);
  const applySectionRef = useRef(null);

  useEffect(() => {
    if (jobId) {
      const foundJob = getJobById(jobId);
      setJob(foundJob);
    }
  }, [jobId]);

  if (!job) {
    return <p className="text-lg text-gray-700">Loading job details...</p>;
  }

  const handleApplyClick = () => {
    applySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeadCus params={job.title} />
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
                className="px-3 py-1 m-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          <button
            onClick={handleApplyClick}
            className="inline-block mt-4 px-12 py-3 bg-[#6a45d1] font-bold text-white rounded-full hover:bg-[#7554d1] transition duration-300"
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
                className="text-[#6a45d1] underline hover:text-[#7554d1] transition duration-300"
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

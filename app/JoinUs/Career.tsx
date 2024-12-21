import JobCard from "./JobCard";
import { jobs } from "../../lib/JobData";

export default function Career() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B]">
      <main className="py-[8rem]">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8 text-center">
              <h1 className="m-4 font-bold text-7xl">Join ALG</h1>
              <p className="text-xl font-bold opacity-50">
                Help us build Fast and Offline Graphical installer for Arch
                Linux
              </p>
            </div>
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                location={job.location}
                skills={job.skills}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

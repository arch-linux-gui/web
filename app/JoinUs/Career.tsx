import JobCard from "../components/JobCard";
import { jobs } from "./[jobId]/JobData";

export default function Career() {
  return (
    <div className="min-h-screen bg-[#161a1e]">
      <main className="py-[8rem]">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-8 text-center text-white">
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

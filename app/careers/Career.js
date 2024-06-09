import JobCard from "../components/JobCard";
import { jobs } from "./[jobId]/JobData";

export default function Career() {
  return (
    <div className="min-h-screen bg-[#090E0E]">
      <main className="py-[8rem]">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
          <div className="px-4 py-6 sm:px-0">
            <div className="text-white text-center mb-8">
              <h1 className="text-7xl font-bold m-4">Join ALG</h1>
              <p className="opacity-50 font-bold text-xl">
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

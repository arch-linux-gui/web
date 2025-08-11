import Link from "next/link";

interface JobCardProps {
  id: number;
  title: string;
  location: string;
  skills: string[];
}

export default function JobCard({ id, title, location, skills }: JobCardProps) {
  return (
    <Link href={`/JoinUs/job?jobId=${id}`}>
      <div className="flex flex-col bg-[#e7e5e1] dark:bg-[#E5E4E2] text-black shadow-md rounded-3xl p-6 mb-6 cursor-pointer">
        <h2 className="text-3xl font-bold mb-2 pl-3">{title}</h2>
        <p className="text-gray-900 pl-3">{location}</p>
        <div className="mt-2 flex flex-wrap">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="m-1 px-3 py-1 bg-orange-200 text-orange-800 text-sm font-semibold rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

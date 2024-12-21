import { getJobs } from "@/lib/JobData";
import JobDetail from "./jobDetails";

export async function generateStaticParams() {
  return getJobs().map((page) => ({
    slug: page.slugs,
  }));
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  return <JobDetail />;
}

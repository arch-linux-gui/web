export default function HeadCus({ params }) {
  return (
    <>
      <title>{params ? `${params}` : "Job Details"}</title>
    </>
  );
}

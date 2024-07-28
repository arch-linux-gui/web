export default function HeadCus({ params }) {
  return (
    <>
      <title>{params ? `${params}` + " | ALG" : "Job Details"}</title>
    </>
  );
}

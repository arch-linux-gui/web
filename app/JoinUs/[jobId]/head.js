export default function HeadCus({ params }) {
  return (
    <>
      <title>{params ? `${params}` + " | ALG" : "Job Details"}</title>
      <meta name="description" content="Arka Linux GUI" />
      <meta property="og:url" content="https://arkalinuxgui.org/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={params ? `${params}` + " | ALG" : "Job Details"}
      />
      <meta property="og:description" content="Arka Linux GUI" />
      <meta
        property="og:image"
        content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/arkalinuxgui.org/Arka%20Linux%20GUI/Arka%20Linux%20GUI%20(formerly%20Arch%20Linux%20GUI)%2C%20is%20a%20fast%2C%20offline%2C%20graphical%20installer%20for%20Arch%20Linux./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F4ec37f9d-1c03-4b40-96fe-d6ccf8a14667.png%3Ftoken%3DTCHWDYus5O15KyLn5Om9XlrKzLZHWcHNp8zv2pS-9Jg%26height%3D552%26width%3D1200%26expires%3D33266952728/og.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="arkalinuxgui.org" />
      <meta property="twitter:url" content="https://arkalinuxgui.org/" />
      <meta
        name="twitter:title"
        content={params ? `${params}` + " | ALG" : "Job Details"}
      />
      <meta name="twitter:description" content="Arka Linux GUI" />
      <meta
        name="twitter:image"
        content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/arkalinuxgui.org/Arka%20Linux%20GUI/Arka%20Linux%20GUI%20(formerly%20Arch%20Linux%20GUI)%2C%20is%20a%20fast%2C%20offline%2C%20graphical%20installer%20for%20Arch%20Linux./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F4ec37f9d-1c03-4b40-96fe-d6ccf8a14667.png%3Ftoken%3DTCHWDYus5O15KyLn5Om9XlrKzLZHWcHNp8zv2pS-9Jg%26height%3D552%26width%3D1200%26expires%3D33266952728/og.png"
      ></meta>
    </>
  );
}

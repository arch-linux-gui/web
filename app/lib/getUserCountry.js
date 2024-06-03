export async function getUserCountry() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data.country_code; // Ensure you return the correct country code key
  } catch (error) {
    console.error("Failed to fetch user country:", error);
    return null;
  }
}

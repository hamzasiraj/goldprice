export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.goldapi.io/api/XAU/USD",
      {
        headers: {
          "x-access-token": "633c0fb594c160e1b18ad59f7c83fed3633c0fb5",
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gold price" });
  }
}

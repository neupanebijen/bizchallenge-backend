import mainRouter from "../routes/main.js"

// Minimal serverless handler
export default async function handler(req, res) {
  try {
    // Example: simulate Express GET/POST routing
    if (req.method === "GET") {
      // call your GET logic from mainRouter
      res.status(200).json({ message: "Hello from mainRoute GET" })
    } else if (req.method === "POST") {
      const data = req.body
      res.status(200).json({ received: data })
    } else {
      res.status(405).json({ error: "Method not allowed" })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
}

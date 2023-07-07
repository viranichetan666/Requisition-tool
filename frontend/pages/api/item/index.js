import axios from "axios";

export default async function handler(req, res) {

  let headers = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: req.headers?.token,
  };

  if (req.method === "POST") {
    const { body } = req;
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/item`,
        body,
        { headers: headers }
      );

      if (response.status !== 200) {
        res.status(400).json({ error: error });
        return;
      }
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({
        ...response.data,
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
}

import { getFeedbackData } from "./feedback";

function handler(req, res) {
  if (req.method === "DELETE") {
    res.status(200).json({ message: "WIP" });
  } else {
    const { feedbackId } = req.query;
    const data = getFeedbackData();
    const feedback = data.find(f => f.id === feedbackId);

    res.status(200).json({ feedback });
  }
}

export default handler;

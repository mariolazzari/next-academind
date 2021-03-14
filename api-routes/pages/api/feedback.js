import fs from "fs";
import path from "path";

// get data
export function getFeedbackData() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
}

// api handler
function handler(req, res) {
  const data = getFeedbackData();

  if (req.method === "POST") {
    const { email, feedback } = req.body;
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    res.status(200).json({ feedback: data });
  }
}

export default handler;

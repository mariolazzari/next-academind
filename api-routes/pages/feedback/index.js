import { useState } from "react";
import { getFeedbackData } from "../api/feedback";

const Feedback = props => {
  const [feedback, setFeedback] = useState([]);

  return (
    <div>
      <ul>
        {props.feeback.map(i => (
          <li key={i.id}>{i.feedback}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const data = getFeedbackData();

  return {
    props: {
      feeback: data,
    },
  };
}

export default Feedback;

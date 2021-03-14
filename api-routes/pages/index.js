import { useRef, useState } from "react";

function HomePage() {
  const [feedback, setFeedback] = useState([]);
  const mailRef = useRef();
  const fbRef = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      email: mailRef.current.value,
      feedback: fbRef.current.value,
    };

    const res = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  // on feedback click event handler
  const onFeedbackClick = async e => {
    const res = await fetch("/api/feedback");
    const data = await res.json();
    setFeedback(data.feedback);
  };

  // on detail click
  const onDetailClick = id =>{
    const res = await fecth("/api/" + id )
    const data = res.json()
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={mailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={fbRef}></textarea>
        </div>
        <button type="submit">Send feedback</button>
      </form>

      <hr />
      <button onClick={onFeedbackClick}>Load Feedback</button>

      <ul>
        {feedback.map(i => (
          <li key={i.id}>
            {i.feedback} <button onClick={() =>onDetailClick(i.id)}>Show</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

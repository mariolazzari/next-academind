import { useRef } from "react";

function HomePage() {
  const mailRef = useRef();
  const fbRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      email: mailRef.current.value,
      feedback: fbRef.current.value,
    };
  };

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
    </div>
  );
}

export default HomePage;

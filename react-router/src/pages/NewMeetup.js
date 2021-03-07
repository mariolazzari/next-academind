import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const history = useHistory();

  const addMeetupHandler = async meetup => {
    await fetch(
      "https://react-router-7b31a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.replace("/");
  };

  return (
    <div>
      <h1>New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;

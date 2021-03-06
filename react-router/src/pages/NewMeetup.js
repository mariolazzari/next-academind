import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = meetup => {
    fetch(
      "https://react-router-7b31a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div>
      <h1>New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetup;

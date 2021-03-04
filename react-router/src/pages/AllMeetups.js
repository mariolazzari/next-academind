import MeetupList from "../components/meetups/MeetupList";
import DUMMY from "../data/dummy-data";

const AllMeetups = () => {
  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={DUMMY} />
    </section>
  );
};

export default AllMeetups;

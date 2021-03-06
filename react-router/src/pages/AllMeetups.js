import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
//import DUMMY from "../data/dummy-data";

const AllMeetups = () => {
  consy[(loading, setLoading)] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetech(
      "https://react-router-7b31a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setLoading(false);
        setMeetups(data);
      });
  }, []);

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetups;

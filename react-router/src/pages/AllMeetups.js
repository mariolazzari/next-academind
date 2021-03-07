import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
//import DUMMY from "../data/dummy-data";

const AllMeetups = () => {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://react-router-7b31a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
      );
      const data = await res.json();
      // parse firebase res
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }

      setLoading(false);
      setMeetups(meetups);
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1>All meetups</h1>
      {loading && <p>Loading meetups...</p>}
      <MeetupList meetups={meetups || []} />
    </section>
  );
};

export default AllMeetups;

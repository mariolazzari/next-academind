import EventList from "../components/Events/EventList";
import { getAllEvents } from "../dmmyData";

const HomePage = () => {
  return (
    <div>
      <EventList items={getAllEvents()} />
    </div>
  );
};

export default HomePage;

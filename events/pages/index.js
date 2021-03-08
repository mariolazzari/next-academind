import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../dmmyData";

const HomePage = () => {
  return (
    <div>
      <EventList items={getFeaturedEvents()} />
    </div>
  );
};

export default HomePage;

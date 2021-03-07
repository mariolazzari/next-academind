import EventItem from "./EventItem";

const EventList = props => {
  return (
    <ul>
      {props.items.map(item => (
        <EventItem />
      ))}
    </ul>
  );
};

export default EventList;

import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = props => {
  return (
    <ul className={classes.list}>
      {props.items.map(item => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default EventList;

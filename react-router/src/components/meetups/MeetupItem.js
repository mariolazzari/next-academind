import classes from "./MeetupItem.module.css";

const MeetupItem = props => {
  return (
    <li>
      <div className={classes.item}>
        <img className={classes.image} src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To favs</button>
      </div>
    </li>
  );
};

export default MeetupItem;

import Card from "../../components/ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Card>
      <form className={classes.form} onSubmit>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="text" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup address</label>
          <input type="text" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <input type="textarea" id="description" required />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;

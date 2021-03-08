import Link from "next/link";

const EventItem = ({ id, title, image, date, location }) => {
  const humanReadableDate = () =>
    new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li>
      <img src={`/${image}`} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

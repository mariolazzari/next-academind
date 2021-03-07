import Link from "next/Link";

const Home = () => {
  const clients = [
    { id: "mario", name: "Mario" },
    { id: "mary", name: "Mariarosa" },
  ];

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        {clients.map(c => (
          <li key={c.id}>
            <Link href={`/clients/${c.id}`}>{c.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Object link</h2>
      <ul>
        {clients.map(c => (
          <li key={c.id}>
            <Link href={{ pathname: "/clients/[id]", query: { id: c.id } }}>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

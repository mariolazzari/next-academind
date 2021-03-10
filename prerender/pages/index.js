import Link from "next/Link";
import path from "path";
import fs from "fs/promises";

function HomePage({ products }) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <Link href={`/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // redirect if no data
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // return 404 page
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    // page regeneration every minute
    revalidate: 60,
  };
}

export default HomePage;

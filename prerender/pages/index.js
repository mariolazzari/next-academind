import path from "path";
import fs from "fs/promises";

function HomePage({ products }) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;

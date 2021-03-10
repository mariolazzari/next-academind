import path from "path";
import fs from "fs/promises";

const ProductDetail = ({ loadedProduct }) => {
  // fallback component
  if (!loadedProduct) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

async function getData() {
  const filePath = path.join(process.cwd(), "dummy.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();

  const product = data.products.find(p => p.id === productId);
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map(p => p.id);
  const params = ids.map(id => ({ params: { pid: id } }));

  return {
    /*
    paths: [

        //{ params: { pid: "p1" } },
      // { params: { pid: "p2" } },
      // { params: { pid: "p3" } },
    ],
    */
    paths: params,
    fallback: true,
  };
}

export default ProductDetail;

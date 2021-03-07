import { useRouter } from "next/router";

const BlogPosts = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Blog posts</h1>
      <ul>
        {router.query.slug?.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;

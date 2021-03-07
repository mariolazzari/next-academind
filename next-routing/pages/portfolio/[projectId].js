import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Project {router.query.projectId}</h1>
    </div>
  );
};

export default Project;

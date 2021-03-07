import { useRouter } from "next/router";

const ClientProject = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Client project {router.query.clientProjectId}</h1>
    </div>
  );
};

export default ClientProject;

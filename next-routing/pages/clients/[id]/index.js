import { useRouter } from "next/router";

const ClientProjects = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push("/clients/mario/projectA");
    //router.replace()
    //router.push({pathname:"/clients/[clientProjecyId]", query:{}})
  };

  return (
    <div>
      <h1>Client projects {router.query.id}</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjects;

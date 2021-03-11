const UserProfile = props => {
  return (
    <div>
      <h1>{props.username}</h1>
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "Mario",
    },
  };
}

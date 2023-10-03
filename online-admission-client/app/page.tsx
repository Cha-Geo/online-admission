import { Button } from '@/components/button';
import { fetchPosts, fetchUsers } from '@/services/dataFetching';

type Props = {}

const Home = async (props: Props) => {
  const programs: IPosts[] = await fetchPosts();
  const users: any = await fetchUsers();

  return (
    <div className="text-lg font-semibold ">
      {/* <Hero2 /> */}
      <Button>Click Me</Button>
      
      {/* {users && users.map((user) => (
        <p key={user?.id}>
          {user?.username}, {user?.role}{" "}
        </p>
      ))} */}

      {programs?.slice(0, 10).map((program) => (
        <div key={program.id} className="">
          <h2 className="py-4 my-4">{program.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
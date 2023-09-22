import { fetchPosts } from '@/services/dataFetching';

type Props = {}

const Home = async (props: Props) => {
  const programs: IPosts[] = await fetchPosts();

  return (
    <div className='text-lg font-semibold '>
      {/* <Hero2 /> */}
      {programs?.slice(0,10).map(program => (
        <div key={program.id} className="">
          <h2 className='py-4 my-4'>{program.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home;
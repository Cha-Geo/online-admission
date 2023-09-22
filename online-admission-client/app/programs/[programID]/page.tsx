// Purpose: This dynamic page shows detailed information about a specific academic program, including prerequisites, admission requirements, and application deadlines

import ProgramCard from "@/components/ProgramCard";
import { fetchStaticPost, fetchStaticPosts } from "@/services/dataFetching";

type Props = {
  params: {
    productID: string;
  };
}

export async function generateStaticParams() {
  const programs: IPosts[] = await fetchStaticPosts();

  return programs.map((program) => ({
    productID: program.id,
  }));
}

const ProgramDetails = async ({ params }: Props) => {
  const post = await fetchStaticPost(params);
  console.log(post);
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold">{post?.title}</h1>
        <p className="text-gray-600 mt-2">{post?.body}</p>
        <div className="mt-4">
          <p>
            <strong>Duration:</strong> {post?.id}
          </p>
          <p>
            <strong>Eligibility:</strong> {post?.userId}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetails;
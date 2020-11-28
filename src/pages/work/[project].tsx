import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getSlugs } from "../../lib/projects";

interface IndividualProjectProps {}
const IndividualProjects: NextPage<IndividualProjectProps> = () => {
  return (
    <div>
      <h1>Heloo there</h1>
    </div>
  );
};

export default IndividualProjects;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs();
  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params:", params);

  return {
    props: {
      post: {},
    },
  };
};

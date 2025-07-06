import { Link } from "react-router-dom";
import { Segment } from "../../components/Segment";
import { getViewIdeaRoute } from "../../lib/routes";
import { trpc } from "../../lib/trpc";

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  return (
    <Segment title="All Ideas">
      <div>
        {data?.ideas.map((idea) => (
          <div key={idea.nick}>
            <Segment
              size={2}
              title={
                <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>
                  {idea.name}
                </Link>
              }
              description={idea.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  );
};

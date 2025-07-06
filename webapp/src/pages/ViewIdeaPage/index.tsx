import { useParams } from "react-router-dom";
import { Segment } from "../../components/Segment";
import { viewIdeaRouteParams } from "../../lib/routes";
import { trpc } from "../../lib/trpc";

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as viewIdeaRouteParams;

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery(
    { ideaNick },
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }

  if (!data?.idea) {
    return <span>Idea not found...</span>;
  }

  return (
    <Segment
      title={data.idea.name}
      description={data.idea.description}
      size={1}
    >
      <p dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  );
};

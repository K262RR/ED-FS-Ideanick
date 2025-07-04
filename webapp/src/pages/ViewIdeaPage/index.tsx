import { useParams } from "react-router-dom";
import { viewIdeaRouteParams } from "../../lib/routes";
import { trpc } from "../../lib/trpc";

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as viewIdeaRouteParams;

  const { data, error, isLoading, isFetching, isError } =
  trpc.getIdea.useQuery({ideaNick});

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
    <div>
      <h1>{ data.idea.name }</h1>
      <p>{ data.idea.description }</p>
      <div>
        <p dangerouslySetInnerHTML={{__html: data.idea.text}} />
      </div>
    </div>
  );
};
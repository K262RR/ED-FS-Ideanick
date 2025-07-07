import { useState } from "react";
import { Segment } from "../../components/Segment";
import css from "./index.module.scss";

export const NewIdeaPage = () => {
  const [state, setState] = useState({
    name: "",
    nick: "",
    description: "",
    content: "",
  });

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.info(state);
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            name="name"
            id="name"
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="nick">Nick</label>
          <br />
          <input
            type="text"
            value={state.nick}
            onChange={(e) => setState({ ...state, nick: e.target.value })}
            name="nick"
            id="nick"
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
            name="description"
            id="description"
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="content">Content</label>
          <br />
          <textarea
            value={state.content}
            onChange={(e) => setState({ ...state, content: e.target.value })}
            name="content"
            id="content"
          />
        </div>
        <button type="submit"> Отправить</button>
      </form>
    </Segment>
  );
};

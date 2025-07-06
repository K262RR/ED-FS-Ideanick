import { Link, Outlet } from "react-router-dom";
import { getAllIdeasRoute, newIdeaRoute } from "../../lib/routes";
import css from "./index.module.scss";

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <h1 className={css.logo}>IdeaNick</h1>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={newIdeaRoute()}>
              New Ideas
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};

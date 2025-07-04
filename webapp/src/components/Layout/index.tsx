import { Link, Outlet } from "react-router-dom";
import { getAllIdeasRoute } from "../../lib/routes";
import styles from "./index.module.scss";

export const Layout = () => {
  return (
    <div>
      <p>
        <b className={styles.logo}>IdeaNick</b>
      </p>
      <ul>
        <li>
          <Link to={getAllIdeasRoute()}>All ideas</Link>
          </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
};
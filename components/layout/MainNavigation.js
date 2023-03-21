import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  //console.log(router.pathname);

  return (
    <header className={classes.header}>
      <h1>Next Meetups</h1>
      <nav>
        <ul>
          <li>
            <Link
              href={"/"}
              className={router.pathname === "/" ? classes.active : ""}>
              {" "}
              All Meetups{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/add-meetups"}
              className={
                router.pathname === "/add-meetups" ? classes.active : ""
              }>
              {" "}
              Add New Meetups{" "}
            </Link>
          </li>
          <li>
            <Link
              href={"/favorites"}
              className={
                router.pathname === "/favorites" ? classes.active : ""
              }>
              {" "}
              Favorites <span className={classes.badge}>0</span>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

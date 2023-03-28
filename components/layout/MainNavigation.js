import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();
  //console.log(router.pathname);

  return (
    <header className={classes.header}>
      <h1><Link href={"/"}> Next Moviez </Link></h1>
      <nav>
        <ul>
          <li>
            <Link
              href={"/all-moviez"}
              className={router.pathname === "/all-moviez" ? classes.active : ""}>
              {" "}
              All Moviez{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href={"/add-moviez"}
              className={
                router.pathname === "/add-moviez" ? classes.active : ""
              }>
              {" "}
              Add New Moviez{" "}
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

import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import {useSelector} from 'react-redux';

const MainNavigation = () => {
  const router = useRouter();
  // console.log(router.pathname);//this shows whats immediately after the domain/. example: http://localhost:3000/all-moviez
  
   //console.log(router.query.moviezId);//this shows undefined in the console here.

   const totalFaves = useSelector((state)=>{
    return state.favorite.totalFaves});

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
              Favorites <span className={classes.badge}>{totalFaves}</span>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

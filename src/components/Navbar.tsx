import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/solissolutions.png"
import classes from './Navbar.module.css'
import clsx from "clsx";
const ROOT_PATH = import.meta.env.BASE_URL

export const Navbar = () => {
  const location = useLocation()
  return (
    <nav className={classes.nav}>
      <Link to={ROOT_PATH}>
        <img src={Logo} width={45} height={45} />
      </Link>
      <ul className={classes.list}>
        <li>
          <Link to={ROOT_PATH} className={clsx(location.pathname === ROOT_PATH && classes.active)}>Home</Link>
        </li>
        <li>
          <Link to={`${ROOT_PATH}projects`} className={clsx(location.pathname === `${ROOT_PATH}projects` && classes.active)}>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

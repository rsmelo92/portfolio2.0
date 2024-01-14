import { Link } from "react-router-dom";
import Logo from "@/assets/solissolutions.png"
import classes from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <Link to='/'>
        <img src={Logo} width={45} height={45} />
      </Link>
      <ul className={classes.list}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

import { Link } from "react-router-dom";
import Logo from "@/assets/solissolutions.png"
import classes from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <Link to='/portfolio2.0/'>
        <img src={Logo} width={45} height={45} />
      </Link>
      <ul className={classes.list}>
        <li>
          <Link to='/portfolio2.0/'>Home</Link>
        </li>
        <li>
          <Link to='/portfolio2.0/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

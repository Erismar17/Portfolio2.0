import Buttons from "./Button/Buttons";
import Profile from "./Profile/Profile";
import ThemeToggle from "../Theme/Theme";

const Navigation = () => {
    return (
        <div className="flex justify-between mx-5 items-center">
            <ThemeToggle/>
            <Buttons />
            <Profile />
        </div>
    );
};

export default Navigation;

/* 
import { Link } from "react-router";

const Navigation = () => {
    return (
        <div className="flex justify-between mx-5 items-center">
            <Link to={'/work'}><button >Work</button></Link>
            <Link to={'/skills'}><button >Skills</button></Link>
            <Link to={'/cv'}><button >CV</button></Link>
        </div>
    );
};

export default Navigation;
 */
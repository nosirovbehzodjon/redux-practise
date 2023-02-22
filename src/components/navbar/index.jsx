import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <p>Navbar</p>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
            </ul>
        </>
    );
};
export default Navbar;

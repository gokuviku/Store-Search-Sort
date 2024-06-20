import { Link, useLocation } from "react-router-dom";

const Contact = () => {
    const location = useLocation();

    return (
        <div>
            <h1>Contact</h1>
            <p>Current path: {location.pathname}</p>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};

export default Contact;

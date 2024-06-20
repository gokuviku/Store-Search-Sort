import { Link } from "react-router-dom"


const About = () => {
    return (
        <div>About
            <h1>
                <Link to="/contact" >contact</Link>
                <Link to="/" >home</Link>
            </h1>
        </div>
    )
}
export default About
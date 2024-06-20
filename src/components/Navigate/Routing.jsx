import { useNavigate, Link } from "react-router-dom"
const Routing = () => {

    const navigate = useNavigate()

    const handleNav = ()=>{
        navigate('/service')
    }

    return (
        <div className="">home
            <h1>
                <Link to="/about" >about</Link>
                <Link to="/contact" >contact</Link>
                <button onClick={handleNav} >service</button>
            </h1>
        </div>
    )
}
export default Routing
import { Link } from 'react-router-dom';

function Navigation(){

    return (
        <>
            <nav> 
            <Link to="/">Home</Link>
            <Link to="/topics">Topics</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/order">Order</Link>
            <Link to="/gamePage">Games</Link>
            <Link to="/contact">Contact</Link>
            </nav>
        </>
    )
}
export default Navigation;
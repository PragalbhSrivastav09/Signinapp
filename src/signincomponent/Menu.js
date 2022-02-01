import react from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
const Menu = (props) => {
    return (
        <div style={{ display: "inline-flex" }}>
            <Typography color="text.secondary" varient="h1" component="h1" style={{ color: "white", margin: "20px" }} gutterBottom>
                <Link to="/" className="link-name"> Sign in Page </Link>

            </Typography>
            <Typography color="text.secondary" varient="h1" component="h1" style={{ color: "white", margin: "20px" }} gutterBottom>
                <Link to="/signup" className="link-name"> Sign Up Page </Link>
            </Typography>
        </div>
    )
};
export default Menu;
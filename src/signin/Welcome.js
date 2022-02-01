import react from 'react';
import Typography from '@mui/material/Typography';
import SignIn from "./signComponent/SignIn";

const Welcome = (props) => {
    console.log(props.name)
    return (
        <>
            <Typography> Welcome {props.email} </Typography>
        </>
    )
};
export default Welcome;
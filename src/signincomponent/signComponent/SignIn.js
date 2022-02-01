import { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from '../redux/signinAction';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import "./Signin.css";
import Box from '@mui/material/Box';
import Menu from "../Menu";
import { Link } from "react-router-dom";

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    return (
        <>
            <Box component="form" sx={{ '& > :not(style)': { m: 1 }, }} noValidate autoComplete="off" >
                <Menu />
                <Card sx={{ minWidth: 275 }} style={{ width: "30%", margin: "0 auto" }} >
                    <Paper elevation={3}  >
                        <CardContent >
                            <Typography color="text.secondary" varient="h1" component="h1" gutterBottom>
                                Login Page
                            </Typography><br />
                            <TextField id="standard-basic" label="Enter your Email...." variant="standard"  value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                            <TextField id="standard-basic" label="Enter your Password...." variant="standard" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

                            <Button variant="outlined" onClick={() => dispatch(login(email, password, true))} ><Link to="/welcome" name={email}>Log In</Link></Button>
                        </CardContent>
                    </Paper>
                </Card>
            </Box>
        </>
    )
};
export default SignIn;

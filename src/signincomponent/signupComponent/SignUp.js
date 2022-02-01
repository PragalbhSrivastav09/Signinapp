import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/signinAction';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Menu from "../Menu";
import "../signComponent/Signin.css";

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [dob, setDOB] = useState('')
    const dispatch = useDispatch();
    return (
        <div>
            <Menu />
            <Card sx={{ minWidth: 275 }} style={{ width: "30%", margin: "0 auto" }} >
                <CardContent >
                    <Typography color="text.secondary" varient="h1" component="h1" gutterBottom>
                        Sign Up Page
                    </Typography>
                    <TextField 
                        type="text" 
                        id="standard-basic" 
                        label="Enter your Name...." 
                        variant="standard" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br /><br />
                    <TextField type="email" id="standard-basic" label="Enter your Email...." variant="standard" value={Email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                    <TextField type="password" id="standard-basic" label="Enter your Password...." variant="standard" value={Password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                    <TextField type="date" id="standard-basic" variant="standard" style={{ width: "57%"}} value={dob} onChange={(e) => setDOB(e.target.value)} /><br /><br />
                    <div>
                        <Button type="submit" variant="outlined" onClick={() => dispatch(signup(name, Email, Password, dob))} >Sign Up</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
};
export default SignUp;

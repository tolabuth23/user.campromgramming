import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function CreateUser() {

    const handleSubmit = event=>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": avatar
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
    .then(response => response.json())
    .then(result => {
        alert(result['message'])
        if (result['status'] === 'ok'){
            window.location.href ='/'
        }
    })
    .catch(error => console.log('error', error));
        }

    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [email, setEmail] = React.useState('');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p: 2}}>
      <Typography variant="h6" gutterBottom>
        Create User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
         <Grid item xs={12}  >
         <TextField  label="First Name" id="outlined-basic" fullWidth required variant="outlined" 
         onChange={(e)=>setFname(e.target.value)}/>
        </Grid>
        <Grid item  xs={12} >
        <TextField label="Last Name" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e)=>setLname(e.target.value)}/>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField label="Username" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e=>setUsername(e.target.value))}/>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField label="Email" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e)=>setEmail(e.target.value)}/>
        </Grid>
        <Grid item  xs={12}>
        <TextField label="Avatar" id="outlined-basic" fullWidth required variant="outlined" 
        onChange={(e)=>setAvatar(e.target.value)}/>
        </Grid>
        <Grid item  xs={12}>
        <Button type='submit' variant="contained" fullWidth >
        Create User
      </Button>
        </Grid>

        </Grid>

        
      </form>
      </Container>
    </React.Fragment>
  );
}

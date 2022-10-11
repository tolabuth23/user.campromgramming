import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function UpdateUser() {
  const {id} = useParams();
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
   
    fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result['status'] === "ok"){
          setFname(result['user']['fname']);
          setLname(result['user']['lname']);
          setUsername(result['user']['username']);
          setEmail(result['user']['email'])
          setAvatar(result['user']['avatar'])
          
        }
      })
      .catch(error => console.log('error', error));
  },[id])


    const handleSubmit = event=>{
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "id": id,
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": avatar
        });

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

    fetch("https://www.melivecode.com/api/users/update", requestOptions)
    .then(response => response.json())
    .then(result => {
        alert(result['message'])
        if (result['status'] === 'ok'){
            window.location.href ='/'
        }
    })
    .catch(error => console.log('error', error));
        }

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p: 2}}>
      <Typography variant="h6" gutterBottom>
        Update User
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
         <Grid item xs={12}  >
         <TextField  label="First Name" id="fname" fullWidth required variant="outlined" 
         onChange={(e)=>setFname(e.target.value)}
         value={fname}/>
        </Grid>
        <Grid item  xs={12} >
        <TextField label="Last Name" id="lname" fullWidth required variant="outlined" 
        onChange={(e)=>setLname(e.target.value)}
        value={lname}/>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField label="Username" id="username" fullWidth required variant="outlined" 
        onChange={(e=>setUsername(e.target.value))}
        value={username}/>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <TextField label="Email" id="email" fullWidth required variant="outlined" 
        onChange={(e)=>setEmail(e.target.value)}
        value={email}/>
        </Grid>
        <Grid item  xs={12}>
        <TextField label="Avatar" id="avatar" fullWidth required variant="outlined" 
        onChange={(e)=>setAvatar(e.target.value)}
        value={avatar}/>
        </Grid>
        <Grid item  xs={12}>
        <Button type='submit' variant="contained" fullWidth >
        Update User
      </Button>
        </Grid>

        </Grid>

        
      </form>
      </Container>
    </React.Fragment>
  );
}

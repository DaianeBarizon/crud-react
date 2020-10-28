import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(6),
  },
  padding: {
    padding: theme.spacing(4),
  },
}));

const Login = ({ history }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    console.log(name, lastName, email, password);
    history.push('/main');
  }

  return (
    <>
      <h2>Acesso</h2>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.margin}>
            <div className={classes.padding}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                      <TextField id="username" label="Nome" type="text" onChange={e => setName(e.target.value)} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="lastname" label="Sobrenome" type="text" onChange={e => setLastName(e.target.value)} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="email" label="Email" type="email" onChange={e => setEmail(e.target.value)} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="password" label="Password" type="password" pattern="^.{6,10}$" onChange={e => setPassword(e.target.value)} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '10px' }}>
                    <Button className={classes.margin} variant="contained" color="primary" type="submit" style={{ textTransform: "none", witdh: "50%" }}>Entrar</Button>
                </Grid>
            </div>
        </Paper>
      </form>
    </>
  );
}

export default Login;
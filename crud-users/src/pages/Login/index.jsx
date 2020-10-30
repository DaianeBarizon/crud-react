import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth } from '../../hook/AuthContext';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(6),
  },
  padding: {
    padding: theme.spacing(4),
  },
}));

const Login = ({ history }) => {
  const { signIn } = useAuth();
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn();
    console.log(name, email, password);
    history.push('/users');
  }

  return (
    <>
      <h2>Acesso</h2>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <Paper className={classes.margin}>
            <div className={classes.padding}>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                      <TextField id="username" label="Nome" type="text" value={name} onChange={e => setName(e.target.value)} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="email" label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} fullWidth required />
                    </Grid>
                </Grid>
                <Grid container spacing={8} alignItems="flex-end">
                    <Grid item md={true} sm={true} xs={true}>
                        <TextField id="password" label="Password" type="password" value={password} pattern="^.{6,10}$" onChange={e => setPassword(e.target.value)} fullWidth required />
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
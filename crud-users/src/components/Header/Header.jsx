import React from 'react';
import { Container, Content, Profile, Name, Title } from './styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import history from '../../helpers/history';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../hook/AuthContext';

const Header = ({title}) => {
  const { user, signOut } = useAuth();

  async function handleSignOut() {
    await signOut();
    history.push('/');
    document.location.reload(true);
  }

  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Profile>
            <AccountCircleIcon
              color="primary"
              style={{ fontSize: 40, margin: 10 }}
            />
            <div>
              <Name>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
                <p>Administrador</p>
              </Name>
              <Button variant="contained" color="primary" disableElevation onClick={handleSignOut}>
                sair
              </Button>
            </div>
        </Profile>
      </Content>
    </Container>
  );
}

export default Header;
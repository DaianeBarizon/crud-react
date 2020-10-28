import React from 'react';
import { Container, Content, Profile, Name, Title } from './styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

export default function Header({title}) {
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
                <p>Daiane Barizon</p>
                <p>Administrador</p>
              </Name>
              <Button variant="contained" color="primary" disableElevation onClick={() => false}>
                sair
              </Button>
            </div>
        </Profile>
      </Content>
    </Container>
  );
}
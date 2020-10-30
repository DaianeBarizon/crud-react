import React, { useState, useEffect } from 'react';
import Button from '../../components/ButtonElevation/ButtonElevation';
import api from '../../services/api';
import { usePerson } from '../../hook/PersonProvider';
import Search from '../../components/Search/Search';
import Header from '../../components/Header/Header';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Modal from '../../components/Modal/Modal';
import Loading from '../../components/Loading/Loading';
import { Wrapper } from './styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
}))(TableRow);
  
const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
});

const Main = () => {
  const classes = useStyles();
  const { person, changePerson } = usePerson();
  
  const [nameSelected, setNameSelected] = useState('');
  const [lastNameSelected, setLastNameSelected] = useState('');
  const [emailSelected, setEmailSelected] = useState('');
  const [passwordSelected, setPasswordSelected] = useState('');
  const [checkedSelected, setCheckedSelected] = useState(true);
  const [perfilSelect, setPerfilSelected] = useState('Administrador');
  const [userSelected, setUserSelected] = useState(0);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([person]);
  
  const [perfilAdd, setPerfilAdd] = useState('Administrador');
  const [checkedAdd, setCheckedAdd] = useState(true);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [nameAdd, setNameAdd] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [lastNameAdd, setLastNameAdd] = useState('');
  const [passwordAdd, setPasswordAdd] = useState('');

  //listar
  useEffect(() => {
    const func = async () => {
      try {
        const user = await api.get('/usuarios');
        changePerson(user.data.sort(function (a, b) {
          if (a.nome < b.nome) {
            return -1;
          }
          // a must be equal to b
          return 0;
        }));
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    func();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //deletar
  const handleRemove = async (item) => {
    await api.delete(`/usuarios/${item.id}`);

    const filtered = person.filter((el) => {
      return el.id !== item.id;
    });
    changePerson(filtered);
  };

  //criar
  const handleSaveUser = async (userSelected, checked, perfil, name, email, lastName, password) => {
    console.log(userSelected);
    if (name === ''){
      return alert('Campo nome não pode ser vazio!');
    };
    await api.post('/usuarios', {
        nome: name,
        sobrenome: lastName,
        tipoUsuario: perfil,
        email: email,
        senha: password,
        ativo: checked
    })
    .then(res => {
      changePerson([...searchResults, res.data].sort(function (a, b) {
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }))
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
    })    
    setOpenModalAdd(false);
    setPerfilAdd('Administrador');
    setCheckedAdd(true);
    setNameAdd('');
    setEmailAdd('');
    setLastNameAdd('');
    setPasswordAdd('');
  }

  //editar
  const handleEditUser = async (userSelected, checked, perfil, name, email, lastName, password) => {
    if (name === ''){
      return alert('Campo nome não pode ser vazio!');
    };
    
    await api.put(`/usuarios/${userSelected}`, {
        nome: name,
        sobrenome: lastName,
        tipoUsuario: perfil,
        email: email,
        senha: password,
        ativo: checked
    })
    document.location.reload(true);
    setOpenModalEdit(false);
  }

  //
  const [row] = useState([
    { title: 'Usuário' },
    { title: 'Tipo de Usuário' },
    { title: 'Usuário ativo' },
    { title: 'Editar' },
    { title: 'Excluir' },
  ]);
  
  //
  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
  };

  const handleOpenModalEdit = (item) => {
    setNameSelected(item.nome);
    setLastNameSelected(item.sobrenome);
    setEmailSelected(item.email);
    setPasswordSelected(item.senha);
    setCheckedSelected(item.ativo);
    setPerfilSelected(item.tipoUsuario);
    setUserSelected(item.id);
    setOpenModalEdit(true);
  };
  
  //
  const handleChangeCheckboxAdd = (event) => {
    setCheckedAdd(event.target.checked);
  };

  const handleChangePerfilAdd = (event) => {
    setPerfilAdd(event.target.value);
  };

  //
  const handleChangeCheckboxEdit = (event) => {
    setCheckedSelected(event.target.checked);
  };

  const handleChangePerfilEdit = (event) => {
    setPerfilSelected(event.target.value);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Modal 
        openModal={openModalAdd}
        onCancel={() => setOpenModalAdd(false)}
        onConfirm={handleSaveUser}
        setPerfil={handleChangePerfilAdd}
        perfil={perfilAdd}
        checked={checkedAdd}
        setChecked={handleChangeCheckboxAdd}
        title='Cadastrar Usuário'
        setName={setNameAdd}
        setLastName={setLastNameAdd}
        setPassword={setPasswordAdd}
        setEmail={setEmailAdd}
        name={nameAdd}
        lastName={lastNameAdd}
        password={passwordAdd}
        email={emailAdd}
      />
      <Modal 
        openModal={openModalEdit}
        onCancel={() => setOpenModalEdit(false)}
        onConfirm={handleEditUser}
        setPerfil={handleChangePerfilEdit}
        setChecked={handleChangeCheckboxEdit}
        title='Editar Usuário'
        setName={setNameSelected}
        setLastName={setLastNameSelected}
        setPassword={setPasswordSelected}
        setEmail={setEmailSelected}
        name={nameSelected}
        lastName={lastNameSelected}
        password={passwordSelected}
        email={emailSelected}
        checked={checkedSelected}
        perfil={perfilSelect}
        userSelected={userSelected}
      />
      <Header title={'Gerenciar usuário'} />
      <Wrapper>
        <Search 
          title='Usuários'
          setSearchResults={setSearchResults}
          value={search}
          setValue={setSearch}
        />
        <Button title='Cadastrar' type="button" onClick={handleOpenModalAdd} />
      </Wrapper>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {row.map((item, index) => (
                <StyledTableCell key={index} align="center">
                  {item.title}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResults.map((item, index) => (
              <StyledTableRow key={index}>
                 <StyledTableCell align="center" component="th" scope="row">
                 {item.nome}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.tipoUsuario}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {item.ativo === true ? <CheckIcon color="primary" /> : <CloseIcon color="error" />}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <CreateIcon
                    color="primary"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleOpenModalEdit(item)}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <DeleteIcon
                    color="secondary" 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => handleRemove(item)} 
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Main;

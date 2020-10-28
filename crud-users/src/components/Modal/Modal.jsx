import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '../InputRadio/InputRadio';
import Checkbox from '../Check/Check';

const FormDialog = ({ 
  openModal, 
  onCancel, 
  onConfirm,
  perfil, 
  setPerfil, 
  checked, 
  setChecked, 
  title,
  setName,
  setLastName,
  setPassword,
  setEmail,
  name,
  lastName,
  email,
  password,
  userSelected,
}) => {
  return (
    <div>
      <Dialog open={openModal} onClose={onCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <Checkbox label='Usuário ativo' checked={checked} handleChangeCheckbox={setChecked} />
          <Radio
            title='Tipo de Usuário'
            handleChange={setPerfil}
            value={perfil}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Sobrenome"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Cancel
          </Button>
        <Button onClick={() => onConfirm(userSelected, checked, perfil, name, email, lastName, password)} type="submit" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
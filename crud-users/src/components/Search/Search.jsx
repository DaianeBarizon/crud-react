import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Container, Title } from './styles';
import { usePerson } from '../../hook/PersonProvider';

export default function InputSearch({ title, value, setValue, setSearchResults }) {
  const { person } = usePerson();

  useEffect(() => {
      setSearchResults(
        person.filter(item => { return item.nome.toLowerCase().includes(value.toLowerCase())})
      )
  }, [value, person, setSearchResults])

  return (
    <Container>
      <Title>{title}</Title>
      <SearchIcon size={30} />
      <TextField 
        id="standard-search" 
        label="Search field" 
        type="search" 
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </Container>
  );
}
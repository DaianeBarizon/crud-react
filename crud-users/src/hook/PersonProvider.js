import React, { useCallback, useContext } from 'react';

const initialState = {
  person: [],
  changePerson: () => {},
};

const PersonContext = React.createContext(initialState);

export function PersonProvider({ person: personInitial, children }) {
  const [person, setPerson] = React.useState(personInitial || initialState.person);

  const changePerson = useCallback((value) => {
    setPerson(value);
  }, []);

  return (
    <PersonContext.Provider value={{ person, changePerson }}>
      {children}
    </PersonContext.Provider>
  );
}

export function usePerson() {
  return useContext(PersonContext);
}

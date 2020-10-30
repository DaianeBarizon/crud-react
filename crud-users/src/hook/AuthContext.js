import {createContext, useState, useEffect, useContext} from 'react';
import Loading from '../components/Loading/Loading';

import auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({ signed: true });

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function localStoragedData() {
            const storagedUser = await localStorage.getItem('@Auth:user');
            const storagedToken = await localStorage.getItem('@Auth:token');

            await new Promise(resolve => setTimeout(resolve, 2000));

            if(storagedUser && storagedToken) {
                setUser(JSON.stringify(storagedUser));
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
            }
            setIsLoading(false);
        }
        localStoragedData();
    }, []);

    async function signIn() {
        const response = await auth();
        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await localStorage.setItem('@Auth:user', JSON.stringify(response.user));
        await localStorage.setItem('@Auth:token', response.token);
    }

    async function signOut() {
        await localStorage.clear();
        setUser(null);
        // localStorage.removeItem(user);
    }

    if (isLoading) {
        return <Loading />;
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
   const context = useContext(AuthContext);

   if(!context) {
       throw new Error('Error');
   }

   return context;
}

export {AuthProvider, useAuth};
import { UserDTO } from '@dtos/UserDTO';
import { ReactNode, createContext } from 'react';

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Diego Henrique Ferreira',
          email: 'diego@teste.com',
          avatar: 'diego.png'
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import LoginForm from './LoginForm';
import ProductList from './ProductList';
import LogoutButton from './LogoutButton';

const HomePage = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <LogoutButton />
          <ProductList />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default HomePage;

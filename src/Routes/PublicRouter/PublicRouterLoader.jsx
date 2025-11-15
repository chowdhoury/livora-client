import React, { useContext } from 'react';
import Loader from '../../Components/Shared/Loader/Loader';
import AuthContext from '../../Auth/AuthContext/AuthContext';

const PublicRouterLoader = ({ children }) => {
    const {loading } = useContext(AuthContext);
    if(loading) return <Loader />;
    return children;
};

export default PublicRouterLoader;
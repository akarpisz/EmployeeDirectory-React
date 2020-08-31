import React from 'react';

const userContext = React.createContext({users:[], search:"", sorted:[]});

export default userContext;
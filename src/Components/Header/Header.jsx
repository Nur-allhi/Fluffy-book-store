import React, { useContext } from 'react';

import styled from 'styled-components';
import { userContext } from '../../App';
import HamBurger from './HamBurger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`


const Header = () => {
  const {loggedInUser,setLoggedInUser} = useContext(userContext)
  
  return (
    <Nav>
      <div className="logo">
        Fluffy Book store
      </div>
      <HamBurger />
    </Nav>
  )
}

export default Header
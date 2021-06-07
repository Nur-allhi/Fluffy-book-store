import React, { useContext } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { userData } from '../../App';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: black;
    font-weight: 500;
  }
  a{
    text-decoration: none;
  }
  button{
    background-color: rgb(235, 22, 15);
  color: white;
  font-size: 1rem;
  padding: 0 15px;
  width: auto;
  height: 30px;
  border: none;
  border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #FFF;
    }
  }
`;

const RightNav = ({ open }) => {
  const [loggedInUser] = useContext(userData)
  return (
    <Ul open={open}>
      <Link to="/">
      <li>Home</li>
      </Link>
      <Link to="/orders"><li>Orders</li></Link>
      <Link to="/admin"><li>Admin</li></Link>
      <Link to="/login">
        <li>
          <button>{ loggedInUser.email ? loggedInUser.displayName : "Login"}</button>
      </li>
      </Link>
    </Ul>
  )
}

export default RightNav
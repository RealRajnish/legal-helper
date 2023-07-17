import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <figure>
        <NavLink to="/">
          <img
            src="https://legal-helpcenter.com/wp-content/uploads/2020/11/3.png"
            alt=""
            width={50}
            height={50}
          />
        </NavLink>
      </figure>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/table">Table</NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  ul {
    display: flex;
    gap: 2rem;
    flex: 1;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
`;

export default Navbar;

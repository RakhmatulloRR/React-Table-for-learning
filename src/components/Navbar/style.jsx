import styled from "styled-components";

export const NavbarBox = styled.div`
  background-color: #060b26;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 2;
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background-color: none;
  } 
`;
export const Nav = styled.nav`
  background-color: #060b26;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.tgl ? "-100%" : "0")};
  transition: ${(props) => (props.tgl ? "80ms" : "300ms")};
  z-index: 2;

  
  ul {
    width: 100%;
    height: 100%;
    padding-inline-start: 0;
    ul{
      overflow-y: scroll;
      height: calc(100% - 80px);
    }
    .navbar-toggle {
      background-color: #060b26;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .menu-bars {
      margin-left: 2rem;
      font-size: 2rem;
      background-color: none;
    }
    .nav-text {
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0.5rem 0 0.5rem 1rem;
      list-style: none;
      height: 60px;
      a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 1.1rem;
        width: 95%;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        border-radius: 4px;
        :hover {
          background-color: #1a83ff;
        }
        span {
          margin-left: 1rem;
        }
      }
    }
  }
`;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';
const Header = () =>{
    return (
        <>
          <Navbar bg="dark" variant="dark">
            
            <Container>
            <Link to="/" className="navbar-brand">홈</Link>
              <Nav className="me-auto">
              <Link to="/Detail" className="nav-link">글상세</Link>
              <Link to="/saveForm" className="nav-link">글쓰기</Link>
              <Link to="/LoginForm" className="nav-link">로그인</Link>
              <Link to="/JoinForm" className="nav-link">조인</Link>
              <Link to="/UpdateForm" className="nav-link">수정</Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
        </>
      );
}
export default Header;
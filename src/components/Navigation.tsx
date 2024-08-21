"use client"; 

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';

function Navigation() {
  return (
   <>
     <Navbar expand="md" className="bg-dark navbar-dark py-1">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/assets/global/logo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end d-flex align-items-center"> {/* Adjusted alignment */}
            <Nav.Link href="#home" className="text-center">
              CONTACT
            </Nav.Link>
            <Nav.Link href="#order" className="text-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
                ORDER NOW
              </button>
            </Nav.Link>
            <Nav.Link href="#link" className="text-center">
              <Image
                src="/assets/global/usFlag.svg"
                alt="US Flag"
                width={30}
                height={30}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
}

export default Navigation;

import React, {ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {Container, Nav, Navbar} from "react-bootstrap";

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({children, title = 'This is the default title'}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand href="/">PropLogic</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={"reponsive-navbar-nav"}/>
          <Navbar.Collapse>
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            </Nav>
            {/*<Nav className="flex-column">*/}
            {/*  <Nav.Link>Chapter 1</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 2</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 3</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 4</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 5</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 6</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 7</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 8</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 9</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 10</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 11</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 12</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 13</Nav.Link>*/}
            {/*  <Nav.Link>Chapter 14</Nav.Link>*/}
            {/*</Nav>*/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

    {children}
  </div>
)

export default Layout

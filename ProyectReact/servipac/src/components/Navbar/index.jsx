import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { NavBlog, Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, Svg } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import Icon from '../../images/logoser.svg'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#005EA5'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}><Svg src={Icon} /></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='proyects'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >PROYECTOS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >SERVICIOS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='us'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >NOSOTROS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >CONTACTANOS</NavLinks>
            </NavItem>
            <NavItem>
              <NavBlog to='blog'
              smooth={false} duration={500} spy={true} exact='true' offset={-80}
              >BLOG</NavBlog>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>INICIAR SESION</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar

import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='proyects' onClick={toggle}>PROYECTOS</SidebarLink>
          <SidebarLink to='us' onClick={toggle}>SERVICIOS</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>NOSOTROS</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>CONTACTANOS</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>INICIAR SESION</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

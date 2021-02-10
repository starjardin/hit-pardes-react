import React from 'react'
import { Link as ReachRouterLink } from "react-router-dom";
import { Container, Title, Link } from './styles/HeaderStyles'

const Header = ({children, ...restProps}) => <Container { ...restProps }>{ children }</Container>

Header.Title = function HeaderTitle ({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Header.Link = function HeaderLink ({ to, children, ...restProps }) {
  return <ReachRouterLink to={to}>
      <Link { ...restProps }>{ children }</Link>
  </ReachRouterLink>
}

export default Header;
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const StyledNav = styled.nav`
  display: flex;
  justify-content: start;
`
const LogoContainer = styled.div`
  flex: 1 1 auto;
`
const StyledLink = styled(Link)`
  margin-right: 10px;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledNav>
      <LogoContainer>
        <Link to="/">logo placeholder</Link>
      </LogoContainer>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </div>
    </StyledNav>
    <h1>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

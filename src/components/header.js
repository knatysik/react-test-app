import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import logo from '../logo.svg'
import { headerHeight } from '../constants'

function Header() {
    return (
        <Wrapper>
            <LogoLink href="#">
                <LogoImage src={logo} alt="logo" />
            </LogoLink>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #fff;
    display:flex;
    justify-content:center;

    ${breakpoint('tablet')`
        justify-content:left;
    `}

    /* ${breakpoint('mobile')`
        background-color: red;
    `}
  
    ${breakpoint('tablet')`
        background-color: blue;
    `}
    
    ${breakpoint('desktop')`
        background-color: green;
    `} */
`
const LogoLink = styled.a`
    display: inline-block;
`
const LogoImage = styled.img`
    height: ${headerHeight};
`

export default Header

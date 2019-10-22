import React from 'react'
import styled from 'styled-components'
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
`
const LogoLink = styled.a`
    display: inline-block;
`
const LogoImage = styled.img`
    height: ${headerHeight};
`

export default Header

import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import heroBg from '../images/skoda-kodiaq.jpg'
import Container from './container'

function Hero() {
    return (
        <Wrapper>
            <Container>
                <HeroTitle>Lorem ipsum dolor sit amet</HeroTitle>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background: url(${heroBg}) center no-repeat;
    background-size: cover;
    height: 400px;
`
const HeroTitle = styled.h1`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 26px;
    width: 300px;
    padding-top: 30px;
    padding-left: 30px;

    ${breakpoint('tablet')`
        padding-left: 0;
    `}
`

export default Hero

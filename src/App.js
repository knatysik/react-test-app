import React from 'react'
import './App.scss'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import { BgColor } from './constants/'
import Header from './components/header'
import Hero from './components/hero'
import Container from './components/container'
import Row from './components/row'
import CarouselBlock from './components/carouselBlock'
import Footer from './components/footer'

function App() {
    return (
        <Wrapper>
            <Normalize />
            <Header />
            <Hero />
            <Container>
                <Row />
                <CarouselBlock />
            </Container>
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${BgColor};
`

// const Header = styled.div``

export default App

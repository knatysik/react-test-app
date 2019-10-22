import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import '../App.scss'
import NukaCarousel from 'nuka-carousel'
import { mobileWidth, tabletWidth } from '../constants'

function Carousel() {
    return (
        <Wrapper>
            <NukaCarousel
                renderTopRightControls={({ previousSlide, nextSlide }) => (
                    <Controls>
                        <Button onClick={previousSlide}>&lt;</Button>
                        <Button onClick={nextSlide}>&gt;</Button>
                    </Controls>
                )}
                renderCenterLeftControls={false}
                renderCenterRightControls={false}
                renderBottomCenterControls={false}
            >
                <Slide>
                    <Title>Tytuł 1</Title>
                    <Content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                    </Content>
                    <Signature>Lorem ipsum 1</Signature>
                </Slide>
                <Slide>
                    <Title>Tytuł 2</Title>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Content>
                    <Signature>Lorem ipsum 2</Signature>
                </Slide>
                <Slide>
                    <Title>Tytuł 3</Title>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Content>
                    <Signature>Lorem ipsum 3</Signature>
                </Slide>
                <Slide>
                    <Title>Tytuł 4</Title>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Content>
                    <Signature>Lorem ipsum 4</Signature>
                </Slide>
            </NukaCarousel>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    max-width: ${mobileWidth};
    display: flex;
    background-color: #fff;

    ${breakpoint('tablet')`
        max-width: ${tabletWidth};
    `}

    ${breakpoint('desktop')`
        max-width: ${mobileWidth};
    `}
`
const Slide = styled.div`
    padding: 35px;
`

const Title = styled.h2`
    text-transform: uppercase;
`
const Controls = styled.div`
    padding: 10px;
`
const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: #000;
    color: #fff;
    outline: none;
    cursor: pointer;
`

const Content = styled.div``

const Signature = styled.div`
    text-align: right;
    padding-top: 15px;
`

export default Carousel

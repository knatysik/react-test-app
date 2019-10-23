import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import '../App.scss'
import NukaCarousel from 'nuka-carousel'
import { mobileWidth, tabletWidth } from '../constants'
import axios from 'axios'

function Carousel() {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            )
            setData(result.data)
        }
        fetchData()
    }, [])

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
                {data &&
                    data.slice(0, 10).map(item => (
                        <Slide key={item.id}>
                            <Title>{item.id}</Title>
                            <Content>{item.body}</Content>
                            <Signature>{item.title}</Signature>
                        </Slide>
                    ))}
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

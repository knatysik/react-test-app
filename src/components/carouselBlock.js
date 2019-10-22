import React from 'react'
import styled from 'styled-components'
import Carousel from './carousel'
import ArticlePicture from '../images/skoda-vrs.jpg'

function CarouselBlock() {
    return (
        <Wrapper>
            <Carousel />
            <Picture src={ArticlePicture} alt="salon w sriodku" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin: 20px 0 50px;
`
const Picture = styled.img`
    max-width: 500px;
    margin-top: 50px;
`

export default CarouselBlock

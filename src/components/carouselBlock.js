import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
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
    flex-direction: column;

    ${breakpoint('desktop')`
        flex-direction: row;
    `}
`
const Picture = styled.img`
    width: 100%;
    height: auto;

    ${breakpoint('desktop')`
        max-width: 50%;
        margin-top: 50px;
    `}
`

export default CarouselBlock

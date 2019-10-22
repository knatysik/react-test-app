import React from 'react'
import styled from 'styled-components'
import Article from './article'
import ArticlePicture from '../images/skoda-vrs.jpg'

function Row() {
    return (
        <Wrapper>
            <Picture src={ArticlePicture} alt="salon w sriodku" />
            <Article>
                <Title>Lorem ipsum</Title>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </Article>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-top: -30px;
`
const Picture = styled.img`
    max-width: 500px;
`

const Title = styled.h2`
    text-transform: uppercase;
`

export default Row

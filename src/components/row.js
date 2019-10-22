import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
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
    flex-direction: column;

    ${breakpoint('tablet')`
        flex-direction: row;
    `}
`
const Picture = styled.img`
    width: 100%;
    height: auto;

    ${breakpoint('tablet')`
        max-width: 50%;
    `}
`

const Title = styled.h2`
    text-transform: uppercase;
`

export default Row

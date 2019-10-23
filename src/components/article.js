import React from 'react'
import styled from 'styled-components'
import { mobileWidth } from '../constants'

function Article(props) {
    return <Wrapper>{props.children}</Wrapper>
}

const Wrapper = styled.div`
    background-color: #fff;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 320px;
    max-width: ${mobileWidth};
    width: 100%;
`

export default Article

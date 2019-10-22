import React from 'react'
import styled from 'styled-components'

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
    max-width: 500px;
    width: 100%;
`

export default Article

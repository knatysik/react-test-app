import React from 'react'
import styled from 'styled-components'

function Button() {
    return <Wrapper>Wyślij formularz</Wrapper>
}

const Wrapper = styled.button`
    display: block;
    background-color: #715848;
    color: #fff;
    padding: 10px 20px;
    margin-left: auto;
    margin-right: 0;
    outline: none;
    cursor: pointer;
`

export default Button

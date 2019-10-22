import React from 'react'
import styled from 'styled-components'

function Container(props) {
    return <Wrapper>{props.children}</Wrapper>
}
const Wrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
`

export default Container

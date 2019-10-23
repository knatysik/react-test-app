import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

function Container(props) {
    return <Wrapper>{props.children}</Wrapper>
}
const Wrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 500px;

    ${breakpoint('tablet')`
        max-width: 700px;
    `}

    ${breakpoint('desktop')`
        max-width: 1000px;
    `}
`

export default Container

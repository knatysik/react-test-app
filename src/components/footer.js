import React from 'react'
import styled from 'styled-components'
import Container from './container'
import Form from './form'
import { footerBg } from '../constants'

function Footer() {
    return (
        <Wrapper>
            <Container>
                <Form />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${footerBg};
`

export default Footer

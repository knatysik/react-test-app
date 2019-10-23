import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import Input from './input'
import Button from './button'
import Checkbox from './checkbox'

function Form() {
    const [values, setValues] = useState({})

    function updateInput(inputValue, name, isValid) {
        const isName = inputValue.length > 2
        setValues(isName)
    }

    console.log('values', values)

    return (
        <Wrapper>
            <Title>Wypełnij formularz</Title>
            <WrapIntut>
                <Input
                    type="text"
                    name="nameSurname"
                    placeholder="*Imię i nazwisko"
                    onChange={updateInput}
                />
                <Input
                    type="text"
                    name="email"
                    placeholder="*E-mail"
                    onChange={updateInput}
                />
                <Input
                    type="text"
                    name="tel"
                    placeholder="*Nr telefonu"
                    onChange={updateInput}
                />
                <Input
                    type="text"
                    name="postCode"
                    placeholder="*Kod pocztowy"
                    onChange={updateInput}
                />
            </WrapIntut>
            <WrapIntut>
                <Input
                    type="text"
                    name="town"
                    placeholder="*Miejscowość"
                    onChange={updateInput}
                />
                <Input
                    type="text"
                    name="street"
                    placeholder="*Ulica"
                    onChange={updateInput}
                />
                <Input
                    type="text"
                    name="dom"
                    placeholder="*Nr domu"
                    onChange={updateInput}
                />
                <Input
                    type="text"
                    name="place"
                    placeholder="Nr lokalu"
                    onChange={updateInput}
                />
            </WrapIntut>
            <Hint>*pole wymagane</Hint>
            <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
            </Info>
            <Block>
                <Checkbox checked="checked" />
                <label>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </label>
            </Block>
            <Block>
                <Checkbox />
                <label>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </label>
            </Block>
            <Block>
                <Checkbox />
                <label>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt
                </label>
            </Block>
            <Block>
                <Checkbox />
                <label>Zaznacz wszystko</label>
            </Block>
            <Button />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 12px;
    padding: 30px;

    ${breakpoint('tablet')`
        padding: 30px 0;
    `}
`
const Title = styled.h2`
    text-transform: uppercase;
`
const WrapIntut = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 5px 0;
    justify-content: space-between;

    ${breakpoint('tablet')`
        flex-wrap: no-wrap;
    `}

    Input {
        margin-bottom: 5px;
    }
`
const Hint = styled.div`
    padding: 10px 0;
`
const Info = styled.div`
    padding: 10px 0;
`
const Block = styled.div`
    padding: 10px 0;
    display: flex;
`

export default Form

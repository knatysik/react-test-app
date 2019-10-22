import React, { useState } from 'react'
import styled from 'styled-components'

function Input(props) {
    const [isValid, setIsValid] = useState()
    console.log(props.onChange)

    function handleChange(event) {
        const inputValue = event.target.value
        const lengthValid = inputValue.length > 0
        //const isValid = /\D/.test(inputValue)

        setIsValid(lengthValid)

        props.onChange(inputValue, props.name, lengthValid)
    }

    return (
        <Wrapper
            valid={isValid}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            onChange={handleChange}
        />
    )
}

const Wrapper = styled.input`
    padding: 5px;
    min-width: 150px;
    border: 1px solid ${({ valid }) => (valid ? 'green' : 'red')};
`
export default Input

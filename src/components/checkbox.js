import React from 'react'
import styled from 'styled-components'

function Checkbox(props) {
    return (
        <Wrapper>
            <input type="checkbox" checked={props.checked} />
            <span />
        </Wrapper>
    )
}

const Wrapper = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;

    span {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #fff;

        &:after {
            content: '';
            position: absolute;
            display: none;
        }
    }

    span:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: 1px solid #000;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked ~ span:after {
            display: block;
        }
    }
`
export default Checkbox

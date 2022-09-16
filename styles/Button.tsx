import styled from 'styled-components'

export const Button = styled.button`
    background-color: var(--primary-brand);
    border-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
    font-size: 13px;
    padding: 7px 20px;
    border-radius: 4px;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;

    &:hover {
        background: var(--primary-brand-dark);
    }
`
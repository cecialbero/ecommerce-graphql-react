import styled from 'styled-components';

import { Button } from '../../styles/Button';

export const CardProduct = styled.article`
    position: relative;
    transition: all 0.3s;
    background-color: #fff;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%);
    border-radius: 5px;
    padding-bottom: 50px;

    &:hover {
        box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
        transform: translate(0,-3px);
    }
`

export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    box-sizing: border-box;
    padding: 15px;
`

export const CardTitle = styled.h3`
    color: var(--secondary-color-light);
`

export const CardPrice = styled.h4`
    margin: 0;
    color: var(--text-color);
`

export const CardButton = styled(Button)`
    position: absolute;
    right: 10px;
    bottom: 15px;
`

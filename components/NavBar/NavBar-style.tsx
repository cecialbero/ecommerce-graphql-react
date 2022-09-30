import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: var(--secondary-color);
    padding: 0px 20px 3px;
    height: 120px;

    @media(min-width: 767px) {
        height: inherit;
        align-items: center;
        padding: 2px 40px 5px;
    }
`

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
        margin-left: 10px;
    }
`

export const HeaderOrder = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;

    @media (min-width: 567px) {
        flex-direction: row;
    }

    @media (min-width: 767px) {
        margin-top: 0;
    }

    p {
        font-size: 16px;
        font-weight: 700;
        margin: 0;
        color: var(--text-color-invert);

        @media (min-width: 567px) {
            font-size: 18px;
        }
    }
`

export const Cart = styled.span`
    @media (min-width: 567px) {
        margin-right: 20px;
    }
`


export const Circle = styled.span`
    display: inline-block;
    min-width: 14px;
    height: 14px;
    padding: 3px;
    background: var(--brand-color);
    border-radius: 12px;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.7px;
    vertical-align: top;
`

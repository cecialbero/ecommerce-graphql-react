import styled, { css } from 'styled-components';

type Props = {
    lg?: number;
    md?: number;
    sm?: number;
}

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 120px 20px 20px;
    margin: 0 auto;
    box-sizing: border-box;
`

export const Row = styled.div<Props>`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;

    ${({lg, md, sm}) => css`
        @media(min-width: 567px) {
            grid-template-columns: repeat(${md}, 1fr);
            grid-gap: 20px;
        }

        @media(min-width: 767px) {
            grid-template-columns: repeat(${sm}, 1fr);
            grid-gap: 30px;
        }

        @media(min-width: 991px) {
            grid-template-columns: repeat(${lg}, 1fr);
        }
    `};
`
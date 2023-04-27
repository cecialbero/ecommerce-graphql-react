import styled from 'styled-components';

type Props = {
    imgUrl: string;
    imgHeight: string;
}

export const BgImage = styled.div<Props>`
    max-width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center center;
    background-size: cover;
    height: ${props => props.imgHeight};
    width: 100%;
`
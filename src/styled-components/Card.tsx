import styled from 'styled-components'

type Props = {
    imgUrl: string
}

export const Card = styled.article`
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

    h2, p {
        padding: 0 15px;
    }

    h4 {
        color: var(--primary-brand);
    }
`

export const CardMedia = styled.div<Props>`
    max-width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center center;
    background-size: cover;
    height: 330px;
    width: 100%;
`

export const CardBottom = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`
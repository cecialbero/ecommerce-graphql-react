import styled, {css} from 'styled-components';

type Props = {
    error: boolean
}

export const Alert = styled.div<Props>`
    position: absolute;
    top: 70px;
    left: 50%;
    transform: transladeX(-50%);
    padding: 30px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;

    ${props => props.error && css`
        background: var(--bg-error);
        color: var(--red-light);
        border: 2px solid var(--red-light);
    `};
`
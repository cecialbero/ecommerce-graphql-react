import styled, {css} from 'styled-components';

type Props = {
    error?: boolean,
    info?: boolean
}

export const Alert = styled.div<Props>`
    padding: 18px 30px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;

    ${props => props.error && css`
        background: var(--bg-error);
        color: var(--red-light);
        border: 2px solid var(--red-light);
    `};

    ${props => props.info && css`
        background: var(--bg-info);
        border: 2px solid var(--secondary-color-light);
    `};
`

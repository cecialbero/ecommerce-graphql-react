import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);

    @media(min-width: 767px) {
        bottom: 20px;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
`

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    height: 34px;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    background-color: var(--brand-color);
    border: 0;

    &:hover {
        color: var(--text-color-invert);
    }
`
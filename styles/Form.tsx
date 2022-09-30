import styled from 'styled-components';

export const Input = styled.input`
  height: 35px;
  border-radius: 20px;
  padding: 0 10px;
  min-width: 300px;
  border: 3px solid var(--brand-color);

  &:focus {
    border: 3px solid var(--brand-color);
    outline: none;
  }
`
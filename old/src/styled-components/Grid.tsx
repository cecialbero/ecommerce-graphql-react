import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 120px 20px 20px;
    margin: 0 auto;
    box-sizing: border-box;
`

export const Col = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 40px;
`
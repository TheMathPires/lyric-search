import styled from '@emotion/styled'

export const Wrapper = styled.div`
    text-align: center;
    max-width: 990px;
    margin: 0 auto;
    padding: 10rem 2rem 0;
`

export const Input = styled.input`
    margin-right: 1rem;
    padding: .5rem;
    border-radius: 6px;
    margin-top: .5rem;
    border: 2px solid #8E05C2;
`

export const Button = styled.button`
    padding: .5rem;
    border-radius: 6px;
    width: 150px;
    margin: 1rem 0;
    background-color: #8E05C2;
    color: #fff;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #3E065F;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
`

export const Lyrics = styled.pre`
    margin-top: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`
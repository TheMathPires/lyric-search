import styled from '@emotion/styled'

export const Wrapper = styled.div`
    text-align: center;
    max-width: 990px;
    margin: 0 auto;
`

export const Input = styled.input`
    margin-right: 1rem;
    padding: .5rem;
    border-radius: 6px;
    margin-top: .5rem;
`

export const Button = styled.button`
    padding: .5rem;
    border-radius: 6px;
    width: 150px;
    margin: 1rem 0;
    &:hover {
        cursor: pointer;
        color: #fff;
        background-color: #2c2c2c;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
`

export const Lyrics = styled.pre`
    margin-top: 1rem;
`
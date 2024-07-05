import styled from "styled-components";

export const CountDownContainer = styled.div`
    display: flex;
    gap: 1rem;

    font-size: 10rem;
    line-height: 8rem;
    font-family: 'Roboto Mono', monospace;
    color: ${(props) => props.theme['gray-100']};
    
    span {
        border-radius: 8px;
        background: ${(props) => props.theme['gray-700']};
        
        padding: 2rem 1rem;
    }
`

export const Separator = styled.div`
    display: flex;
    justify-content: center;

    overflow: hidden;
    color: ${(props) => props.theme['green-500']};

    padding: 2rem 0;

    width: 4rem;
`
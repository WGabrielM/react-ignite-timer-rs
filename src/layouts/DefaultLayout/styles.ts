import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 8px;
    background: ${(props) => props.theme['gray-800']};
    
    padding: 2.5rem;
    max-width: 74rem;
    margin: 5rem auto;
    height: calc(100vh - 10rem);
`
import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 3.5rem;
    }
`

export const BaseCountDownButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: 0;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
    color: ${(props) => props.theme['gray-100']};
    
    padding: 1rem;
    
    width: 100%;
    
   

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
    
    background: ${(props) => props.theme['green-500']};

    &:not(:disabled)hover {
        background: ${(props) => props.theme['green-700']};
    }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
    background: ${(props) => props.theme['red-500']};

    &:not(:disabled)hover {
        background: ${(props) => props.theme['red-700']};
    }
`
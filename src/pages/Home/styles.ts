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

export const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: bold;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-100']};
    
    width: 100%;
`

const BaseInput = styled.input`
    border: 0;
    font-weight: bold;
    font-size: 1.123rem;
    background: transparent;
    color: ${(props) => props.theme['gray-100']};
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    
    height: 2.5rem;
    
    padding: 0 0.5rem;

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }
    
    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }

`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`

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
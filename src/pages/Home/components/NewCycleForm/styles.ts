import styled from "styled-components"

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
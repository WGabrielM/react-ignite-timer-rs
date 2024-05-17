import styled from "styled-components";

export const HistoryContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    padding: 3.5rem;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        border-collapse: collapse;
        min-width: 600px;

        width: 100%;

        th {
            line-height: 1.6;
            text-align: left;
            font-size: 0.875rem;
            color: ${(props) => props.theme['gray-100']};
            background-color: ${(props) => props.theme['gray-600']};

            padding: 1rem;
            
            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }

        }

        td {
            
        }

    }
`
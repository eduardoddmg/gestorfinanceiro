import styled from 'styled-components';

export const Button = styled.button`
    border: ${props => props.border || "none"};
    cursor: pointer;
    background-color: ${props => props.bg || "transparent"};
`
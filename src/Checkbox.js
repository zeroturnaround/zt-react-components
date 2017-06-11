import React from "react";
import styled from "styled-components";

const Checkbox = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-right: 7px;

    border: 1px solid;
    border-radius: 4px;

    width: ${(props) => props.size === "large" ? "16px" : "12px"};
    height: ${(props) => props.size === "large" ? "16px" : "12px"};
    font-size: ${(props) => props.size === "large" ? "16px" : "12px"};

    border-color: ${props => props.checked ? "#000" : "#999"};
`;

export default ({checked, size}) => <Checkbox checked={checked} size={size} />;

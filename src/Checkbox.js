import React from "react";
import styled from "styled-components";

const Checkbox = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-right: 7px;

    border: 1px solid ${({checked}) => checked ? "#000" : "#999"};
    border-radius: 4px;

    background-color: ${({disabled}) => disabled ? "#f3f3f3" : "#fff"};

    width: ${({size}) => size === "large" ? "14px" : "12px"};
    height: ${({size}) => size === "large" ? "14px" : "12px"};
    font-size: ${({size}) => size === "large" ? "14px" : "12px"};

    &:before {
        content: "${({checked}) => checked ? "✓" : ""}";
    }

    label:hover > &:not([disabled]) {
        border-color: #000;
    }
`;

export default ({name, checked, size, disabled}) => (
    <Checkbox
        checked={checked}
        size={size}
        disabled={disabled}
    >
        <input
            type="hidden"
            name={name}
            value={checked}
        />
    </Checkbox>
);

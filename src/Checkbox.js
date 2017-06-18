import React from "react";
import styled from "styled-components";
import {borderRadiuses, colors, fontSizes} from "./designGuideline";

const Checkbox = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    margin-right: 7px;

    border: 1px solid ${({checked}) => checked ? colors.black : colors.gray};
    border-radius: ${borderRadiuses.default};

    background-color: ${({disabled}) => disabled ? colors.darkerWhite : colors.white};

    width: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};
    height: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};
    font-size: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};

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

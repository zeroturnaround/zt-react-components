import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {borderRadiuses, colors, fontSizes} from "./designGuideline";
import Checkmark from "./icons/checkmark.svg";

const CheckboxElement = styled.span`
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

    label:hover > &:not([disabled]) {
        border-color: #000;
    }
`;

export default class Checkbox extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        // small or large
        size: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool
    };

    render() {
        return (
            <CheckboxElement
                checked={this.props.checked}
                size={this.props.size}
                disabled={this.props.disabled}
            >
                {this.props.checked && <Checkmark />}
                {this.props.name && this.renderHiddenInput()}
            </CheckboxElement>
        );
    }

    renderHiddenInput() {
        return (
            <input
                type="hidden"
                name={this.props.name}
                value={this.props.checked}
                onClick={(event) => event.stopPropagation()}
            />
        );
    }
}

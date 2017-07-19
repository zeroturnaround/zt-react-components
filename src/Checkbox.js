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

/**
 * Very sexy and simple checkbox (actually span) that can be:
 * - a bit larger,
 * - disabled,
 * - and of course checked.
 *
 * NOTE: Render it inside of label to enable unbelievable hover styles.
 *
 * NOTE: Give it a name and you will get a hidden input for free!
 * Hidden input is for forms where it is needed to post form data.
 *
 * NOTE: Click on hidden input stops propagation because of IE:
 * by default clicking on a label will make the event to propagate to a child input.
 * Then the input will bubble it back to the label, causing another click event.
 */
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
                data-test-checkbox-checked={this.props.checked}
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

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {borderRadiuses, colors, fontSizes} from "./designGuideline";
import Checkmark from "./icons/checkmark.svg";

const getBorderColor = ({checked, error}) => {
    if (error) {
        return colors.red;
    }
    else if (checked) {
        return colors.black;
    }

    return colors.gray;
};

const CheckboxElement = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    margin-right: 7px;

    border: 1px solid ${getBorderColor};
    border-radius: ${borderRadiuses.default};

    background-color: ${({disabled}) => disabled && colors.darkerWhite};

    width: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};
    height: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};
    font-size: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};

    svg {
        opacity: ${({checked}) => checked ? 1 : 0}
    }

    &:hover:not([disabled]) {
        border-color: #000;
    }
`;

const Input = styled.input`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
`;

/**
 * Very sexy and simple checkbox (actually span) that can be:
 * - a bit larger,
 * - disabled,
 * - and of course checked.
 */
export default class Checkbox extends PureComponent {
    static propTypes = {
        size: PropTypes.oneOf(["small", "large"]),
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        error: PropTypes.bool,
        onChange: PropTypes.func,
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            isChecked: !!props.checked || !!props.defaultChecked
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({isChecked: nextProps.checked});
        }
    }

    onChange(evt) {
        const {onChange} = this.props;

        if (this.props.checked === undefined) {
            this.setState({isChecked: evt.target.checked});
        }

        onChange && onChange(evt);
    }

    render() {
        // picking out defaultChecked since we do not want to apply defaultChecked together with checked.
        // eslint-disable-next-line no-unused-vars
        const { size, disabled, defaultChecked, error, className, ...props } = this.props;
        const { isChecked } = this.state;

        return (
            <CheckboxElement
                className={className}
                checked={isChecked}
                error={error}
                size={size}
                disabled={disabled}
            >
                <Checkmark />

                <Input
                    {...props}
                    type="checkbox"
                    value={isChecked}
                    checked={isChecked}
                    onChange={this.onChange.bind(this)}
                    disabled={disabled}
                />
            </CheckboxElement>
        );
    }
}

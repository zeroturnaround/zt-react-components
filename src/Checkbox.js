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

    background-color: ${({disabled}) => disabled && colors.darkerWhite};

    width: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};
    height: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};
    font-size: ${({size}) => size === "large" ? fontSizes.slightlyLarger : fontSizes.default};

    label:hover > &:not([disabled]) {
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
        size: PropTypes.oneOf(["small", "large"]),
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isChecked: !!props.checked
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.props.checked) {
            this.setState({isChecked: nextProps.checked});
        }
    }

    onChange(evt) {
        evt.stopPropagation();
        const {onChange} = this.props;

        this.setState({isChecked: evt.target.checked});
        onChange && onChange(evt);
    }

    render() {
        const { size, disabled, ...props } = this.props;
        const { isChecked } = this.state;

        return (
            <CheckboxElement
                checked={isChecked}
                size={size}
                disabled={disabled}
            >
                {isChecked && <Checkmark />}

                <Input
                    {...props}
                    type="checkbox"
                    name={name}
                    value={isChecked}
                    checked={isChecked}
                    onChange={this.onChange.bind(this)}
                    disabled={disabled}
                />
            </CheckboxElement>
        );
    }
}

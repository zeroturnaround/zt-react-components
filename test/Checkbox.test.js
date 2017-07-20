import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";
import Checkbox from "../src/Checkbox";

describe("<Checkbox />", function() {
    it("renders styled span element with input", function() {
        expect(renderer.create(<Checkbox name="test" />)).toMatchSnapshot();
    });

    it("renders checked", function() {
        expect(renderer.create(<Checkbox checked={true} />)).toMatchSnapshot();
    });

    it("renders disabled", function() {
        expect(renderer.create(<Checkbox disabled={true} />)).toMatchSnapshot();
    });

    it("renders larger", function() {
        expect(renderer.create(<Checkbox size="large" />)).toMatchSnapshot();
    });

    it("stops input event propagation on click", function() {
        const checkbox = renderer.create(<Checkbox name="test" />);
        const stopPropagation = jasmine.createSpy("stopPropagation");

        checkbox.toJSON().children[0].props.onClick({stopPropagation});

        expect(stopPropagation).toHaveBeenCalled();
    });

    it("changes checked state if checked is change from the outside", function() {
        const renderer = new ShallowRenderer();
        renderer.render(<Checkbox checked={true} />);
        let result = renderer.getRenderOutput();
        expect(result.props.children[1].props.checked).toBe(true);

        renderer.render(<Checkbox checked={false} />);
        result = renderer.getRenderOutput();
        expect(result.props.children[1].props.checked).toBe(false);
    });
});

import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../src/Checkbox";

describe("<Checkbox />", function() {
    it("renders styled span element with hidden input", function() {
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

    it("stops hidden input event propagation on click", function() {
        const checkbox = renderer.create(<Checkbox name="test" />);
        const stopPropagation = jasmine.createSpy("stopPropagation");

        checkbox.toJSON().children[0].props.onClick({stopPropagation});

        expect(stopPropagation).toHaveBeenCalled();
    });
});

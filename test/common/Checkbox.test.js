import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../../src/common/Checkbox";

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
});

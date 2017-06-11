import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../src/Checkbox";

describe("<Checkbox />", function() {
    it("renders stylized span element", function() {
        expect(renderer.create(<Checkbox />)).toMatchStyledComponentsSnapshot();
    });
});

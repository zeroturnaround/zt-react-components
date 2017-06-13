import "jest-styled-components";
import React from "react";
import renderer from "react-test-renderer";
import HitSampling from "../../src/xr/HitSampling";

describe("<HitSampling />", function() {
    it("renders hit sampling component", function() {
        expect(renderer.create(
            <HitSampling
                similarHitCount={42}
                periodStart={12345678}
                periodEnd={98765432}
                top={20}
                right={15}
            />
        )).toMatchSnapshot();
    });
});

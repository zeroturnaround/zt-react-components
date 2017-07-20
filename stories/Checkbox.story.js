import React from "react";
import {storiesOf} from "@storybook/react";
import Checkbox from "../src/Checkbox";

storiesOf("Checkbox", module)
    .add("unchecked", () => (
        <label>
            <Checkbox />
            Turn on
        </label>
    ))
    .add("checked", () => (
        <label>
            <Checkbox checked={true} />
            Turn on
        </label>
    ))
    .add("disabled", () => (
        <div>
            <div>
                <label>
                    <Checkbox disabled={true} />
                    Turn on
                </label>
            </div>
            <div>
                <label>
                    <Checkbox checked={true} disabled={true} />
                    Turn on
                </label>
            </div>
        </div>
    ))
    .add("larger", () => (
        <label style={{fontSize: "14px"}}>
            <Checkbox size="large" />
            Turn on
        </label>
    ));

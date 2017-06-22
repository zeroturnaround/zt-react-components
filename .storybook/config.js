import {configure} from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
    name: "ZT React components",
    url: "https://github.com/zeroturnaround/zt-react-components"
});

configure(() => require("../stories"), module);

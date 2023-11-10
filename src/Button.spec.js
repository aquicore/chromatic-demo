import { render } from "@testing-library/react";
import { Button, randomUtilityFunction } from "./Button";

describe("Button", () => {
    // This test is superfluous as it's already testing in Chromatic
    it("renders correctly", () => {
        const { asFragment } = render(<Button primary={true} backgroundColor="steelblue" label="Test Button" />);

        expect(asFragment()).toMatchSnapshot();
    })

    it("randomUtilityFunction sums correctly", () => {
        expect(randomUtilityFunction(3, 4)).toBe(7);
    })

})

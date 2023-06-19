import { screen, waitFor } from "@testing-library/react";
import CircleSlider from "../../../pages/circular-slider";
import { customRender } from "../..";

describe("Test for circular slider", () => {
  it("render cicular slider", async () => {
    customRender(<CircleSlider />);
    waitFor(() => {
      const horizontalSlider = screen.getByTestId("horizontal-slider");
      expect(horizontalSlider).toBeInTheDocument();
    });
  });
});

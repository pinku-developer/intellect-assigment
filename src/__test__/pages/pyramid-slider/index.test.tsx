import { screen, waitFor } from "@testing-library/react";
import PyramidScale from "../../../pages/pyramid-slider";
import { customRender } from "../..";

describe("Test for pyramid scale", () => {
  it("render pyramid scale", async () => {
    customRender(<PyramidScale />);
    waitFor(() => {
      const LowText = screen.getByText(/Low/);
      expect(LowText).toBeInTheDocument();
    });
  });
});

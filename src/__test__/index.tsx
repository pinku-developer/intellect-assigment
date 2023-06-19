import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const routerWrapper: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <React.StrictMode>
      <Router>{children}</Router>
    </React.StrictMode>
  );
};

export const customRender = (ui: React.ReactElement) => {
  render(ui, { wrapper: routerWrapper });
};

import { useState } from "react";
import TestContext from "./TestContext";

// To make provider:
const TestProvider = ({ children }) => {
  return <TestContext>{children}</TestContext>;
};
export default TestProvider;

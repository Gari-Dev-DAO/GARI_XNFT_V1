import { render, screen, cleanup } from "@testing-library/react-native";
import { Text } from "react-native";
import Box from "../components/Containers/Container";

afterEach(cleanup);

it("renders correctly", () => {
  const child = <Text>box</Text>;
  render(<Box>{child}</Box>);
  const box = screen.getByTestId("box");
  expect(box).toBeDefined();
  const text = screen.getByText("box");
  expect(text).toBeDefined()
});
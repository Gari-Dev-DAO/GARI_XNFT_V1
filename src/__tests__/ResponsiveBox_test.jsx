import { render, screen, cleanup } from "@testing-library/react-native";
import { Text } from "react-native";
import ResponsiveBox from "../components/Containers/ResponsiveContainer";

afterEach(cleanup);


it("renders correctly", () => {
  const child = <Text>Responsive box</Text>;
  render(<ResponsiveBox>{child}</ResponsiveBox>);
  const box = screen.getByTestId("respBox");
  expect(box).toBeDefined();
  const text = screen.getByText("Responsive box");
  expect(text).toBeDefined()
});

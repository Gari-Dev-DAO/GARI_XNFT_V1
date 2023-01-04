import { render, screen, cleanup } from "@testing-library/react-native";
import { Text } from "react-native";
import Heading from "../components/Typology/PrimaryText";

afterEach(cleanup);

it("renders correctly", () => {
  const child = <Text>heading</Text>;
  render(<Heading>{child}</Heading>);
  const box = screen.getByTestId("heading");
  expect(box).toBeDefined();
  const text = screen.getByText("heading");
  expect(text).toBeDefined()
});

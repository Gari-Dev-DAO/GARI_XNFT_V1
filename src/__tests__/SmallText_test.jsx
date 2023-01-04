import { render, screen, cleanup } from "@testing-library/react-native";
import { Text } from "react-native";
import SmallText from "../components/Typology/SecondaryText";

afterEach(cleanup);

it("renders correctly", () => {
  const child = <Text>small text</Text>;
  render(<SmallText>{child}</SmallText>);
  const text = screen.getByText("small text");
  expect(text).toBeDefined()
});
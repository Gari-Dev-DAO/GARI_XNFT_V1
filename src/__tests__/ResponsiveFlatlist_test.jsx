import { render, screen, cleanup } from "@testing-library/react-native";
import { Text } from "react-native";
import ResponsiveFlatList from "../components/ResponsiveFlatList";

afterEach(cleanup);

it("renders correctly without when any prop is undefined", () => {
  render(<ResponsiveFlatList />);
  const list = screen.getByTestId("respList");
  expect(list).toBeDefined();
});

it("renders correctly with props", () => {
  const renderItem = () => {
    return <Text>listItem</Text>;
  };
  const data=['data']
  render(<ResponsiveFlatList data={data} renderItem={renderItem}/>);
  const list = screen.getByTestId("respList");
  expect(list).toBeDefined();
  const item=screen.getByText('listItem')
  expect(item.toBeDefined)
});

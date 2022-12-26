import { render, screen, cleanup } from "@testing-library/react-native";
import DetailButton from "../components/DetailButton";

afterEach(cleanup);
const mockedDispatch = jest.fn();
jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: jest.fn(),
        dispatch: mockedDispatch,
      }),
    };
  });

it ('renders correctly',()=>{
    render(<DetailButton/>)
    const btn=screen.getByTestId('Button')
    expect (btn).toBeDefined()
})
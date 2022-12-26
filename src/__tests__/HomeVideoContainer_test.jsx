import {render,screen,cleanup} from '@testing-library/react-native'
import HomeVideoContainer from '../components/HomeVideoContainer'

afterEach(cleanup)
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
it ('renders when props are undefined',()=>{
    render(<HomeVideoContainer/>)
   const box= screen.getByTestId('videoContainer')
   expect (box).toBeDefined()
})
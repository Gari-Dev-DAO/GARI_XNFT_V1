import {render,screen,cleanup} from '@testing-library/react-native'
import FilterButton from '../components/vNFT/FilterButton'

const mockResponse = {
    toggle:false,
    addFilter:()=>{},
    removeFilter:()=>{}
  };

  jest.mock("../hooks/useFilterToggle", () => {
    return {
      useFilterToggle : ()=>{
        return mockResponse
      },
    };
  });
  
afterEach(cleanup)

it ('renders correctly',()=>{
    render(<FilterButton/>)
    const btn=screen.getAllByTestId('Button')
    expect (btn).toBeDefined()
})
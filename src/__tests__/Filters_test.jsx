import {render,screen,cleanup} from '@testing-library/react-native'
import Filters from '../components/vNFT/Filters'

afterEach(cleanup)

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


it ('renders correctly without props',()=>{
   render(<Filters/>)
   const btn=screen.queryByTestId('Button')
   expect (btn).toBeDefined()
})

it ('renders correctly with props',()=>{
    const traits=["hindi","English"]
    render(<Filters traits={traits}/>)
    const btn=screen.queryAllByTestId('Button')
    expect(btn).toHaveLength(2)
 })
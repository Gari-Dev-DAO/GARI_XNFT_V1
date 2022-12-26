import {render,screen,cleanup,fireEvent} from '@testing-library/react-native'
import NftData from '../components/NftData'


afterEach(cleanup)

it ('renders Correctlly without props',()=>{
    render(<NftData/>)
    const heading=screen.getAllByTestId('heading')
    expect (heading).toBeDefined()
})
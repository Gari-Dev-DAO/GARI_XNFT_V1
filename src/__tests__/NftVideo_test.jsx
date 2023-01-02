import {render,screen,cleanup} from '@testing-library/react-native'
import NftVideo from '../components/NftVideo'

afterEach(cleanup)
it ('renders correctly',()=>{
    render(<NftVideo/>)
    const video=screen.getByTestId('video')
    expect (video).toBeDefined()
})
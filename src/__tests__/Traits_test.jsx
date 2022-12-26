import {render,screen,cleanup} from '@testing-library/react-native'
import Traits from '../components/Traits'

it ('renders without props',()=>{
    render(<Traits/>)
    const btn=screen.queryByTestId('Button')
    expect (btn).toBe(null)
})

it ('renders with props and and array has an empty object',()=>{
    const attributes=[{},{}]
    render(<Traits attributes={attributes}/>)
    const btn=screen.queryAllByTestId('Button')
    expect(btn).toHaveLength(2)
})
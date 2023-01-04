import Button from '../components/Buttons/Button';
import {render,screen,cleanup, fireEvent} from '@testing-library/react-native'

afterEach(cleanup);

it('renders correctly',()=>{
  const expectedTitle ="Button"
  const mockOnpress=jest.fn()
  mockOnpress.mockReturnValue({ pressed: true });
  render(<Button title={expectedTitle} onPress={mockOnpress}/>)
  const button =screen.getByText('Button')
  expect(button).toBeDefined()
  fireEvent.press(button)
  expect(mockOnpress).toHaveReturnedWith ({
    pressed: true,
  });
})

//checking onpress and titile
it('checking when onPress prop in not defined',()=>{
 render(<Button/>)
 const button =screen.getByTestId('Button')
 expect(button).toBeDefined()
 fireEvent.press(button)
 const buttonAfterPress =screen.getByTestId('Button')
 expect(buttonAfterPress).toBeDefined()
})
//some component may not pass any onPress function than it shoult work fine
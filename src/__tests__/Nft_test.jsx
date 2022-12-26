import { render, screen, cleanup } from "@testing-library/react-native";
import Nft from "../screens/Nft";

afterEach(cleanup)

it ('renders correctley without props',()=>{
    render(<Nft/>)
    const video=screen.getByTestId('video')
    expect (video).toBeDefined()
})
it ('renders correctley with props',()=>{
    const route={params:{}}
    render(<Nft route={route}/>)
    const video=screen.getByTestId('video')
    expect (video).toBeDefined()
})

import {render,screen,cleanup} from '@testing-library/react-native'
import AllNfts from '../components/vNFT/AllNfts';

afterEach(cleanup);

it ('renders Correctly when props are not defined',()=>{
    render(<AllNfts/>)
    const list=screen.getByTestId('respList')
    expect (list).toBeDefined()
})
it ('renders Correctly with props',()=>{
    const nft={}
    render(<AllNfts nft={nft}/>)
    const list=screen.getByTestId('respList')
    expect (list).toBeDefined()
})
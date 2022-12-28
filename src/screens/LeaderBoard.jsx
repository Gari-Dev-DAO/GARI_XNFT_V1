import { FlatList,View} from 'react-native'
import Heading from '../components/Heading'
import RowBox from '../components/RowBox'
import SmallText from '../components/SmallText'

import { Pressable } from 'react-native'

const LeaderBoard = () => {
  const data=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
const renderItem=()=>{
  
  return (
    <View>
    <RowBox>
     <View style={{width:'60%'}}>
     <Heading style={{fontSize:10}}>Wallet Address</Heading>
     <Heading style={{fontSize:12}}>2xg5jsy7...</Heading>
    </View>
   
     <View style={{width:'40%'}}>
     <Heading style={{fontSize:10,textAlign:'left'}}>Rank</Heading>
     <Heading style={{fontSize:24,textAlign:'right'}}>#1</Heading>
    </View>
  
   </RowBox>
  
   <RowBox>
     <View style={{width:'60%'}}>
     <Heading style={{fontSize:10}}>Amount Staked</Heading>
     <Heading style={{fontSize:14}}>325.55</Heading>
     <SmallText style={{fontSize:14}}>$278.45</SmallText>
    </View>
   
     <View style={{width:'40%'}}>
     <Heading style={{fontSize:10}}>Staking Score</Heading>
     <Heading style={{fontSize:14}}>3476.56</Heading>
    </View>
    </RowBox>
    </View>)
  }
  
  return (
  <View style={{overflow:'hidden',flex:1,backgroundColor:'#8c067d',alignItems:'center'}}>
<View style={{position:'relative',backgroundColor:'red',display:'flex',alignItems:'center',width:270,overflow:'visible'}}>
<Pressable style={{position:'absolute',top:500,backgroundColor:'blue',right:-20,zIndex:80}}>Press me</Pressable>
<FlatList data={data} renderItem={renderItem} keyExtractor={(item,index)=>index} style={{display:'flex',backgroundColor:'black',width:270,position:'absolute',top:40,height:window.innerHeight-40}} contentContainerStyle={{display:'flex',height:500}}  showsVerticalScrollIndicator={false}/> 
 </View>
 </View>
  )
}

export default LeaderBoard
import { useState } from "react";
import { View,Pressable,Text,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import PrimaryText from "../Typology/PrimaryText";

const LanguageFilter = ({languages=[],setLanguageFilter}) => {
   
    const [isToggle,setIsToggle]=useState(true)

    const [selectedLanguage,setLanguage]=useState('All Languages')

  const filterLanguage=(language)=>{
    setLanguage(language)
    setLanguageFilter(language)
    setIsToggle(!isToggle)
  }

   return (
    <View >
    <View >
    <Pressable onPress={()=>setIsToggle(!isToggle)} style={styles.filterBox}>
    <Text style={{width:'85%',color:'white',fontSize:16}}>{selectedLanguage}</Text>
    <Text style={{width:'15%',color:'white'}}>
    { isToggle?
    <AntDesign name="caretup" size={16} color="white" /> :
    <AntDesign name="caretdown" size={16} color="white" />}
    </Text>
   </Pressable>
    </View>

    <View style={isToggle?{display:'none'}:{display:'flex',backgroundColor:'rgb(23,24,26)',color:'white',padding:10,gap:5,width:150,borderRadius:5}}>
   
      <Pressable onPress={()=>filterLanguage('All Languages')}>
      <PrimaryText style={{fontSize:16}}>
        {'All Languages'}
       </PrimaryText>
        </Pressable>
      {
      languages?.map((language,index)=>{
          return  <Pressable onPress={()=>filterLanguage(language)} key={index}>
            <PrimaryText style={{fontSize:16}}>
            {language}
            </PrimaryText>
            </Pressable>
        })
     }
    </View>
    </View>
   )
}

const styles=StyleSheet.create({
    filterBox:{
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       width:150,
       borderWidth:1.5,
       borderColor:'white',
       paddingLeft:7,
       paddingRight:7,
       paddingTop:5,
       paddingBottom:4,
       borderRadius:5
    }
})

export default LanguageFilter
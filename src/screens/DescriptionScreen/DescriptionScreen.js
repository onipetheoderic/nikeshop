import React, {useContext} from 'react';
import {StyleSheet, Dimensions, ToastAndroid, 
  TouchableOpacity, ActivityIndicator, 
  TextInput, Button, Alert, 
  SafeAreaView, ScrollView,ImageBackground,
  Image, Text, View, RefreshControl, 
  FlatList, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ColorCircle from '../../components/ColorCircle';
import SizeIndicator from '../../components/SizeIndicator';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const DescriptionScreen = (props) => {
    
    const { width, height } = Dimensions.get('window');
    
  return (
    <>
<View style={{flex:13}}>
    <StatusBar translucent={true} backgroundColor="transparent"/>
    <ImageBackground source={require("../../../assets/images/description.png")}
     style={{width:'100%', height:'110%', marginBottom:30}}>
    </ImageBackground>
</View>
<ScrollView style={{width:'100%',borderTopRightRadius:40, marginTop:-30,
borderTopLeftRadius:40, backgroundColor:'white'}}>
<View style={{marginTop:30, width:'88%', alignSelf:'center'}}>
  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{fontSize:24,fontFamily:'ArchivoNarrow-Bold', width:'70%'}}>
        NIKE XTM Basketball Shoes</Text>
      <AntDesign style={{marginTop:-25, textAlignVertical:'center'}}
      name="close" size={18} color="gray"/>
  </View>

  <View style={{width:'87%', paddingTop:15,}}>
    <Text style={{fontSize:15,fontFamily:'ArchivoNarrow-Bold'}}>Colour</Text>
    <View style={{flexDirection:'row', width:'60%', marginTop:10, justifyContent:'space-between'}}>
    <ColorCircle bgColor="yellow" />
    <ColorCircle bgColor="#007ff1"/>
    <ColorCircle bgColor="#e80000"/>
    <ColorCircle bgColor="#00b670" />
    </View>
 
  </View>
  <View style={{width:'87%', paddingTop:15,}}>
    <Text style={{fontSize:15,fontFamily:'ArchivoNarrow-Bold'}}>Size</Text>
    <View style={{flexDirection:'row', width:'100%', marginTop:10, justifyContent:'space-between'}}>
   <SizeIndicator sizes={[40, 41, 42, 43]}/>
    </View>
 
  </View>

  <View style={{width:'87%', paddingTop:15, justifyContent:'space-between', flexDirection:'row'}}>
    <Text style={{fontSize:13,fontFamily:'ArchivoNarrow-Regular'}}>Total</Text>
    <Text style={{color:'#00b670', fontSize:16,fontFamily:'ArchivoNarrow-Bold'}}>$299.0</Text>
  </View>

  <TouchableOpacity style={{flex:1, marginHorizontal:10, height:50, justifyContent:'center'}}>
        <LinearGradient style={{borderRadius:33,height:50, justifyContent:'center'}} colors={['#39eca9', '#00ae5c']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={{textAlign:'center', fontFamily:'ArchivoNarrow-Regular',  color:'white', fontSize:17}}>SETTLE NOW</Text>
        </LinearGradient>
  </TouchableOpacity>


</View>
</ScrollView>

    </>
  );
};



export default DescriptionScreen;

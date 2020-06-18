import React, {useContext} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, 
    TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text,
     View, RefreshControl,ImageBackground, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import * as Animatable from 'react-native-animatable';

export default function Carousel(props) {
    const imageLink = props.imageLink
  return (
   <View style={{alignSelf:'center',
   width:'88%', height:140, position:'absolute',
   top:150}}>
       <ImageBackground borderRadius={20} source={require("../../../assets/images/carouselbg.png")} 
       style={{width:'100%', height:'100%'}}>
          <View style={{marginLeft:20, flexDirection:'row'}}>
         <View style={{flex:2, marginTop:14}}>
         <Text>
                <Text style={{
                    fontFamily:'Candara', 
                fontWeight:'bold',
                fontSize:26,
                color:'#1e5b1e',
                marginBottom:10
                }}>
                    {props.title} {"\n"}                  
                </Text>
            
                <Text style={{marginTop:15,color:'#1e5b1e',fontFamily:'AdobeClean-Regular', fontSize:12}}>               
                    {props.description}
                </Text>
           </Text>
         </View>
         <View style={{flex:2}}>
         <Image source={imageLink} 
                    style={{ width: '100%', height: 150 }} />
         </View>
           </View>
       </ImageBackground>
       
        </View>
   
  );
}

const styles = StyleSheet.create({
    headerIcon: {
        marginTop:6
    },
    
    text: {
        fontFamily: "Candara",
        color: "#3e3e3e",
        fontSize:28
    },
    image: {
        flex:1,
        width: undefined,
        height: undefined,
    },
    subText: {
        fontSize: 12,
        color: '#AEB5BC',
        textTransform: 'uppercase',
        fontWeight: '500'
    },  
    titleBar: {
        flexDirection: 'row',
       
        justifyContent: "space-between",
        marginTop: 18,
        marginHorizontal: 12,
        marginBottom:10
    },
    



})
import React, {useContext, useState} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, 
    TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text,
     View, RefreshControl,ImageBackground, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import * as Animatable from 'react-native-animatable';



const imageLink = "../../../assets/images/snicker1.png";
import { CounterContext } from "../../../store";



export default function OverlappingShoeCard(props) {
    // possible colors = blue, green, pink
    const [clicked, setClicked] = useState(false);
    
    var toggleClick = clicked===false?"white":"#fc5a58";
    const globalState = useContext(CounterContext);


    const bgColor = props.bgColor =='blue'?'#9acffb'
    :props.bgColor=='green'?'#98e9d6'
    :props.bgColor=='pink'?'#fdbdbe':'#E4EB8F'
  return (
  <View style={{marginHorizontal:7}}>
      <View style={{position:'absolute', zIndex:2000}}>
      <Image source={props.imageLink} 
      style={{width:100, height:90,  }} resizeMode="center" />
      </View>
    
      <View style={{justifyContent:'flex-end', 
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomEndRadius:20,
      borderBottomLeftRadius:20,
      marginTop:10,
      marginLeft:5,
      height:130, 
      width:120, backgroundColor:bgColor}}>
    
        <View style={{borderBottomEndRadius:19, 
            borderBottomLeftRadius:19,
            backgroundColor:'white',height:53, width:'100%'}}>
        <Text style={{fontFamily:'Candara',  marginTop:10,marginLeft:10, fontSize:14, fontWeight:'bold'}}>
            {props.title}
        </Text>
        <Text style={{color:'#40614E', marginLeft:10,fontFamily:'Candara', fontSize:10}}>
            {props.description}
        </Text>
        </View>
      </View>
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
import React, {useContext, useState} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, 
    TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text,
     View, RefreshControl,ImageBackground, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
export default function ColorCircle(props) {
    const [myBtn, changeBtn] = useState(false);
    const [current, changeCurrent] = useState(0);

    const arrays = props.sizes
    const changeCurrentTab = (index) => {
        changeCurrent(index)
    }
    const currentColor = (index) =>{
        if(current===index){
            return ['#39eca9', '#00ae5c']
        }
        else {
            return ['transparent', 'transparent']
        }
    }
    const fontColorReturner = (index) => {
        if(current===index){
            return 'white';
        }
        else {
            return null
        }
    }
  return (
      <View style={{height:50}}>
   <View style={{height:30,
    borderBottomLeftRadius:15,borderBottomRightRadius:15, 
    borderTopLeftRadius:15, borderTopEndRadius:15, 
    width:'100%', backgroundColor:'#e0e0e0', 
    flexDirection:'row', justifyContent:'space-around'}}>
        
    {arrays.map((data, index) => (
        <View>
            <TouchableOpacity onPress={()=>{changeCurrentTab(index)}} style={{zIndex:200,alignSelf:'center'}}>
        <Text style={{fontFamily:'Candara', color:fontColorReturner(index), marginTop:5, textAlign:'center', marginLeft:12}}>{data}</Text>
        </TouchableOpacity>
        <LinearGradient style={{borderRadius:11, 
     position:'absolute', bottom:-5, height:40, width:40, justifyContent:'center'}}
         colors={currentColor(index)} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>

        </LinearGradient>
        {/* <View style={{backgroundColor:currentColor(index),
     height:40, width:40, borderRadius:11, 
     position:'absolute', bottom:-5}}></View> */}
       </View>
    ))}
   
   </View>
   </View>
  );
}

const styles = StyleSheet.create({
    headerIcon: {
        marginTop:6
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 30/2
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
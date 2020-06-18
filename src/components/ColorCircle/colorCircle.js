import React, {useContext, useState} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, 
    TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text,
     View, RefreshControl,ImageBackground, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Animatable from 'react-native-animatable';

export default function ColorCircle(props) {
    const [myBtn, changeBtn] = useState(false);
    const bgColor = myBtn===false?props.bgColor:'white';
    const borderColor = myBtn===false?props.bgColor: 'gray'
    const iconColor = myBtn === false?'transparent':'gray'
  return (
   <View>
       <TouchableOpacity onPress={()=>changeBtn(!myBtn)}>

           <View style={[styles.circle,{backgroundColor:bgColor, borderWidth:1, borderColor:borderColor}]}>
            <MaterialCommunityIcons style={{alignSelf:'center',
            textAlign:'center', marginTop:5,
            textAlignVertical:'center'}} name="check" size={17} color={iconColor}/>
           </View>
       </TouchableOpacity>
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
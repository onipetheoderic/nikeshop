import React, {useContext} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, 
    TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text,
     View, RefreshControl,ImageBackground, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import * as Animatable from 'react-native-animatable';

import { CounterContext } from "../../../store";
const imageLink = "../../../assets/images/snicker1.png";

export default function OverlappingShoeCard(props) {
    // possible colors = blue, green, pink
    const bgColor = props.bgColor =='blue'?'#9acffb'
    :props.bgColor=='green'?'#98e9d6'
    :props.bgColor=='pink'?'#fdbdbe':'#E4EB8F'

   
    const globalState = useContext(CounterContext);
    // const [count, setCount] = useContext(CounterContext);

    // const increment = () => {
    //   setCount(count + 1);
    // };
    
    // const decrement = () => {
    //   setCount(count - 1);
    // };
    // props.name, props.id, props.description, props.price, props.image

    showToastWithGravity = (msg) => {
        ToastAndroid.showWithGravity(
          msg,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    const selectItem = (name, id, description, price, image) => {
        const {state, dispatch } = globalState;  
        console.log("Add to Cart", state.selectedItems)
        let stateItems = state.selectedItems
        var existingItem = [];
        for(var i in stateItems){
            if(stateItems[i].id===id){
                existingItem.push(stateItems[i])
            }

        }
        if(existingItem.length>=1){
            let msg = `${name} already Added to Cart`
            showToastWithGravity(msg)
        }
        else {
            let msg = `${name} added to Cart`
            showToastWithGravity(msg)
            console.log("New Item", state.selectedItems)
            let payload = {productPrice:price, quantity:1, name:name, id:id, description:description, price:price, image:image}
            dispatch({ type: 'selectItem', payload:payload })
        }
     
      };

      gotoDescription = () => {
          console.log("cliekd", props.navigation)
          props.navigation.navigate("DescriptionScreen")
      }


  return (
  <View style={{marginHorizontal:10}}>
      <View style={{position:'absolute', zIndex:2000, left:-15}}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('DescriptionScreen')}>
      <Image source={props.imageLink} 
      style={{width:140, height:120,  }} resizeMode="center" />
       </TouchableOpacity>
      </View>
    
      <View style={{justifyContent:'flex-end', 
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
      borderBottomEndRadius:20,
      borderBottomLeftRadius:20,
      marginTop:10,
      marginLeft:5,
      height:160, 
      width:150, backgroundColor:bgColor}}>
    
        <View style={{borderBottomEndRadius:19, 
            borderBottomLeftRadius:19,
            backgroundColor:'white',height:53, width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flex:3}}>
        <Text style={{fontFamily:'Candara',  marginTop:10,marginLeft:10, fontSize:14, fontWeight:'bold'}}>
            {props.title}
           
          
        </Text>
       
        <Text style={{color:'#40614E', marginLeft:10,fontFamily:'Candara', fontSize:10}}>
            {props.description}
           
        </Text>
        </View>
        <View style={{flex:1}}>
        <TouchableOpacity style={{marginRight:10, marginTop:14}} 
                onPress={()=>selectItem(props.title, props.id, props.description, props.price, props.image)}>
   
                <FontAwesome5 style={{marginTop:20, marginLeft:10}} name="cart-plus" size={15} color="gray"/>
            </TouchableOpacity>
            </View>
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
import React, {useContext, useState} from 'react';
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
import CartCard from '../../components/CartCard'
import { CounterContext } from "../../../store";

const SelectedProductScreen = (props) => {
    const { width, height } = Dimensions.get('window');
    
    const globalState = useContext(CounterContext);

    const {state, dispatch } = globalState;  
    const {selectedItems} = state
    console.log("selectedItems",selectedItems.length)
    var reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);

    console.log("lenght",selectedItems.length)
    const showPaymentTotal = selectedItems.length===0?false:true;
    
  return (
    <>
        <View>
          <View style={{backgroundColor:'white', paddingBottom:20}}>
              <View style={{flexDirection:'row', marginLeft:25, justifyContent:'space-between', marginTop:30}}>
                <Text style={{fontSize:24,fontFamily:'ArchivoNarrow-Bold', width:'70%'}}>
                  SHOPPING CART
                </Text>           
              </View>
              <Text style={{marginLeft:25, fontSize:16, fontFamily:'ArchivoNarrow-Bold', color:'gray', width:'70%'}}>
                  Total (3) Items
              </Text>  
          </View>
        <ScrollView style={{marginTop:30}}>
        
    {selectedItems.map((items, index) => {
    console.log("items", items)
   return(
        <CartCard id={items.id} quantity={items.quantity} name={items.name} price={items.price} imageLink = {require('../../../assets/images/snicker.png')}/>
   )})}
       
  {showPaymentTotal &&
        <View>
  <View style={{width:'87%', alignSelf:'center', paddingTop:15, justifyContent:'space-between', flexDirection:'row'}}>
    <Text style={{fontSize:13,fontFamily:'ArchivoNarrow-Regular', color:'grey'}}>Total</Text>
    <Text style={{color:'#00b670', fontSize:16,fontFamily:'ArchivoNarrow-Bold'}}>₦{state.total}</Text>
  </View>

  <TouchableOpacity style={{flex:1, marginHorizontal:24,marginBottom:100, height:50, justifyContent:'center'}}>
        <LinearGradient style={{borderRadius:33,height:50, justifyContent:'center'}} colors={['#39eca9', '#00ae5c']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text style={{textAlign:'center', fontFamily:'ArchivoNarrow-Regular',  color:'white', fontSize:17}}>SETTLE NOW</Text>
        </LinearGradient>
  </TouchableOpacity>
  </View>
  }
        </ScrollView>        
     

        </View>
    </>
  );
};



export default SelectedProductScreen;

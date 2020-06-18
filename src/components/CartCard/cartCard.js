import React, {useContext, useState} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, ActivityIndicator, 
    TextInput, Button, Alert, SafeAreaView, ScrollView, Image, Text,
     View, RefreshControl,ImageBackground, FlatList, StatusBar} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import * as Animatable from 'react-native-animatable';
const imageLink = "../../../assets/images/snicker1.png";
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { CounterContext } from "../../../store";



export default function OverlappingShoeCard(props) {
    const bgColor = props.bgColor =='blue'?'#9acffb'
    :props.bgColor=='green'?'#98e9d6'
    :props.bgColor=='pink'?'#fdbdbe':'#E4EB8F'

    const [clicked, setClicked] = useState(false);
    
    var toggleClick = clicked===false?"white":"#fc5a58";
    const globalState = useContext(CounterContext);
    const { state, dispatch } = globalState; 
    
    showToastWithGravity = (msg) => {
        ToastAndroid.showWithGravity(
          msg,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };
      var reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    const incrementQuantity = (id) => {     
        let myArray = state.selectedItems;
           
            var objIndex = myArray.map(function(x) {return x.id; }).indexOf(id);
            const productQuantity = myArray[objIndex].quantity+1
            myArray[objIndex].quantity=myArray[objIndex].quantity+1
            // console.log("After increment: ", myArray[objIndex].quantity)
            myArray[objIndex].productPrice = myArray[objIndex].price*myArray[objIndex].quantity;

            
           
            let allVals = [];
            for(var i in myArray){
                allVals.push(myArray[i].productPrice)
            }
            let reducedVal = allVals.reduce(reducer)
            console.log(reducedVal)
            let total = reducedVal
            console.log("After update: ", myArray[objIndex].quantity, productQuantity)   
            dispatch({ type: 'incrementQty', payload:{myArray:myArray, total:total} })
    }
    const decrementQuantity = (id) => {
        let myArray2 = state.selectedItems;
      
        var objIndex2 = myArray2.map(function(x) {return x.id; }).indexOf(id);
        console.log("Before update: ", myArray2)

        if(myArray2[objIndex2].quantity>1){
          myArray2[objIndex2].quantity-=1
          myArray2[objIndex2].productPrice = myArray2[objIndex2].price*myArray2[objIndex2].quantity
          
        }
        else if(myArray2[objIndex2].quantity==1) {
          myArray2[objIndex2].quantity=1
          myArray2[objIndex2].productPrice = myArray2[objIndex2].price*myArray2[objIndex2].quantity
          
        }
        let allVals = [];
        for(var i in myArray2){
            allVals.push(myArray2[i].productPrice)
        }
        let reducedVal = allVals.reduce(reducer)
        console.log(reducedVal)
        let total = reducedVal
       

        dispatch({ type: 'decrementQty', payload:{myArray2:myArray2, total:total} })
    }

  
/*
id={items.id} image={items.image} quantity={items.quantity} name={items.name} price={items.productPrice}
*/ 

  return (
  <View style={{marginVertical:15}}>
        <LinearGradient style={{borderRadius:11, zIndex:1000,
     position:'absolute',right:10, top:-15, height:35, width:35, justifyContent:'center'}}
         colors={['#39eca9', '#00ae5c']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
<AntDesign style={{alignSelf:'center'}}
      name="close" size={18} color="white"/>
        </LinearGradient>
    <View>
  
    </View>
      <View style={{width:'85%', alignSelf:'center', flexDirection:'row', height:130, backgroundColor:'white', borderRadius:20}}>
            <View style={{margin:10,borderRadius:20, flex:2, backgroundColor:bgColor}}>
            <Image source={props.imageLink} 
      style={{width:100, height:90,  }} resizeMode="center" />
            </View>
            <View style={{flex:3, marginTop:10}}>
            <Text style={{fontSize:17,fontFamily:'ArchivoNarrow-Bold'}}>{props.name}</Text>
            <Text style={{fontSize:15, color:'gray',fontFamily:'ArchivoNarrow-Bold'}}>
                Green M.</Text>
                <View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                       
                        <View style={{flexDirection:'row', 
                            justifyContent:'space-between', 
                            height:23,
                            marginTop:10,
                            borderRadius:3}}>
                                
                                <Text style={{color:'#00b670',marginRight:50, fontSize:16,fontFamily:'ArchivoNarrow-Bold'}}>{props.price}</Text>
                                
                                <View style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={()=>decrementQuantity(props.id)}>
                                <FontAwesome5 name="minus" size={7} style={{marginLeft:6, marginRight:10, marginTop:7}}/>
                                </TouchableOpacity>

                                <Text style={{fontWeight:'bold', width:40, borderRadius:5, backgroundColor:'#e0e0e0', textAlign:'center', fontSize:12, marginTop:2}}>{props.quantity}</Text>
                                
                                <TouchableOpacity onPress={()=>incrementQuantity(props.id)}>
                                <FontAwesome5 name="plus" size={7} style={{marginRight:6, marginLeft:10, marginTop:7}}/>
                                </TouchableOpacity>
                                </View>
                        </View>
                    </View>
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
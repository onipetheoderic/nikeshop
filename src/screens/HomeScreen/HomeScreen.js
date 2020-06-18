import React, {useContext} from 'react';
import {StyleSheet, Dimensions, ToastAndroid, 
  TouchableOpacity, ActivityIndicator, 
  TextInput, Button, Alert, 
  SafeAreaView, ScrollView,ImageBackground,
  Image, Text, View, RefreshControl, 
  FlatList, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CounterContext } from "../../../store";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import hs1 from '../../../assets/images/hs1.png';
import hs from '../../../assets/images/hs.png';
import hs3 from '../../../assets/images/hs3.png';
import hs4 from '../../../assets/images/hs4.png';
import hs2 from '../../../assets/images/hs2.png'


// custom imports
import Carousel from '../../components/Carousel'
import CarouselPlayGround from '../../components/CarouselPlayground'
import OverlappingShoeCard from '../../components/OverLappingShoeCard';
import NormalShoeCard from '../../components/NormalShoeCard'


const HomeScreen = (props) => {
  const {state} = useContext(CounterContext)
  
    const { width, height } = Dimensions.get('window');
   const Items = [   
      {
        title:"Nike XTM1",
        bgColor:"blue",
        price:60,
        description:"Exquisite You need him",
        imageLink:hs,
        id:5
      },
      {
        title:"Nike XTM2",
        bgColor:"green",
        price:70,
        description:"Exquisite You need him",
        imageLink:hs1,
        id:3
      },
      {
        title:"Nike XTM",
        bgColor:"pink",
        description:"Exquisite You need him",
        imageLink:hs3,
        price:100,
        id:2
      }
   ]

   const BigItems = [   
    {
      title:"Nike XTM",
      bgColor:"blue",
      price:60,
      description:"Exquisite You need him",
      imageLink:hs2,
      id:1
    },
    {
      title:"Nike XTM",
      bgColor:"green",
      price:120,
      description:"Exquisite You need him",
      imageLink:hs4,
      id:2
    },
    {
      title:"Nike XTM",
      bgColor:"pink",
      description:"Exquisite You need him",
      imageLink:hs,
      price:100,
      id:3
    }
 ]
    


  return (
    <>
  
    <View style={{flex:1}}>
    <StatusBar translucent={true} backgroundColor="transparent"/>
     <ImageBackground source={require("../../../assets/images/bg.png")} style={{width:'100%', height:250}}>
    
    
    


     <View style={{flexDirection:'row',backgroundColor:'white', position:'absolute',
     borderColor:'white', height:40, top:70, width:'88%', borderWidth:1, alignSelf:'center', borderRadius:20}}>
    <FontAwesome style={{paddingTop:10, paddingLeft:15}} name="search" size={18} color="gray"/>
    <TextInput
        style={{backgroundColor:'transparent'}}
        placeholder="Search ESPN products"
        
        underlineColorAndroid="transparent"
    />
</View>
         <CarouselPlayGround>
           
         <Carousel navigation={props.navigation} title="NIKE XTM" imageLink = {require('../../../assets/images/snicker.png')} description="The Recommended Nike XTM men's shoe brings back airplace inspired style"/>
         <Carousel navigation={props.navigation} title="Money XTM" imageLink = {require('../../../assets/images/snicker1.png')} description="The Recommended Nike XTM men's shoe brings back airplace inspired style"/>
         <Carousel navigation={props.navigation} title="Cash XTM" imageLink = {require('../../../assets/images/snicker4.png')} description="The Recommended Nike XTM men's shoe brings back airplace inspired style"/>
         <Carousel navigation={props.navigation} title="Deric XTM" imageLink = {require('../../../assets/images/snicker7.png')} description="The Recommended Nike XTM men's shoe brings back airplace inspired style"/>
      
         </CarouselPlayGround>
         
         
    </ImageBackground>         

    </View>
        <ScrollView style={{flex:4, marginBottom:20, marginTop:60}}>
          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignSelf:'center',
          width:'88%',
          }}>
            <Text style={{fontSize:15,textAlignVertical:'center', 
            fontFamily:'ArchivoNarrow-Bold'}}>
GROUP BY
            </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{textAlignVertical:'center', fontFamily:'ArchivoNarrow-Regular'}}>See All</Text>
            <Ionicons style={{marginLeft:10, textAlignVertical:'center'}} name="ios-arrow-round-forward" size={28} color="gray"/>
            </View>
          </View>
          <ScrollView horizontal style={{marginLeft:10}} showsHorizontalScrollIndicator={false}>
          {Items.map((item, index) => (
            <OverlappingShoeCard id={item.id} navigation={props.navigation} price={item.price}  title={item.title} bgColor={item.bgColor} description={item.description} imageLink={item.imageLink}/>
         ))}
                   </ScrollView>
          


          <View style={{flexDirection:'row', 
          justifyContent:'space-between',
          alignSelf:'center',
          marginTop:40,
          width:'88%',
          }}>
            <Text style={{fontSize:15,textAlignVertical:'center', 
            fontFamily:'ArchivoNarrow-Bold'}}>
MOST BIG
            </Text>
            <View style={{flexDirection:'row'}}>
            <Text style={{textAlignVertical:'center', fontFamily:'ArchivoNarrow-Regular'}}>See All</Text>
            <Ionicons style={{marginLeft:10, textAlignVertical:'center'}} name="ios-arrow-round-forward" size={28} color="gray"/>
            </View>
          </View>
          <ScrollView horizontal style={{marginLeft:10}} showsHorizontalScrollIndicator={false}>
          {BigItems.map((item, index) => (
            <NormalShoeCard navigation={props.navigation} title={item.title} price={item.price} bgColor={item.bgColor} description={item.description} imageLink={item.imageLink}/>
          ))}
                   </ScrollView>
          
        </ScrollView>
        <View style={{backgroundColor:'green', 
        top:height-100, borderRadius:30, right:20, position:'absolute', 
        width:60, height:60, justifyContent:'center', zIndex:30000}}>
       <TouchableOpacity onPress={()=>props.navigation.navigate('SelectedProductScreen')}>         
        <FontAwesome5 name="cart-plus" size={25} color="white" style={{marginLeft:15}}/>
        <Text style={{position:'absolute', top:0, right:10, color:'red', fontWeight:'bold'}}>
            {state.selectedItems.length}
        </Text>
        </TouchableOpacity>
     </View>
    </>
   
  );
};



export default HomeScreen;


const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},
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
import React, {useContext} from 'react';
import {

  View,
  Text,
  Dimensions,
  
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';


const SplashScreen = (props) => {
    
    const { width, height } = Dimensions.get('window');
    setTimeout(() => {
        props.navigation.navigate('HomeScreen'); //this.props.navigation.navigate('Login')
    }, 4300); 
  return (
    <>
        <View style={{flex:1, justifyContent:'center', backgroundColor:'#01a54f'}} duration={3000} animation="zoomInUp">
        
        <Animatable.Text duration={2500} animation="zoomInUp" style={{textAlign:'center', fontSize:20}}>
          Welcome to NikeShop
        </Animatable.Text>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{textAlign:'center',fontSize:10, fontFamily:'Candara'}}>Created with </Text>
          <FontAwesome name="heart" size={17}/>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{textAlign:'center', marginLeft:4,fontSize:10, fontFamily:'Candara', fontWeight:'bold'}}>
            Theoderic Onipe
          </Animatable.Text>
        
          </View>
          <Animatable.Text delay={2000} duration={2000} animation="bounceInUp" style={{textAlign:'center',fontSize:10, fontFamily:'Candara'}}>
            Email: onipetheoderic@gmail.com
          </Animatable.Text>            
        </View>
    </>
  );
};



export default SplashScreen;

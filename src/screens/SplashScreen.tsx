import { View, Text, ImageBackground, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { Reponse } from '../constants/Reponse';
import { Spacecomponent } from '../components';
import { appColors } from '../constants/appColor';

const SplashScreen = () => {
  return (
    <ImageBackground source={require('../assets/image/Background.png')} style={{flex:1,justifyContent:'center', alignItems:'center'}} imageStyle={{flex:1}} >
      <Image source={require('../assets/image/Logo.png')} style={{width:Reponse.sizes.width * 0.7, resizeMode:'contain'}} />
        <Spacecomponent height={20}/>
        <ActivityIndicator color={appColors.gray1} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;

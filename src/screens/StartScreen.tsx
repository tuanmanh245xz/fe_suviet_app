import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { gloBalStyle } from '../styles/globalStyle';

const StartScreen = ({ navigation }: any) => {
  return (
    <View style={[gloBalStyle.container]}>
    <Image source={require('../assets/image/message.png')} style={[gloBalStyle.message]} resizeMode="contain"/>
     <ImageBackground source={require('../assets/image/iconLogo.png')} style={[gloBalStyle.imageStyle]} resizeMode="contain"/>
     <View style={{flex:1}}>
        <Text style={[gloBalStyle.textStyle]}>DUOLINGO</Text>
        <Text style={[gloBalStyle.textDesc]}>Learn Languages whenever and wherever you want. It's free forever.</Text>
     </View>
     <View style={[gloBalStyle.containerBtn]}>
     <TouchableOpacity style={[gloBalStyle.styleBtn,gloBalStyle.backgroundColorBtn,gloBalStyle.BottomBtn]}>
            <Text style={[gloBalStyle.colorTextBtn,gloBalStyle.TextSize]}>GET STARTED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[gloBalStyle.styleBtn,gloBalStyle.spaceBtn,gloBalStyle.BorderColor]}  onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={[gloBalStyle.TextSize,gloBalStyle.TextColor]}>LOG IN</Text>
        </TouchableOpacity>
     </View>
    </View>
  );
};

export default StartScreen;

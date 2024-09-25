import { View, Text, Button, ImageBackground, TextInput } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Reponse } from '../../../constants/Reponse';

const LoginScreen = () => {
  return (
    <View style={{  alignItems:'center'}}>
     <View style={{alignItems:'center',marginTop:Reponse.sizes.height * 0.1}}>
     <Text style={{ fontSize:20}}>Sign In</Text>
     <ImageBackground source={require('../../../assets/image/Page-1.png')} style={{width:Reponse.sizes.width * 0.7, height:Reponse.sizes.height * 0.4}} resizeMode="contain"/>
     </View>
     <View>
        <TextInput placeholder="Email"/>
     </View>
      {/* <Button title="Login" onPress={async () => await AsyncStorage.setItem('asseccToken','')}/> */}

    </View>
  );
};

export default LoginScreen;

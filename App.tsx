// In App.js in a new project


import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';





const  App = () =>  {
  const [isShowSplash, setisShowSplash] = useState(true);
  const [accessToken,setaccessToken] =  useState('');
  const {getItem,setItem} = useAsyncStorage('asseccToken');
useEffect(() => {
  const timeout = setTimeout(() => {
      setisShowSplash(false);
  },1500);
  return () => clearTimeout(timeout);
},[]);
useEffect(() => {
  CheckLogin();
},[]);
const CheckLogin = async () => {
  const token = await getItem();
  console.log(token);
  //set token if token co thi set token bang cai setToken
  token && setaccessToken(token);
};

  return (
    <>
     <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent />
    {

       isShowSplash ? <SplashScreen/> :
       <NavigationContainer>
        {!accessToken ? <MainNavigator /> : <AuthNavigator/> }

       </NavigationContainer>
    }
    </>
  );
};

export default App;

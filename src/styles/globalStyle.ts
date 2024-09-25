import { StyleSheet } from 'react-native';
import { appColors } from '../constants/appColor';
import { Reponse } from '../constants/Reponse';

export const gloBalStyle = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    imageStyle: {
        width:Reponse.sizes.width * 0.8,
        height:Reponse.sizes.height * 0.3,
        justifyContent:'center',
        alignItems:'center',



    },
    message:{
        width:Reponse.sizes.width * 0.4,
        height:Reponse.sizes.height * 0.2,
    },
    textStyle:{
        fontSize: Reponse.sizes.width * 0.1,
        textAlign:'center',
        fontWeight:'500',
        color:appColors.title,
    },
    textDesc:{
        fontSize:22,
        textAlign:'center',
        fontWeight:'200',
        color:'#650000',
        paddingHorizontal:10,
    },
    containerBtn:{
        flex:1,
        flexDirection:'column',

        alignItems:'center',
    },
    styleBtn: {
        paddingHorizontal:20,

        paddingVertical:13,
        width:Reponse.sizes.width * 0.8, alignItems:'center',
        borderRadius:Reponse.sizes.width * 0.7,

    },
    spaceBtn:{
        marginTop:22,
    },
    backgroundColorBtn: {
        backgroundColor:appColors.background,
    },
    colorTextBtn:{
        color:appColors.textColor,
    },
    TextSize:{
        fontSize:25,
    },
    TextColor:{
        color:appColors.TextBtn,
    },
    BottomBtn:{
        borderBottomColor:appColors.gray1,
        borderBottomWidth:2,
    },
    BorderColor:{
        borderColor:appColors.borderColor,
        borderWidth:1,
    },
});

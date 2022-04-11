import { StyleSheet } from "react-native";
import { COLORS } from "../../config";

const  styles=StyleSheet.create({
    MainContainer:{
        flex:1,
        padding:15
    },
    BackButton:{
        height:40,
        width:40,
        borderRadius:90,
        backgroundColor:COLORS.gray1,
        justifyContent:"center",
        alignItems:'center'

    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: COLORS.black
    },
})

export default styles
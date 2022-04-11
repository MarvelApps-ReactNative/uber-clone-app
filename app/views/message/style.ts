import { StyleSheet } from "react-native";
import { COLORS, Font } from "../../config";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    header: {
        flex: .1,
        backgroundColor: COLORS.black,
        padding: 20
    },
    messageText: {
        fontSize: 35,
        color: COLORS.white,
        ...Font.body
    },
    couponText: {
        fontSize: 18,
        color: "black",
        fontWeight: "600",
        ...Font.heading
    },
    offerText: {
        fontSize: 14,
        color: "black",
        

    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: COLORS.white
    },
    secondContainer: {
        flex: .9,
        padding: 20
    },
    cardContainer: {
        backgroundColor: COLORS.graybackground,
        alignItems: "center",
        padding: 20
    },
    buttoncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    backicon: {
        height: 20,
        width: 20,
        resizeMode: "contain",
        tintColor: COLORS.black
    },
    imageContainer: {
        padding: 20,
        backgroundColor: "green",
        borderRadius:90,
        marginVertical:10
    }
})

export default styles
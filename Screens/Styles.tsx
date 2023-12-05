import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height
const primary = "#7fff00"
const bgColor = "#292829"

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    imageDP: {
        width: screenWidth * 0.4,
        height: screenHeight * 0.85,
        shadowColor: primary,
        shadowOffset: {
            width: screenWidth * 0.01,
            height: screenHeight * 0.01,
        }
    },
    headTopic: {
        fontSize: 16,
        color: "white",
        position: "relative"
    },
    headName: {
        fontSize: 25,
        fontWeight: "bold",
        color: primary,
    }
});

export const Card = StyleSheet.create({
    body: {
        margin: 10,
        borderWidth: 5,
        borderColor: primary,
        borderRadius: 50,
        width: screenWidth * 0.25,
        height: screenHeight * 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
});
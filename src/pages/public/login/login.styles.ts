import {StyleSheet} from "react-native";
import {
    DimensionsHeight,
    DimensionsWidth
}                   from "@global/dimensions";

export const Styles = StyleSheet.create({
        linearGradientComponent: {
            flex: 1,
        },
        firstBackgroundImageStyles: {
            width: DimensionsWidth * 0.4,
            height: DimensionsHeight * 0.2
        },
        secondBackgroundImageStyles: {
            width: DimensionsWidth * 0.3,
            height: DimensionsHeight * 0.15
        },
        logo: {
            width: 400,
            height: 70
        },
        brandLogo: {
            width: 150,
            height: 40
        },
        loginForm: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4
            },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8,
        },
        container: {
            flex: 1,
            justifyContent:
                "center",
            alignItems:
                "center",
        }
        ,
    })
;

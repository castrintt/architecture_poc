import {StyleSheet}  from "react-native";
import {EToastTypes} from "@enums/toastTypes.enum";

const renderColorByType = (type: EToastTypes) => {
    switch (type) {
        case EToastTypes.SUCCESS:
            return "#00A124";
        case EToastTypes.ERROR:
            return 'red';
        case EToastTypes.WARNING:
            return "#FF7223";
        default:
            return "#00A124";
    }
};

export const Style = (type: EToastTypes) =>
    StyleSheet.create({
        base: {
            zIndex: 5,
            elevation: 10,
            width: "90%",
            minHeight: 70,
            paddingVertical: 15,
            backgroundColor: renderColorByType(type),
            borderRadius: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            position: "relative",
        },
        main: {
            width: "100%",
            height: "95%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
        },
        iconContainer: {
            width: "20%",
            height: "100%",
            paddingHorizontal: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        textContainer: {
            paddingHorizontal: 10,
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
        },
        wrappedIconContainer: {
            borderRadius: 100,
            width: 30,
            height: 30,
            backgroundColor: "#00000042",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            color: "white",
            // fontFamily: Fonts.Bold,
            fontSize: 14,
        },
        text: {
            color: "white",
            // fontFamily: Fonts.Medium,
            fontSize: 12,
        },
        empty: {
            position: "absolute",
            bottom: 0,
            left: 5,
            backgroundColor: "white",
            width: "90%",
            height: "5%",
        },
    });

import { colors, commonStyles } from "./common_styles";

export const home_styles = {
    container: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        ...commonStyles.textShadow,
        color: colors.gold,
        fontSize: 70,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        ...commonStyles.baseButton,
        backgroundColor: colors.purpleLight,
    },

    buttonText: {
        color: colors.whiteText,
        fontSize: 20,
        fontWeight: "bold",
    },
    footerLeft: {
        position: "absolute",
        bottom: 20,
        left: 25,
        color: colors.whiteText,
        fontSize: 12,
        opacity: 0.8,
    },
    footerRight: {
        position: "absolute",
        bottom: 20,
        right: 25,
        color: colors.whiteText,
        fontSize: 12,
        fontWeight: "bold",
    }
};
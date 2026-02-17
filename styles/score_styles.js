import { colors, commonStyles } from "./common_styles";

export const scoreStyles = {
    container: {
        ...commonStyles.centerAll,
        backgroundColor: colors.purpleDark,
    },
    title: {
        ...commonStyles.textShadow,
        color: colors.gold,
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    scoreValue: {
        color: colors.whiteText,
        fontSize: 100,
        fontWeight: "bold",
    },
    label: {
        color: colors.whiteText,
        fontSize: 18,
        letterSpacing: 2,
        marginBottom: 40,
        opacity: 0.8,
    },
    button: {
        ...commonStyles.baseButton,
        backgroundColor: colors.purpleLight,
        borderColor: colors.gold,
    },
    buttonText: {
        color: colors.whiteText,
        fontSize: 20,
        fontWeight: "bold",
    }
};
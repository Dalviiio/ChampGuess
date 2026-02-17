import { colors, commonStyles } from "./common_styles";

export const game_styles = {

    container: {
        ...commonStyles.centerAll,
    },

    bgNormal: {
        backgroundColor: colors.blueDark
    },
    bgCorrect: {
        backgroundColor: colors.green
    },
    bgSkip: {
        backgroundColor: colors.red
    },

    header: {
        position: "absolute",
        top: 30,
        width: "100%",
        alignItems: "center",
    },

    timer: {
        fontSize: 28,
        color: colors.gold,
        fontWeight: "bold",
        ...commonStyles.textShadow,
    },

    champion: {
        color: colors.whiteText,
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        ...commonStyles.textShadow,
    },

    scoreUnder: {
        fontSize: 24,
        color: colors.whiteText,
        fontWeight: "bold",
        marginTop: 15,
        textAlign: "center",
        ...commonStyles.textShadow,
    }
};
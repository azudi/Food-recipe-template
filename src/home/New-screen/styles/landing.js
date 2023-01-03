import { StyleSheet } from "react-native";
import { SCR_HEIGHT, SCR_WIDTH } from "../../../utils";
import { theme } from "../../../theme";
import { isPortrait } from "../../../services/hooks/orientation";

export const landing = StyleSheet.create({
    image_contaoiner: {
        flexDirection: "column",
        height: isPortrait() ? SCR_HEIGHT : SCR_WIDTH,
        backgroundColor: theme.dark_background
     }
})
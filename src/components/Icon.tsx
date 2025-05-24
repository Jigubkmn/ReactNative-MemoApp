import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import fontData from "../../assets/fonts/icomoon.ttf";
import fontSelection from "../../assets/fonts/selection.json";

const CustomIcon = createIconSetFromIcoMoon(fontSelection, "icoMoon", "icomoon.ttf");

export function Icon() {
  const [fontsLoaded] = useFonts({
    IcoMoon: fontData
  })
    if (!fontsLoaded) {
      return null;
    }
  return(
    <CustomIcon name="plus" size={40} color="red"/>
  )
}
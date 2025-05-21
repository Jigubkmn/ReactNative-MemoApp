import { View, Text, StyleSheet, type TextStyle } from "react-native";

type Props = {
  bang: boolean;
  World: string;
  style: TextStyle;
}

export const Hello = ({bang, World, style} :Props) => {
  return (
    <View>
      <Text style={[styles.text, style]}>Hello {World}{bang == true ? "!" : "?"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

import { Text, StyleSheet, type ViewStyle, TouchableOpacity } from "react-native";

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
  onPress?: () => void;
}

export function CircleButton({style, children, onPress}: Props) {
  return(
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // これはiosのみしか適用できない
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // Android用のシャドウデザイン
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 48
  }
});
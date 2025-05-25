import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function LogoutButton () {
  return(
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "rgba(255,255,255,0.7)",
  }
})
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config";
import { router } from "expo-router";

export function LogoutButton () {
  const handlePress = () => {
    signOut(auth)
    .then(() => {
      router.replace("/auth/login/page")
    })
    .catch((error) => {
      console.log("error", error);
      Alert.alert("ログアウトに失敗しました");
    })
  }
  return(
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
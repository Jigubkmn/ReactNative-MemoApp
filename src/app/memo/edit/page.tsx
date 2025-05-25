import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Header } from "../../../components/Header";
import { CircleButton } from "../../../components/CircleButton";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Edit() {
  const handlePress = () => {
    router.back()
  }
  return(
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline value="買い物リスト" autoFocus></TextInput>
        <CircleButton>
          <Feather name="check" size={40} onPress={handlePress}/>
        </CircleButton>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  }
})
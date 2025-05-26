import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { CircleButton } from "../../../components/CircleButton";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router"
import { collection, addDoc } from "firebase/firestore"
// import { db } from "../../../firebase"
import { db, auth } from "../../../config"

export default function Edit() {
  const handlePress = () => {
    // auth.currentUser?.uid：ログインユーザーのid
    const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
    addDoc(ref, {
      bodyText: 'test'
    })
    // docRef：作成されたドキュメント
    .then((docRef) => {
      console.log('success', docRef.id)
    })
    .catch((error) => {
      console.log(error)
    })
    router.back()
  }

  return(
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline value="" autoFocus></TextInput>
        <CircleButton onPress={handlePress}>
          <Feather name="check" size={40}/>
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
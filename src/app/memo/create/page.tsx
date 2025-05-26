import { View, TextInput, StyleSheet } from "react-native";
import { CircleButton } from "../../../components/CircleButton";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db, auth } from "../../../config"
import { useState } from "react"
import KeyboardAvoidingView from "../../../components/KeyboardAvoidingView"

export default function Edit() {
  const [bodyText, setBodyText] = useState('')

  const handlePress = (bodyText: string) => {
    if (auth.currentUser === null) { return }
    // auth.currentUser?.uid：ログインユーザーのid
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
      bodyText: bodyText, //メモ内容
      updateAt: Timestamp.fromDate(new Date())
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
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        multiline
        value={bodyText}
        autoFocus
        onChangeText={(text) => {setBodyText(text)}}
        >
        </TextInput>
        <CircleButton onPress={() => {handlePress(bodyText)}}>
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
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from "react-native";
import { CircleButton } from "../../../components/CircleButton";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
// getDoc：ドキュメントを取得
// setDoc：ドキュメントを更新
import { type Memo } from "../../../../types/memo";
import { auth, db } from "../../../config";

export default function Edit() {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  
  const handlePress = () => {
    router.back()
  }

  useEffect(() => {
    if (auth.currentUser === null) { return }
    // ドキュメントを取得
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref).then((docRef) => {
      const RemoteBodyText = docRef.data()?.bodyText
      setBodyText(RemoteBodyText)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])
  return(
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} multiline value={bodyText} autoFocus></TextInput>
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
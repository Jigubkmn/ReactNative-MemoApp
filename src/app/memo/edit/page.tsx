import { View, TextInput, StyleSheet, Alert } from "react-native";
import { CircleButton } from "../../../components/CircleButton";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import KeyboardAvoidingView from "../../../components/KeyboardAvoidingView";
// getDoc：ドキュメントを取得
// setDoc：ドキュメントを更新
import { auth, db } from "../../../config";

export default function Edit() {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')

  const handlePress = (id: string, bodyText: string) => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    // ドキュメント更新
    setDoc(ref, {
      bodyText,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
      .then(() => {
        router.back()
      })
      .catch((error) => {
      console.log(error)
        Alert.alert("メモの更新に失敗しました")
      })
  }

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    // ドキュメントを取得
    getDoc(ref).then((docRef) => {
      const RemoteBodyText = docRef.data()?.bodyText
      setBodyText(RemoteBodyText)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])
  return(
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          value={bodyText}
          autoFocus
          onChangeText={(text) => { setBodyText(text) }}
        >
        </TextInput>
        <CircleButton onPress={() => {handlePress(id, bodyText)}}>
          <Feather name="check" size={40} />
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
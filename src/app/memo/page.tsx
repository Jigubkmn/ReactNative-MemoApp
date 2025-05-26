import {  View, StyleSheet } from "react-native";
import { CircleButton } from "../../components/CircleButton";
import { MemoListItems } from "../../components/MemoListItems";
import { Feather } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { LogoutButton } from "../../components/LogoutButton";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { db, auth } from "../../config"


const handlePress = () => {
  router.push("/memo/create/page")
}

export default function Page() {
  const navigation = useNavigation();
  useEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <LogoutButton />
          )
        }
      })
  }, [])

  useEffect(() => {
    if (auth.currentUser === null) { return }
    // users/${auth.currentUser.uid}/memos：ログインユーザーのメモ一覧
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    // ほしいデータを選択
    const q = query(ref, orderBy("updateAt", "desc"))
    // メモのデータを監視
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log("memo", doc.data())
      })
    })
    // 監視を削除
    return unsubscribe
  }, )

  return (
    <View style={styles.container}>
      <MemoListItems />
      <MemoListItems />
      <MemoListItems />
      <CircleButton onPress={handlePress}>
        <Feather name="plus" size={40}/>
      </CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  }
});
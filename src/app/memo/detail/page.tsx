import { View, Text, ScrollView, StyleSheet } from "react-native";
import { CircleButton } from "../../../components/CircleButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { onSnapshot, doc } from "firebase/firestore";
import { db, auth } from "../../../config";
import { type Memo } from "../../../../types/memo";
import { useEffect, useState } from "react";



export default function Detail() {
  const [memo, setMemo] = useState<Memo | null>(null);
  const id = String(useLocalSearchParams().id)

  const handlePress = (id: string) => {
    router.push({pathname: "/memo/edit/page", params: { id }})
  }

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updateAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updateAt
      })
    })
    return unsubscribe
  }, [])

  return(
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>
          {memo?.updateAt?.toDate().toLocaleString("ja-JP")}
        </Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>
      <CircleButton style={{top: 60}} onPress={() => handlePress(id)}>
        <FontAwesome5 name="pen" size={24}/>
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#ffffff",
  },
  memoBody: {
    paddingHorizontal: 27,
  },
  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  }
})
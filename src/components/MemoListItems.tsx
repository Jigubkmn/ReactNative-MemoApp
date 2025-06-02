import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link} from "expo-router";
import { type Memo } from "../../types/memo"
import { deleteDoc, doc } from "firebase/firestore"
import { db, auth } from "../config"

type Props = {
  memo: Memo
}

export function MemoListItems({memo}: Props) {
  const { bodyText, updateAt } = memo
  const dataString = memo.updateAt.toDate().toLocaleString('ja-JP')

  const handlePress = (id: string) => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    Alert.alert("メモを削除しまs。", "よろしいですか？", [
      {
        text: "キャンセル"
      },
      {
        text: "削除",
        // 赤色で表示
        style: "destructive",
        // 削除ボタンを押したらメモを削除
        onPress: () => {
          deleteDoc(ref)
          .then(() => {
            console.log("success")
          })
          .catch(() => {
            Alert.alert("メモの削除に失敗しました")
          })
        }
      }
    ])
  }

  if (bodyText === null || updateAt === null) { return null}
  return(
    <Link
      href={{pathname: "/memo/detail/page", params: {id: memo.id}}}
      asChild
    >
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          {/* numberOfLines：1行に収まらない場合は省略 */}
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dataString}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => {handlePress(memo.id)}}>
          <AntDesign name="close" size={24} color="#B0B0B0"/>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoListItem: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 18,
    color: "#848484"
  }
});
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link} from "expo-router";
import { type Memo } from "../../types/memo"

type Props = {
  memo: Memo
}

export function MemoListItems({memo}: Props) {
  const updateAt = memo.updateAt.toDate().toLocaleString()
  return(
    <Link href="/memo/detail/page" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          {/* numberOfLines：1行に収まらない場合は省略 */}
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{memo.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{updateAt}</Text>
        </View>
        <View>
          <TouchableOpacity>
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
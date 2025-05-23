import { Text, View, StyleSheet } from "react-native";
import { Header } from "../components/Header";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />
      {/* メモリスト1 */}
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト1</Text>
          <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      {/* メモリスト2 */}
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト2</Text>
          <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      {/* メモリスト3 */}
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト3</Text>
          <Text style={styles.memoListItemDate}>2023年10月1日 10:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      {/* サークルボタン */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
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
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // これはiosのみしか適用できない
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // Android用のシャドウデザイン
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 48
  }
});
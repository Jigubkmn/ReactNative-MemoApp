import { Text, View, StyleSheet } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      {/* メモリスト */}
      <View>
        <View>
          <View>
            <Text>買い物リスト1</Text>
            <Text>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* メモリスト */}
      <View>
        <View>
          <View>
            <Text>買い物リスト2</Text>
            <Text>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* メモリスト */}
      <View>
        <View>
          <View>
            <Text>買い物リスト3</Text>
            <Text>2023年10月1日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
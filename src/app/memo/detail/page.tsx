import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../../components/Header";
import { CircleButton } from "../../../components/CircleButton";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Detail() {
  const handlePress = () => {
    router.push("/memo/edit/page")
  }
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月1日  10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
        買い物リスト
        書体やレイアウトなどを確認するために用います。
        本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton style={{top: 160}} onPress={handlePress}>
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
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
  }
})
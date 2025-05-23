import { View, Text, ScrollView } from "react-native";
import { Header } from "../../../components/Header";
import { CircleButton } from "../../../components/CircleButton";

export default function Detail() {
  return(
    <View>
      <Header />
      <View>
        <Text>買い物リスト</Text>
        <Text>2023年10月1日  10:00</Text>
      </View>
      <ScrollView>
        <Text>
        買い物リスト
        書体やレイアウトなどを確認するために用います。
        本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>
      <CircleButton text="+" />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   }
// })
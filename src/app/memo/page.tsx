import {  View, StyleSheet } from "react-native";
import { Header } from "../../components/Header";
import { CircleButton } from "../../components/CircleButton";
import { MemoListItems } from "../../components/MemoListItems";
import { Feather } from "@expo/vector-icons";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header />

      <MemoListItems />
      <MemoListItems />
      <MemoListItems />

      <CircleButton>
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
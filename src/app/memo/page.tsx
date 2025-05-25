import {  View, StyleSheet } from "react-native";
import { CircleButton } from "../../components/CircleButton";
import { MemoListItems } from "../../components/MemoListItems";
import { Feather } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { LogoutButton } from "../../components/LogoutButton";

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
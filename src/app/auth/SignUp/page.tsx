import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert  } from "react-native";
import { Button } from "../../../components/button";
import { Link , router} from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 会員登録処理
  const handlePress = (email: string, password: string) => {
    // データを渡す
    createUserWithEmailAndPassword(auth, email, password)
    // 会員登録処理
    .then((userCredential) => {
      console.log("userCredential", userCredential.user.uid);
      // backボタンを表示させないため
      router.replace("/memo/page")
    })
    .catch((error) => {
      // console.log("err", error);
      const {code, message} = error;
      console.log(code, message);
      Alert.alert("会員登録処理を失敗しました");
    })
  }

  return(
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email address"
          textContentType="emailAddress"
          />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
        />
        <Button label="Submit" onPress={() => {handlePress(email, password)}} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href="/auth/login/page" asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "#000000",
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  }
})
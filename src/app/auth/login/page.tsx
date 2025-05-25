import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button } from "../../../components/button";
import { Link, router } from "expo-router";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = (email: string, password: string) => {
    // ログイン処理
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("userCredential", userCredential.user.uid);
      router.replace("/memo/page")
    })
    .catch((error) => {
      console.log("error", error);
      Alert.alert("ログインに失敗しました");
    })
  }
  return(
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
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
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/signUp/page" asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
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
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/button";

export default function SignUp() {
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput value={'Email address'} style={styles.input} />
        <TextInput value={'Password'} style={styles.input} />
        {/* <Button label="Submit" onPress={} /> */}
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Text style={styles.footerLink}>Log in.</Text>
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
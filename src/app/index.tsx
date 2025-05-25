import { Redirect, router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    // ログイン状態の変化を監視
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/memo/page")
      }
    })
  }, [])
  return <Redirect href="/auth/login/page" />
}
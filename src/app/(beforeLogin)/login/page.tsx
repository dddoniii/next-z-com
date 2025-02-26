"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      // 세션이 있으면 /home으로 리다이렉트
      router.replace("/home");
    } else {
      // 세션이 없으면 /i/flow/login으로 리다이렉트
      router.replace("/i/flow/login");
    }
  }, [session, router]); // session과 router가 변경될 때마다 실행됩니다.

  return <Main />;
}

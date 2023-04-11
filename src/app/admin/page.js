"use client";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

function handleSignOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <h1>Only logged in users can view this page</h1>{" "}
      <button onClick={handleSignOut}>Sign Out</button>
      <Link href="/">Home</Link>
    </>
  );
}

export default Page;

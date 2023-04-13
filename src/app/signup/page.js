"use client";
import React from "react";
import { useEffect } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Page() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  // Get profile information
  useEffect(() => {
    (async function getProfile() {
      try {
        const res = await fetch(
          "http://127.0.0.1:8090/api/collections/profiles/records"
        );
        const data = await res.json();
        const profile = data.items[0];
        console.log(profile);
      } catch (error) {
        console.log("no user!");
      }
    })();
  });

  // POST new profile in db using firebase ID
  async function postNewProfile(name, uid) {
    fetch("http://127.0.0.1:8090/api/collections/profiles/records", {
      method: "POST",
      body: JSON.stringify({
        firstName: name,
        firebaseID: uid,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(function (response) {
        console.log("posted!");
        return response.json();
      })
      .catch((error) => console.error("Error:", error));
  }

  // Handle form submission
  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result.user.uid);
    // POST new profile in db using firebase ID
    postNewProfile(name, result.user.uid);

    return router.push("/admin");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="name">
            <p>Email</p>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="name"
              name="name"
              id="name"
              placeholder="Jane Nguyen"
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
}

export default Page;

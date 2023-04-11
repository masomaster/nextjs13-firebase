import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>This is a test site for Firebase authentication in Next.js 13</h1>
      <Link href="/admin">Admin</Link>
      <br />
      <Link href="/signin">Sign In</Link>
      <br />
      <Link href="/signup">Sign Up</Link>
    </main>
  );
}

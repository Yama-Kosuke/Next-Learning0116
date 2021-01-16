import Head from "next/head";
import Link from "next/link";

const h1 = {
  fontSize: "72pt",
  fontWeight: "bold",
  textAlign: "right",
  letterSpacing: "-8px",
  color: "#f0f0f0",
  margin: "-40px 0px",
};

const p = {
  margin: "0px",
  color: "#666",
  fontSize: "16pt",
};

export default function Ohter() {
  return (
    <div>
      <Head>
        <title>Next Other</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={h1}>Other page</h1>
      <p style={p}>Welcome to other page!!</p>
      <hr />
      <div>
        <Link href="/">
          <a>&lt;&lt; Back to Index page</a>
        </Link>
      </div>
    </div>
  );
}

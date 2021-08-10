import Link from "next/Link";
import Nav from "./nav";

export default function Head() {
  return (
    <header>
        <div className="bar">
            <Link href="/">Yum</Link>
        </div>
        <div className="sub-bar">
            <p>Search</p>
        </div>
        <Nav />
    </header>
  );
}

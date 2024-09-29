import Image from "next/image"
import Link from "next/link"
export default function Header(){
    return(
    <div className="header">
<div className="header-container">
    <h1 className="header-heading">Portfolio</h1>
    <ul className="header-buttons">
    <Link href={"/"}>
      <li>Home</li>
      </Link>
      <Link href={"/about-us"}>
        <li>About</li>
        </Link>
        <Link href={"/portfolio"}>
        <li>Portfolio</li>
        </Link>
        <Link href={"/contact"}>
        <li>Contact</li>
        </Link>
    </ul>
</div>
    </div>
    );
} 
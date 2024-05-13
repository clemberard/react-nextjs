import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function Navbar() {
	const router = useRouter();

	return (
    <nav className={`${styles.navbar}`}>
      <a href="/">
        <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
      </a>
			<ul className={`${styles.flex}`} style={{ listStyleType: "none" }}>
				<li className={`${styles.elementLister}`} onClick={() => router.push("/")}>
					Home
				</li>
				<li className={`${styles.elementLister}`} onClick={() => router.push("/about")}>
					About
				</li>
				<li className={`${styles.elementLister}`} onClick={() => router.push("/contact")}>
					Contact
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;

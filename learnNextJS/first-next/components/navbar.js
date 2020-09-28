import Link from "next/link";

const Navbar = () => {
	const styles = {
		display: "flex",
		background: "gold",
		justifyContent: "space-between",
		padding: "1rem"
	}
	return (
		<div style={styles}>
			<Link href="/">
				<button>Home</button>
			</Link>
			<Link href="/about">
				<button>About Page</button>
			</Link>
			<Link href="/contact">
				<button>Contact Page</button>
			</Link>
		</div>
	)
}

export default Navbar;
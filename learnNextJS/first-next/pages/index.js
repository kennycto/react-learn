import React, { Component } from 'react';
import Navbar from "../components/navbar";
import axios from 'axios';
import Link from "next/link"

class Index extends Component {
	constructor(props) {
		super(props);
	}

	static async getInitialProps() {
		const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
		const { data } = res;
		return { posts: data };
	}

	render() {
		const { posts } = this.props;
		return (
			<div>
				<Navbar></Navbar>
				<h1>Our Index Page!!!</h1>
				<ul>
					{posts.map(p => (
						<li key={p.id}>
							<Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
								<a>{p.title}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Index;
import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Button from "../Button/Button";
import headerStyles from "./header.module.css";

export default () => (
	<StaticQuery
		query={graphql`
			query HeadingQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<div className={headerStyles.header}>
				<Link to={`/`}>
					<h1>{data.site.siteMetadata.title}</h1>
				</Link>
				<nav>
					<ul className={headerStyles.nav}>
						<Button>
							<Link to={`/resume/`}>
								<h2>Resume</h2>
							</Link>
						</Button>
						<Button>
							<Link to={`/about/`}>
								<h2>About</h2>
							</Link>
						</Button>
						<Button />
					</ul>
				</nav>
			</div>
		)}
	/>
);

import React from "react";
import headerStyles from "./header.module.css";
import { StaticQuery, graphql, Link } from "gatsby";
import Button from "./Button";

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
					</ul>
				</nav>
			</div>
		)}
	/>
);

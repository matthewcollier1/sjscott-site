import React from "react";
import layoutStyles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/footer";

export default ({ children }) => (
	<div className={layoutStyles.layout}>
		<Header />
		{children}
		<Footer />
	</div>
);

import React from "react";
import Layout from "../components/Layout/Layout";
import Img from "gatsby-image";
import styled from "styled-components";
import indexStyles from "./index.module.css";
import Button from "../components/Button/Button";

const InnerWrap = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(3, 1fr);
`;

const IndexText = styled.div`
	grid-row: 2 / 3;
	grid-column: 2 / 3;
	z-index: 2;
	color: white;
	text-transform: uppercase;
	border: 1px solid;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default (props) => (
	<Layout>
		<InnerWrap>
			<IndexText className={indexStyles.indexText}>
				Stephanie Jane Scott
			</IndexText>

			<Img
				fluid={props.data.imageOne.childImageSharp.fluid}
				className={indexStyles.imgWrap}
			/>
		</InnerWrap>
		<div className={indexStyles.infoWrap}>
			<Img
				fluid={props.data.imageTwo.childImageSharp.fluid}
				className={indexStyles.infoPic}
			/>
			<div className={indexStyles.infoLeft}>
				<div className={indexStyles.picture} />
			</div>
			<div className={indexStyles.infoRight}>
				<div className={indexStyles.infoBoxOne}>Test</div>
				<div className={indexStyles.infoBoxTwo}>Test Two</div>
				<div className={indexStyles.infoTriangles}>
					<Button />
					<Button />
					<Button />
				</div>
			</div>
		</div>
	</Layout>
);

export const pageQuery = graphql`
	query {
		imageOne: file(relativePath: { eq: "testphoto.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		imageTwo: file(relativePath: { eq: "two.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

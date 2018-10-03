import React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import styled from "styled-components";
import indexSyles from "./index.module.css";

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
			<IndexText>Stephanie Jane Scott</IndexText>

			<Img
				fluid={props.data.imageOne.childImageSharp.fluid}
				className={indexSyles.imgWrap}
			/>
		</InnerWrap>
		<Img fluid={props.data.imageTwo.childImageSharp.fluid} />
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

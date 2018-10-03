import React from "react";
import styled from "styled-components";

const Triangle = styled.div`
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 0 100px 100px 100px;
	border-color: transparent transparent #007bff transparent;
`;

export default ({ children }) => <Triangle>{children}</Triangle>;

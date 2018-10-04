import React from "react";

import buttonStyles from "./button.module.css";

export default ({ children }) => (
	<div className={buttonStyles.triangle}>{children}</div>
);

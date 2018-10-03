const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Stephanie Jane Scott`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/img/`
			}
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};

// eslint-disable-next-line no-undef
module.exports = {
	// future: {
	// 	removeDeprecatedGapUtilities: true,
	// 	purgeLayersByDefault: true,
	// },
	mode: 'jit',
	purge: ['./public/**/*.html'],
	// purge: ['./public/index.html'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: 'Inter, sans-serif',
			// sans: 'Roboto-Flex, sans-serif',
		},
		minHeight: {
			0: '0',
			'1/4': '25%',
			'50vh': '50vh',
			'3/4': '75%',
			full: '100%',
			screen: '100vh',
		},
		extend: {},
	},
	variants: {
		extend: {
			display: ['dark'],
		},
	},
	plugins: [],
}

export default {
	branches: ['main'],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'conventionalcommits',
			},
		],
		[
			'@semantic-release/release-notes-generator',
			{
				preset: 'conventionalcommits',
			},
		],
		'@semantic-release/github',
		'@semantic-release/npm',
	],
	// eslint-disable-next-line no-template-curly-in-string
	tagFormat: '${version}',
};

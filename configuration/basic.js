export default {
	branches: ['main'],
	// semantic-release v26 overrides shared plugin options; top-level options still reach every plugin.
	preset: 'conventionalcommits',
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

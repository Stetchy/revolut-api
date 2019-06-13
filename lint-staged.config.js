module.exports = {
  linters: {
    '*.+(ts|tsx)': ['tslint'],
    '*.+(js|jsx|ts|tsx|json|yml|yaml|css|less|scss|md|mdx|graphql)': [
      'prettier --write',
      'git add',
    ],
  },
};
import nextra from 'nextra';

const withNextra = nextra({
  contentDirBasePath: '/',
  defaultShowCopyCode: true,
});

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? '/rustrak' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/rustrak/' : '',
});

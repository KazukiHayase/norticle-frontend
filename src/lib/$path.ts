export const pagesPath = {
  generated: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/generated' as const,
      hash: url?.hash,
    }),
  },
  index_stories: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/index.stories' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;

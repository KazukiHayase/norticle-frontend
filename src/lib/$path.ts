import type { Query as Query0 } from '../pages/posts';

export const pagesPath = {
  $403: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/403' as const,
      hash: url?.hash,
    }),
  },
  $404: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/404' as const,
      hash: url?.hash,
    }),
  },
  dashboard: {
    stocks: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/dashboard/stocks' as const,
        hash: url?.hash,
      }),
    },
    $url: (url?: { hash?: string }) => ({
      pathname: '/dashboard' as const,
      hash: url?.hash,
    }),
  },
  posts: {
    _id: (id: string | number) => ({
      edit: {
        $url: (url?: { hash?: string }) => ({
          pathname: '/posts/[id]/edit' as const,
          query: { id },
          hash: url?.hash,
        }),
      },
      $url: (url?: { hash?: string }) => ({
        pathname: '/posts/[id]' as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
    add: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/posts/add' as const,
        hash: url?.hash,
      }),
    },
    $url: (url: { query: Query0; hash?: string }) => ({
      pathname: '/posts' as const,
      query: url.query,
      hash: url.hash,
    }),
  },
  privacy: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/privacy' as const,
      hash: url?.hash,
    }),
  },
  search: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/search' as const,
      hash: url?.hash,
    }),
  },
  setting: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/setting' as const,
      hash: url?.hash,
    }),
  },
  tags: {
    _name: (name: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/tags/[name]' as const,
        query: { name },
        hash: url?.hash,
      }),
    }),
  },
  terms: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/terms' as const,
      hash: url?.hash,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;

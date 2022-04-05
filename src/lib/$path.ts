export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/404' as const,
      hash: url?.hash,
    }),
  },
  post: {
    _id: (id: string | number) => ({
      edit: {
        $url: (url?: { hash?: string }) => ({
          pathname: '/post/[id]/edit' as const,
          query: { id },
          hash: url?.hash,
        }),
      },
      $url: (url?: { hash?: string }) => ({
        pathname: '/post/[id]' as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
    add: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/post/add' as const,
        hash: url?.hash,
      }),
    },
    edit: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/post/edit' as const,
        hash: url?.hash,
      }),
    },
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash,
  }),
};

export type PagesPath = typeof pagesPath;

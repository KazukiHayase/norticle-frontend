import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { UserSetInput } from '@/graphql/generated/types';
import { useNotifier } from '@/hooks/useNotifier';
import { progress } from '@/services/progress';

import { useUpdateUserMutation } from './generated';

type UpdateUserHookResult = [
  (userId: string, user: Pick<UserSetInput, 'name'>) => void,
  { loading: boolean },
];

export const useUpdateUser = (): UpdateUserHookResult => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { notice } = useNotifier();
  const [updateUserMutation] = useUpdateUserMutation();

  const updateUser: UpdateUserHookResult[0] = useCallback(
    async (userId, user) => {
      setLoading(true);
      progress.start();

      try {
        await updateUserMutation({
          variables: {
            userId,
            userInput: user,
          },
        });

        notice('更新しました', 'success');
      } catch {
        notice('更新に失敗しました', 'error');
      } finally {
        setLoading(false);
        progress.done();
      }
    },
    [updateUserMutation, router, notice],
  );

  return [updateUser, { loading }];
};

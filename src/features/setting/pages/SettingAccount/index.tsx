import { useAuth0 } from '@auth0/auth0-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Paper, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { InputField } from '@/components/uiParts/Form/InputField';
import { useUpdateUser } from '@/features/setting/graphql/mutations/updateUser';
import { User } from '@/graphql/generated/types';
import { pagesPath } from '@/lib/$path';

import { useFetchUserQuery } from './generated';

type SettingAccountForm = Pick<User, 'id' | 'name'>;
const postFormSchema = yup.object({
  name: yup
    .string()
    .required('ユーザー名を入力してください')
    .min(1, '1文字以上で入力してください')
    .max(20, '20文字以下で入力してください'),
});

export const SettingAccount: VFC = () => {
  const router = useRouter();
  const { user } = useAuth0();

  const { register, formState, handleSubmit, reset } =
    useForm<SettingAccountForm>({
      resolver: yupResolver(postFormSchema),
    });

  useFetchUserQuery({
    variables: { userId: user?.sub ?? '' },
    onCompleted: (data) => {
      if (!data.user) {
        router.replace(pagesPath.$404.$url());
        return;
      }
      if (!user || user.sub !== data.user.id) {
        router.replace(pagesPath.$403.$url());
        return;
      }
      reset({ id: data.user.id, name: data.user.name });
    },
  });
  const [updateUser, { loading }] = useUpdateUser();

  const onSubmit: SubmitHandler<SettingAccountForm> = ({ id, ...user }) => {
    updateUser(id, user);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack sx={{ pb: 3, gap: 3 }}>
          <InputField
            label="ユーザー名"
            error={formState.errors['name']}
            registration={register('name')}
            required
          />
        </Stack>
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LoadingButton
          variant="contained"
          loading={loading}
          sx={{ fontWeight: 'bold' }}
          onClick={handleSubmit(onSubmit)}
        >
          更新する
        </LoadingButton>
      </Box>
    </Paper>
  );
};

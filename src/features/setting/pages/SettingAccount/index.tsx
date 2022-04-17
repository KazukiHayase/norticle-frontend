import { useAuth0 } from '@auth0/auth0-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Paper, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { InputField } from '@/components/uiParts/Form/InputField';
import { User } from '@/graphql/generated/types';
import { pagesPath } from '@/lib/$path';

import { useFetchUserQuery } from './generated';

type SettingAccountForm = Pick<User, 'name'>;
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
      reset({ name: data.user.name });
    },
  });

  const onSubmit: SubmitHandler<SettingAccountForm> = ({ name }) => {
    alert(`name: ${name}`);
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
          // loading={submitting}
          sx={{ fontWeight: 'bold' }}
          onClick={handleSubmit(onSubmit)}
        >
          更新する
        </LoadingButton>
      </Box>
    </Paper>
  );
};

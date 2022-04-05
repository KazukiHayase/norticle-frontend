import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Stack } from '@mui/material';
import { VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { InputField } from '@/components/uiParts/Form/InputField';
import { TextareaField } from '@/components/uiParts/Form/TextareaField';
import { Post } from '@/graphql/generated/types';

import { PostFormFragment } from './generated';

export type PostForm = Pick<Post, 'title' | 'description' | 'content'>;
const postFormSchema = yup.object({
  title: yup
    .string()
    .required('タイトルを入力してください')
    .min(1, '1文字以上で入力してください')
    .max(1000, '1000文字以下で入力してください'),
  description: yup.string().max(1000, '1000文字以下で入力してください'),
  content: yup
    .string()
    .required('テンプレートを入力してください')
    .min(1, '1文字以上で入力してください')
    .max(1000, '1000文字以下で入力してください'),
});

type PostFormProps = {
  post?: PostFormFragment;
  submitText: string;
  submitting: boolean;
  onSubmit: SubmitHandler<PostForm>;
};

export const PostForm: VFC<PostFormProps> = ({
  post,
  submitText,
  submitting = false,
  onSubmit,
}) => {
  const { register, formState, handleSubmit } = useForm<PostForm>({
    defaultValues: {
      title: post?.title,
      description: post?.description,
      content: post?.content,
    },
    resolver: yupResolver(postFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ pb: 3, gap: 3 }}>
        <InputField
          label="タイトル"
          error={formState.errors['title']}
          registration={register('title')}
          required
        />
        <TextareaField
          label="説明"
          error={formState.errors['description']}
          registration={register('description')}
          minRows={2}
        />
        <TextareaField
          label="テンプレート"
          error={formState.errors['content']}
          registration={register('content')}
          required
          minRows={10}
        />
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LoadingButton
          variant="contained"
          loadingPosition="start"
          loading={submitting}
          sx={{ fontWeight: 'bold' }}
          onClick={handleSubmit(onSubmit)}
        >
          {submitText}
        </LoadingButton>
      </Box>
    </form>
  );
};

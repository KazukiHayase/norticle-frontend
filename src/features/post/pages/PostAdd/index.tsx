import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { VFC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { InputField } from '@/components/uiParts/Form/InputField';
import { TextareaField } from '@/components/uiParts/Form/TextareaField';
import { Post } from '@/graphql/generated/types';
import { Section } from '@/styles';

type PostAddForm = Pick<Post, 'title' | 'description' | 'content'>;
const postAddFormSchema = yup.object({
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

export const PostAdd: VFC = () => {
  const { register, formState, handleSubmit } = useForm<PostAddForm>({
    resolver: yupResolver(postAddFormSchema),
  });

  const onSubmit: SubmitHandler<PostAddForm> = ({
    title,
    description,
    content,
  }) => {
    alert(`${title}\n${description}\n${content}`);
  };

  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container
        maxWidth="md"
        component={Paper}
        sx={{ py: 3, bgcolor: 'white' }}
      >
        <Typography variant="h1" sx={{ pb: 2 }}>
          テンプレート投稿
        </Typography>
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
            <Button
              variant="contained"
              sx={{ fontWeight: 'bold' }}
              onClick={handleSubmit(onSubmit)}
            >
              投稿する
            </Button>
          </Box>
        </form>
      </Container>
    </Section>
  );
};

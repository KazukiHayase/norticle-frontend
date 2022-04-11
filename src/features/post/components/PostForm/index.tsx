import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Autocomplete,
  Box,
  createFilterOptions,
  Stack,
  TextField,
} from '@mui/material';
import { useMemo, VFC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { FieldWrapper } from '@/components/uiParts/Form/FieldWrapper';
import { InputField } from '@/components/uiParts/Form/InputField';
import { TextareaField } from '@/components/uiParts/Form/TextareaField';
import { Post, Tag } from '@/graphql/generated/types';

import { PostFormFragment, useFetchPostFormOptionsQuery } from './generated';

export type PostForm = Pick<Post, 'title' | 'description' | 'content'> & {
  tags: Pick<Tag, 'name'>[]; // これを{name: string}[]にするところから再開
};
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
  tags: yup.array().max(5, 'タグは5つ以下で指定してください'),
});

const autoCompleteFilter = createFilterOptions<Pick<Tag, 'name'>>();

type PostFormProps = {
  post?: PostFormFragment;
  submitText: string;
  submitting?: boolean;
  onSubmit: SubmitHandler<PostForm>;
};

export const PostForm: VFC<PostFormProps> = ({
  post,
  submitText,
  submitting = false,
  onSubmit,
}) => {
  const { register, control, formState, handleSubmit } = useForm<PostForm>({
    defaultValues: {
      title: post?.title,
      description: post?.description,
      content: post?.content,
      tags: post?.taggings.map((tagging) => tagging.tag) ?? [],
    },
    resolver: yupResolver(postFormSchema),
  });

  const { data } = useFetchPostFormOptionsQuery();

  const tags = useMemo(() => data?.tags ?? [], [data]);

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
        <Controller
          control={control}
          name="tags"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <FieldWrapper label="タグ" error={error}>
              <Autocomplete
                multiple
                size="small"
                filterSelectedOptions
                value={value}
                // See: https://stackoverflow.com/questions/61655199/proper-way-to-use-react-hook-form-controller-with-material-ui-autocomplete
                onChange={(_, data) => onChange(data)}
                options={[...new Set([...tags, ...value])]}
                filterOptions={(options, params) => {
                  const filtered = autoCompleteFilter(options, params);
                  const { inputValue } = params;

                  const isExisting = options.some(
                    (option) => inputValue === option.name,
                  );
                  if (inputValue !== '' && !isExisting) {
                    filtered.push({ name: inputValue });
                  }

                  return filtered;
                }}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!error}
                    placeholder="タグを5つまで選択"
                  />
                )}
                isOptionEqualToValue={(option, value) =>
                  option.name === value.name
                }
              />
            </FieldWrapper>
          )}
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

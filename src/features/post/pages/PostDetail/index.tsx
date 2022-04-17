import { useAuth0 } from '@auth0/auth0-react';
import { faCopy, faHeart, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Paper, Tooltip, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { filter } from 'graphql-anywhere';
import { useRouter } from 'next/router';
import { useEffect, useMemo, VFC } from 'react';

import { NextLinkComposed } from '@/components/uiParts/Link';
import { PostTags } from '@/features/post/components/PostTags';
import {
  PostTagsFragment,
  PostTagsFragmentDoc,
} from '@/features/post/components/PostTags/generated';
import { useUpsertLike } from '@/features/post/graphql/mutations/upsertLike';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { formatDate } from '@/services/date';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import { FetchPostQuery, useFetchPostQuery } from './generated';
import {
  ActionArea,
  Avatar,
  CopyIconButton,
  LikedCount,
  LikeIcon,
  LikeIconButton,
  UserInfo,
} from './style';

const likeLimit = 10;

type PostDetailProps = {
  postId: number;
};

export const PostDetail: VFC<PostDetailProps> = ({ postId }) => {
  const router = useRouter();
  const { user } = useAuth0();
  const { notice } = useNotifier();

  const { data, loading } = useFetchPostQuery({
    variables: { postId },
    onCompleted: (data) => {
      if (!data.post) router.replace(pagesPath.$404.$url());
    },
  });
  const [upsertLike] = useUpsertLike();

  const { post, userLikeId, userLikeCount, totalLikeCount } = useMemo(() => {
    const post = data?.post;
    const userLike = post?.likes.find((like) => like.user_id === user?.sub);
    const userLikeId = userLike?.id;
    const userLikeCount = userLike?.count ?? 0;
    const totalLikeCount =
      post?.likes.reduce((count, acc) => count + acc.count, 0) ?? 0;

    return {
      post,
      userLikeId,
      userLikeCount,
      totalLikeCount,
    };
  }, [data, user]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  const handleClickLikeIcon = () => {
    if (userLikeCount <= likeLimit) return;
    upsertLike(postId, userLikeId);
  };

  const handleClickCopyIcon = () => {
    navigator.clipboard
      .writeText(post?.content ?? '')
      .then(() => notice('コピーしました', 'success'));
  };

  if (loading || !post) return <></>;

  return (
    <Section sx={{ bgcolor: blueGrey[50] }}>
      <Container maxWidth="md">
        {user && user.sub === post.user.id && (
          <Box sx={{ pb: 2 }}>
            <Button
              color="inherit"
              size="small"
              variant="contained"
              startIcon={
                <FontAwesomeIcon icon={faPen} style={{ fontSize: 14 }} />
              }
              component={NextLinkComposed}
              to={pagesPath.post._id(postId).edit.$url()}
            >
              編集
            </Button>
          </Box>
        )}
        <Paper sx={{ p: 3, position: 'relative' }}>
          <Box sx={{ pb: 3 }}>
            <UserInfo>
              <Avatar src={post.user.picture} />
              <Typography fontSize={14} fontWeight="bold">
                {post.user.name}
              </Typography>
            </UserInfo>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography fontSize={14} color={grey[700]}>
                作成日: {formatDate(post.createdAt, 'date')}
              </Typography>
              <Typography fontSize={14} color={grey[700]}>
                更新日: {formatDate(post.updatedAt, 'date')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h1" sx={{ pb: 1 }}>
            {post.title}
          </Typography>
          <PostTags
            post={filter<PostTagsFragment, NonNullable<FetchPostQuery['post']>>(
              PostTagsFragmentDoc,
              post,
            )}
          />
          {post.description && (
            <Typography variant="subtitle1" sx={{ pb: 8 }}>
              {post.description}
            </Typography>
          )}
          <Typography variant="body1">{post.content}</Typography>
          <ActionArea>
            <Box>
              <Tooltip title="いいね" placement="top" arrow>
                <LikeIconButton
                  onClick={handleClickLikeIcon}
                  color={userLikeCount > 0 ? 'primary' : undefined}
                >
                  <LikeIcon>
                    <FontAwesomeIcon icon={faHeart} fontSize={24} />
                  </LikeIcon>
                  <LikedCount>
                    {userLikeCount}/{likeLimit}
                  </LikedCount>
                </LikeIconButton>
              </Tooltip>
              <Typography
                color={userLikeCount > 0 ? 'primary' : 'action.active'}
                sx={{ textAlign: 'center' }}
              >
                {totalLikeCount}
              </Typography>
            </Box>
            <Tooltip title="テンプレートをコピー" placement="top" arrow>
              <CopyIconButton onClick={handleClickCopyIcon}>
                <FontAwesomeIcon icon={faCopy} fontSize={26} />
              </CopyIconButton>
            </Tooltip>
          </ActionArea>
        </Paper>
      </Container>
    </Section>
  );
};

import { useAuth0 } from '@auth0/auth0-react';
import {
  faBookmark,
  faCopy,
  faHeart,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
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
import { useStockPost } from '@/features/post/graphql/mutations/stockPost';
import { useToggleLike } from '@/features/post/graphql/mutations/toggleLike';
import { useUnStockPost } from '@/features/post/graphql/mutations/unStockPost';
import { useNotifier } from '@/hooks/useNotifier';
import { pagesPath } from '@/lib/$path';
import { formatDate } from '@/services/date';
import { progress } from '@/services/progress';
import { Section } from '@/styles';

import {
  FetchPostQuery,
  useFetchPostAccessoriesQuery,
  useFetchPostQuery,
} from './generated';
import {
  ActionArea,
  ActionAreaInner,
  Avatar,
  CopyIconButton,
  LikeIconButton,
  StockIconButton,
  TotalLikedCount,
  UserInfo,
} from './style';

type PostDetailProps = {
  postId: number;
};

export const PostDetail: VFC<PostDetailProps> = ({ postId }) => {
  const router = useRouter();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const { notice } = useNotifier();

  const { data: postData, loading: postLoading } = useFetchPostQuery({
    variables: { postId },
  });
  const { data: postAccessoriesData, loading: postAccessoriesLoading } =
    useFetchPostAccessoriesQuery({
      skip: !isAuthenticated,
      variables: { postId, userId: user?.sub ?? '' },
    });

  const [toggleLike] = useToggleLike();
  const [stockPost] = useStockPost();
  const [unStockPost] = useUnStockPost();

  const loading = useMemo(
    () => postLoading || postAccessoriesLoading,
    [postLoading, postAccessoriesLoading],
  );

  const { post, totalLikeCount } = useMemo(() => {
    const post = postData?.post;
    const totalLikeCount = post?.likes_aggregate.aggregate?.count ?? 0;

    return {
      post,
      totalLikeCount,
    };
  }, [postData]);

  const { like, stock } = useMemo(() => {
    const post = postAccessoriesData?.post;
    const like = post?.likes?.[0] ?? undefined;
    const stock = post?.stocks?.[0] ?? undefined;

    return { like, stock };
  }, [postAccessoriesData]);

  useEffect(() => {
    loading ? progress.start() : progress.done();
  }, [loading]);

  const handleClickLikeIcon = () => {
    if (!isAuthenticated)
      return loginWithRedirect({ appState: { returnTo: router.asPath } });

    toggleLike(postId, like?.id);
  };

  const handleClickCopyIcon = () => {
    navigator.clipboard
      .writeText(post?.content ?? '')
      .then(() => notice('コピーしました', 'success'));
  };

  const handleClickStockIcon = () => {
    if (!isAuthenticated)
      return loginWithRedirect({ appState: { returnTo: router.asPath } });

    stock ? unStockPost(postId, stock.id) : stockPost(postId);
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
              to={pagesPath.posts._id(postId).edit.$url()}
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
            <ActionAreaInner>
              <Box>
                <Tooltip title="いいね" placement="top" arrow>
                  <LikeIconButton
                    onClick={handleClickLikeIcon}
                    isActive={!!like}
                  >
                    <FontAwesomeIcon icon={faHeart} fontSize={20} />
                  </LikeIconButton>
                </Tooltip>
                <TotalLikedCount isActive={!!like}>
                  {totalLikeCount}
                </TotalLikedCount>
              </Box>
              <Tooltip title="ストック" placement="top" arrow>
                <StockIconButton
                  onClick={handleClickStockIcon}
                  isActive={!!stock}
                >
                  <FontAwesomeIcon icon={faBookmark} fontSize={20} />
                </StockIconButton>
              </Tooltip>
              <Tooltip title="テンプレートをコピー" placement="top" arrow>
                <CopyIconButton onClick={handleClickCopyIcon}>
                  <FontAwesomeIcon icon={faCopy} fontSize={20} />
                </CopyIconButton>
              </Tooltip>
            </ActionAreaInner>
          </ActionArea>
        </Paper>
      </Container>
    </Section>
  );
};

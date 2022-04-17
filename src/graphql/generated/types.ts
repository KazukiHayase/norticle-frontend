export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: Date;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** 投稿へのいいね */
export type Like = {
  __typename?: 'like';
  count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** aggregated selection of "likes" */
export type LikeAggregate = {
  __typename?: 'like_aggregate';
  aggregate: Maybe<LikeAggregateFields>;
  nodes: Array<Like>;
};

/** aggregate fields of "likes" */
export type LikeAggregateFields = {
  __typename?: 'like_aggregate_fields';
  avg: Maybe<LikeAvgFields>;
  count: Scalars['Int'];
  max: Maybe<LikeMaxFields>;
  min: Maybe<LikeMinFields>;
  stddev: Maybe<LikeStddevFields>;
  stddev_pop: Maybe<LikeStddevPopFields>;
  stddev_samp: Maybe<LikeStddevSampFields>;
  sum: Maybe<LikeSumFields>;
  var_pop: Maybe<LikeVarPopFields>;
  var_samp: Maybe<LikeVarSampFields>;
  variance: Maybe<LikeVarianceFields>;
};

/** aggregate fields of "likes" */
export type LikeAggregateFieldsCountArgs = {
  columns: Maybe<Array<LikeSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type LikeAggregateOrderBy = {
  avg?: Maybe<LikeAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<LikeMaxOrderBy>;
  min?: Maybe<LikeMinOrderBy>;
  stddev?: Maybe<LikeStddevOrderBy>;
  stddev_pop?: Maybe<LikeStddevPopOrderBy>;
  stddev_samp?: Maybe<LikeStddevSampOrderBy>;
  sum?: Maybe<LikeSumOrderBy>;
  var_pop?: Maybe<LikeVarPopOrderBy>;
  var_samp?: Maybe<LikeVarSampOrderBy>;
  variance?: Maybe<LikeVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "likes" */
export type LikeArrRelInsertInput = {
  data: Array<LikeInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<LikeOnConflict>;
};

/** aggregate avg on columns */
export type LikeAvgFields = {
  __typename?: 'like_avg_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "likes" */
export type LikeAvgOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type LikeBoolExp = {
  _and?: Maybe<Array<LikeBoolExp>>;
  _not?: Maybe<LikeBoolExp>;
  _or?: Maybe<Array<LikeBoolExp>>;
  count?: Maybe<IntComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UserBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "likes" */
export const LikeConstraint = {
  /** unique or primary key constraint */
  LikesPkey: 'likes_pkey',
  /** unique or primary key constraint */
  LikesUserIdPostIdKey: 'likes_user_id_post_id_key',
} as const;

export type LikeConstraint = typeof LikeConstraint[keyof typeof LikeConstraint];
/** input type for incrementing numeric columns in table "likes" */
export type LikeIncInput = {
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "likes" */
export type LikeInsertInput = {
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UserObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type LikeMaxFields = {
  __typename?: 'like_max_fields';
  count: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  post_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "likes" */
export type LikeMaxOrderBy = {
  count?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LikeMinFields = {
  __typename?: 'like_min_fields';
  count: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  post_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['timestamptz']>;
  user_id: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "likes" */
export type LikeMinOrderBy = {
  count?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "likes" */
export type LikeMutationResponse = {
  __typename?: 'like_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Like>;
};

/** on_conflict condition type for table "likes" */
export type LikeOnConflict = {
  constraint: LikeConstraint;
  update_columns: Array<LikeUpdateColumn>;
  where?: Maybe<LikeBoolExp>;
};

/** Ordering options when selecting data from "likes". */
export type LikeOrderBy = {
  count?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post?: Maybe<PostOrderBy>;
  post_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: like */
export type LikePkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "likes" */
export const LikeSelectColumn = {
  /** column name */
  Count: 'count',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  PostId: 'post_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
} as const;

export type LikeSelectColumn =
  typeof LikeSelectColumn[keyof typeof LikeSelectColumn];
/** input type for updating data in table "likes" */
export type LikeSetInput = {
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type LikeStddevFields = {
  __typename?: 'like_stddev_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "likes" */
export type LikeStddevOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type LikeStddevPopFields = {
  __typename?: 'like_stddev_pop_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "likes" */
export type LikeStddevPopOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type LikeStddevSampFields = {
  __typename?: 'like_stddev_samp_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "likes" */
export type LikeStddevSampOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type LikeSumFields = {
  __typename?: 'like_sum_fields';
  count: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  post_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "likes" */
export type LikeSumOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** update columns of table "likes" */
export const LikeUpdateColumn = {
  /** column name */
  Count: 'count',
  /** column name */
  CreatedAt: 'created_at',
  /** column name */
  Id: 'id',
  /** column name */
  PostId: 'post_id',
  /** column name */
  UpdatedAt: 'updated_at',
  /** column name */
  UserId: 'user_id',
} as const;

export type LikeUpdateColumn =
  typeof LikeUpdateColumn[keyof typeof LikeUpdateColumn];
/** aggregate var_pop on columns */
export type LikeVarPopFields = {
  __typename?: 'like_var_pop_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "likes" */
export type LikeVarPopOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type LikeVarSampFields = {
  __typename?: 'like_var_samp_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "likes" */
export type LikeVarSampOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type LikeVarianceFields = {
  __typename?: 'like_variance_fields';
  count: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "likes" */
export type LikeVarianceOrderBy = {
  count?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** insert a single row into the table: "likes" */
  addLike: Maybe<Like>;
  /** insert data into the table: "likes" */
  addLikes: Maybe<LikeMutationResponse>;
  /** insert a single row into the table: "posts" */
  addPost: Maybe<Post>;
  /** insert data into the table: "posts" */
  addPosts: Maybe<PostMutationResponse>;
  /** insert a single row into the table: "tags" */
  addTag: Maybe<Tag>;
  /** insert a single row into the table: "taggings" */
  addTagging: Maybe<Tagging>;
  /** insert data into the table: "taggings" */
  addTaggings: Maybe<TaggingMutationResponse>;
  /** insert data into the table: "tags" */
  addTags: Maybe<TagMutationResponse>;
  /** insert a single row into the table: "users" */
  addUser: Maybe<User>;
  /** insert data into the table: "users" */
  addUsers: Maybe<UserMutationResponse>;
  /** delete single row from the table: "likes" */
  deleteLike: Maybe<Like>;
  /** delete data from the table: "likes" */
  deleteLikes: Maybe<LikeMutationResponse>;
  /** delete single row from the table: "posts" */
  deletePost: Maybe<Post>;
  /** delete data from the table: "posts" */
  deletePosts: Maybe<PostMutationResponse>;
  /** delete single row from the table: "tags" */
  deleteTag: Maybe<Tag>;
  /** delete single row from the table: "taggings" */
  deleteTagging: Maybe<Tagging>;
  /** delete data from the table: "taggings" */
  deleteTaggings: Maybe<TaggingMutationResponse>;
  /** delete data from the table: "tags" */
  deleteTags: Maybe<TagMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUser: Maybe<User>;
  /** delete data from the table: "users" */
  deleteUsers: Maybe<UserMutationResponse>;
  /** update single row of the table: "likes" */
  updateLike: Maybe<Like>;
  /** update data of the table: "likes" */
  updateLikes: Maybe<LikeMutationResponse>;
  /** update single row of the table: "posts" */
  updatePost: Maybe<Post>;
  /** update data of the table: "posts" */
  updatePosts: Maybe<PostMutationResponse>;
  /** update single row of the table: "tags" */
  updateTag: Maybe<Tag>;
  /** update single row of the table: "taggings" */
  updateTagging: Maybe<Tagging>;
  /** update data of the table: "taggings" */
  updateTaggings: Maybe<TaggingMutationResponse>;
  /** update data of the table: "tags" */
  updateTags: Maybe<TagMutationResponse>;
  /** update single row of the table: "users" */
  updateUser: Maybe<User>;
  /** update data of the table: "users" */
  updateUsers: Maybe<UserMutationResponse>;
};

/** mutation root */
export type MutationRootAddLikeArgs = {
  object: LikeInsertInput;
  on_conflict: Maybe<LikeOnConflict>;
};

/** mutation root */
export type MutationRootAddLikesArgs = {
  objects: Array<LikeInsertInput>;
  on_conflict: Maybe<LikeOnConflict>;
};

/** mutation root */
export type MutationRootAddPostArgs = {
  object: PostInsertInput;
  on_conflict: Maybe<PostOnConflict>;
};

/** mutation root */
export type MutationRootAddPostsArgs = {
  objects: Array<PostInsertInput>;
  on_conflict: Maybe<PostOnConflict>;
};

/** mutation root */
export type MutationRootAddTagArgs = {
  object: TagInsertInput;
  on_conflict: Maybe<TagOnConflict>;
};

/** mutation root */
export type MutationRootAddTaggingArgs = {
  object: TaggingInsertInput;
  on_conflict: Maybe<TaggingOnConflict>;
};

/** mutation root */
export type MutationRootAddTaggingsArgs = {
  objects: Array<TaggingInsertInput>;
  on_conflict: Maybe<TaggingOnConflict>;
};

/** mutation root */
export type MutationRootAddTagsArgs = {
  objects: Array<TagInsertInput>;
  on_conflict: Maybe<TagOnConflict>;
};

/** mutation root */
export type MutationRootAddUserArgs = {
  object: UserInsertInput;
  on_conflict: Maybe<UserOnConflict>;
};

/** mutation root */
export type MutationRootAddUsersArgs = {
  objects: Array<UserInsertInput>;
  on_conflict: Maybe<UserOnConflict>;
};

/** mutation root */
export type MutationRootDeleteLikeArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteLikesArgs = {
  where: LikeBoolExp;
};

/** mutation root */
export type MutationRootDeletePostArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostBoolExp;
};

/** mutation root */
export type MutationRootDeleteTagArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteTaggingArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteTaggingsArgs = {
  where: TaggingBoolExp;
};

/** mutation root */
export type MutationRootDeleteTagsArgs = {
  where: TagBoolExp;
};

/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UserBoolExp;
};

/** mutation root */
export type MutationRootUpdateLikeArgs = {
  _inc: Maybe<LikeIncInput>;
  _set: Maybe<LikeSetInput>;
  pk_columns: LikePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateLikesArgs = {
  _inc: Maybe<LikeIncInput>;
  _set: Maybe<LikeSetInput>;
  where: LikeBoolExp;
};

/** mutation root */
export type MutationRootUpdatePostArgs = {
  _inc: Maybe<PostIncInput>;
  _set: Maybe<PostSetInput>;
  pk_columns: PostPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _inc: Maybe<PostIncInput>;
  _set: Maybe<PostSetInput>;
  where: PostBoolExp;
};

/** mutation root */
export type MutationRootUpdateTagArgs = {
  _inc: Maybe<TagIncInput>;
  _set: Maybe<TagSetInput>;
  pk_columns: TagPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTaggingArgs = {
  _inc: Maybe<TaggingIncInput>;
  _set: Maybe<TaggingSetInput>;
  pk_columns: TaggingPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTaggingsArgs = {
  _inc: Maybe<TaggingIncInput>;
  _set: Maybe<TaggingSetInput>;
  where: TaggingBoolExp;
};

/** mutation root */
export type MutationRootUpdateTagsArgs = {
  _inc: Maybe<TagIncInput>;
  _set: Maybe<TagSetInput>;
  where: TagBoolExp;
};

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set: Maybe<UserSetInput>;
  where: UserBoolExp;
};

/** column ordering options */
export const OrderBy = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last',
} as const;

export type OrderBy = typeof OrderBy[keyof typeof OrderBy];
/** テンプレートの投稿 */
export type Post = {
  __typename?: 'post';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  likes: Array<Like>;
  /** An aggregate relationship */
  likes_aggregate: LikeAggregate;
  /** fetch data from the table: "taggings" */
  taggings: Array<Tagging>;
  /** An aggregate relationship */
  taggings_aggregate: TaggingAggregate;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** テンプレートの投稿 */
export type PostLikesArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

/** テンプレートの投稿 */
export type PostLikesAggregateArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

/** テンプレートの投稿 */
export type PostTaggingsArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

/** テンプレートの投稿 */
export type PostTaggingsAggregateArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

/** aggregated selection of "posts" */
export type PostAggregate = {
  __typename?: 'post_aggregate';
  aggregate: Maybe<PostAggregateFields>;
  nodes: Array<Post>;
};

/** aggregate fields of "posts" */
export type PostAggregateFields = {
  __typename?: 'post_aggregate_fields';
  avg: Maybe<PostAvgFields>;
  count: Scalars['Int'];
  max: Maybe<PostMaxFields>;
  min: Maybe<PostMinFields>;
  stddev: Maybe<PostStddevFields>;
  stddev_pop: Maybe<PostStddevPopFields>;
  stddev_samp: Maybe<PostStddevSampFields>;
  sum: Maybe<PostSumFields>;
  var_pop: Maybe<PostVarPopFields>;
  var_samp: Maybe<PostVarSampFields>;
  variance: Maybe<PostVarianceFields>;
};

/** aggregate fields of "posts" */
export type PostAggregateFieldsCountArgs = {
  columns: Maybe<Array<PostSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type PostAggregateOrderBy = {
  avg?: Maybe<PostAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostMaxOrderBy>;
  min?: Maybe<PostMinOrderBy>;
  stddev?: Maybe<PostStddevOrderBy>;
  stddev_pop?: Maybe<PostStddevPopOrderBy>;
  stddev_samp?: Maybe<PostStddevSampOrderBy>;
  sum?: Maybe<PostSumOrderBy>;
  var_pop?: Maybe<PostVarPopOrderBy>;
  var_samp?: Maybe<PostVarSampOrderBy>;
  variance?: Maybe<PostVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostArrRelInsertInput = {
  data: Array<PostInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<PostOnConflict>;
};

/** aggregate avg on columns */
export type PostAvgFields = {
  __typename?: 'post_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type PostAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostBoolExp = {
  _and?: Maybe<Array<PostBoolExp>>;
  _not?: Maybe<PostBoolExp>;
  _or?: Maybe<Array<PostBoolExp>>;
  content?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  likes?: Maybe<LikeBoolExp>;
  taggings?: Maybe<TaggingBoolExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UserBoolExp>;
  userId?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export const PostConstraint = {
  /** unique or primary key constraint */
  PostsPkey: 'posts_pkey',
} as const;

export type PostConstraint = typeof PostConstraint[keyof typeof PostConstraint];
/** input type for incrementing numeric columns in table "posts" */
export type PostIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type PostInsertInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<LikeArrRelInsertInput>;
  taggings?: Maybe<TaggingArrRelInsertInput>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UserObjRelInsertInput>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostMaxFields = {
  __typename?: 'post_max_fields';
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "posts" */
export type PostMaxOrderBy = {
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostMinFields = {
  __typename?: 'post_min_fields';
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "posts" */
export type PostMinOrderBy = {
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostMutationResponse = {
  __typename?: 'post_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "posts" */
export type PostObjRelInsertInput = {
  data: PostInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<PostOnConflict>;
};

/** on_conflict condition type for table "posts" */
export type PostOnConflict = {
  constraint: PostConstraint;
  update_columns: Array<PostUpdateColumn>;
  where?: Maybe<PostBoolExp>;
};

/** Ordering options when selecting data from "posts". */
export type PostOrderBy = {
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<LikeAggregateOrderBy>;
  taggings_aggregate?: Maybe<TaggingAggregateOrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  userId?: Maybe<OrderBy>;
};

/** primary key columns input for table: post */
export type PostPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export const PostSelectColumn = {
  /** column name */
  Content: 'content',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UserId: 'userId',
} as const;

export type PostSelectColumn =
  typeof PostSelectColumn[keyof typeof PostSelectColumn];
/** input type for updating data in table "posts" */
export type PostSetInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PostStddevFields = {
  __typename?: 'post_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type PostStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostStddevPopFields = {
  __typename?: 'post_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type PostStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostStddevSampFields = {
  __typename?: 'post_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type PostStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostSumFields = {
  __typename?: 'post_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type PostSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "posts" */
export const PostUpdateColumn = {
  /** column name */
  Content: 'content',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Title: 'title',
  /** column name */
  UpdatedAt: 'updatedAt',
  /** column name */
  UserId: 'userId',
} as const;

export type PostUpdateColumn =
  typeof PostUpdateColumn[keyof typeof PostUpdateColumn];
/** aggregate var_pop on columns */
export type PostVarPopFields = {
  __typename?: 'post_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type PostVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostVarSampFields = {
  __typename?: 'post_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type PostVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostVarianceFields = {
  __typename?: 'post_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type PostVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "likes" using primary key columns */
  like: Maybe<Like>;
  /** An array relationship */
  likes: Array<Like>;
  /** fetch aggregated fields from the table: "likes" */
  likesAggregate: LikeAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  post: Maybe<Post>;
  /** An array relationship */
  posts: Array<Post>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostAggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tag: Maybe<Tag>;
  /** fetch data from the table: "taggings" using primary key columns */
  tagging: Maybe<Tagging>;
  /** fetch data from the table: "taggings" */
  taggings: Array<Tagging>;
  /** fetch aggregated fields from the table: "taggings" */
  taggingsAggregate: TaggingAggregate;
  /** fetch data from the table: "tags" */
  tags: Array<Tag>;
  /** fetch aggregated fields from the table: "tags" */
  tagsAggregate: TagAggregate;
  /** fetch data from the table: "users" using primary key columns */
  user: Maybe<User>;
  /** fetch data from the table: "users" */
  users: Array<User>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UserAggregate;
};

export type QueryRootLikeArgs = {
  id: Scalars['Int'];
};

export type QueryRootLikesArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

export type QueryRootLikesAggregateArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

export type QueryRootPostArgs = {
  id: Scalars['Int'];
};

export type QueryRootPostsArgs = {
  distinct_on: Maybe<Array<PostSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostOrderBy>>;
  where: Maybe<PostBoolExp>;
};

export type QueryRootPostsAggregateArgs = {
  distinct_on: Maybe<Array<PostSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostOrderBy>>;
  where: Maybe<PostBoolExp>;
};

export type QueryRootTagArgs = {
  id: Scalars['Int'];
};

export type QueryRootTaggingArgs = {
  id: Scalars['Int'];
};

export type QueryRootTaggingsArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

export type QueryRootTaggingsAggregateArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

export type QueryRootTagsArgs = {
  distinct_on: Maybe<Array<TagSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TagOrderBy>>;
  where: Maybe<TagBoolExp>;
};

export type QueryRootTagsAggregateArgs = {
  distinct_on: Maybe<Array<TagSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TagOrderBy>>;
  where: Maybe<TagBoolExp>;
};

export type QueryRootUserArgs = {
  id: Scalars['String'];
};

export type QueryRootUsersArgs = {
  distinct_on: Maybe<Array<UserSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UserOrderBy>>;
  where: Maybe<UserBoolExp>;
};

export type QueryRootUsersAggregateArgs = {
  distinct_on: Maybe<Array<UserSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UserOrderBy>>;
  where: Maybe<UserBoolExp>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "likes" using primary key columns */
  like: Maybe<Like>;
  /** An array relationship */
  likes: Array<Like>;
  /** fetch aggregated fields from the table: "likes" */
  likesAggregate: LikeAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  post: Maybe<Post>;
  /** An array relationship */
  posts: Array<Post>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostAggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tag: Maybe<Tag>;
  /** fetch data from the table: "taggings" using primary key columns */
  tagging: Maybe<Tagging>;
  /** fetch data from the table: "taggings" */
  taggings: Array<Tagging>;
  /** fetch aggregated fields from the table: "taggings" */
  taggingsAggregate: TaggingAggregate;
  /** fetch data from the table: "tags" */
  tags: Array<Tag>;
  /** fetch aggregated fields from the table: "tags" */
  tagsAggregate: TagAggregate;
  /** fetch data from the table: "users" using primary key columns */
  user: Maybe<User>;
  /** fetch data from the table: "users" */
  users: Array<User>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UserAggregate;
};

export type SubscriptionRootLikeArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRootLikesArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

export type SubscriptionRootLikesAggregateArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

export type SubscriptionRootPostArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRootPostsArgs = {
  distinct_on: Maybe<Array<PostSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostOrderBy>>;
  where: Maybe<PostBoolExp>;
};

export type SubscriptionRootPostsAggregateArgs = {
  distinct_on: Maybe<Array<PostSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostOrderBy>>;
  where: Maybe<PostBoolExp>;
};

export type SubscriptionRootTagArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRootTaggingArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRootTaggingsArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

export type SubscriptionRootTaggingsAggregateArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

export type SubscriptionRootTagsArgs = {
  distinct_on: Maybe<Array<TagSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TagOrderBy>>;
  where: Maybe<TagBoolExp>;
};

export type SubscriptionRootTagsAggregateArgs = {
  distinct_on: Maybe<Array<TagSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TagOrderBy>>;
  where: Maybe<TagBoolExp>;
};

export type SubscriptionRootUserArgs = {
  id: Scalars['String'];
};

export type SubscriptionRootUsersArgs = {
  distinct_on: Maybe<Array<UserSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UserOrderBy>>;
  where: Maybe<UserBoolExp>;
};

export type SubscriptionRootUsersAggregateArgs = {
  distinct_on: Maybe<Array<UserSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UserOrderBy>>;
  where: Maybe<UserBoolExp>;
};

/** タグ */
export type Tag = {
  __typename?: 'tag';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** fetch data from the table: "taggings" */
  taggings: Array<Tagging>;
  /** An aggregate relationship */
  taggings_aggregate: TaggingAggregate;
  updatedAt: Scalars['timestamptz'];
};

/** タグ */
export type TagTaggingsArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

/** タグ */
export type TagTaggingsAggregateArgs = {
  distinct_on: Maybe<Array<TaggingSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TaggingOrderBy>>;
  where: Maybe<TaggingBoolExp>;
};

/** aggregated selection of "tags" */
export type TagAggregate = {
  __typename?: 'tag_aggregate';
  aggregate: Maybe<TagAggregateFields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "tags" */
export type TagAggregateFields = {
  __typename?: 'tag_aggregate_fields';
  avg: Maybe<TagAvgFields>;
  count: Scalars['Int'];
  max: Maybe<TagMaxFields>;
  min: Maybe<TagMinFields>;
  stddev: Maybe<TagStddevFields>;
  stddev_pop: Maybe<TagStddevPopFields>;
  stddev_samp: Maybe<TagStddevSampFields>;
  sum: Maybe<TagSumFields>;
  var_pop: Maybe<TagVarPopFields>;
  var_samp: Maybe<TagVarSampFields>;
  variance: Maybe<TagVarianceFields>;
};

/** aggregate fields of "tags" */
export type TagAggregateFieldsCountArgs = {
  columns: Maybe<Array<TagSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type TagAvgFields = {
  __typename?: 'tag_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type TagBoolExp = {
  _and?: Maybe<Array<TagBoolExp>>;
  _not?: Maybe<TagBoolExp>;
  _or?: Maybe<Array<TagBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  taggings?: Maybe<TaggingBoolExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "tags" */
export const TagConstraint = {
  /** unique or primary key constraint */
  TagsNameKey: 'tags_name_key',
  /** unique or primary key constraint */
  TagsPkey: 'tags_pkey',
} as const;

export type TagConstraint = typeof TagConstraint[keyof typeof TagConstraint];
/** input type for incrementing numeric columns in table "tags" */
export type TagIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tags" */
export type TagInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  taggings?: Maybe<TaggingArrRelInsertInput>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TagMaxFields = {
  __typename?: 'tag_max_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type TagMinFields = {
  __typename?: 'tag_min_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tags" */
export type TagMutationResponse = {
  __typename?: 'tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag>;
};

/** input type for inserting object relation for remote table "tags" */
export type TagObjRelInsertInput = {
  data: TagInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<TagOnConflict>;
};

/** on_conflict condition type for table "tags" */
export type TagOnConflict = {
  constraint: TagConstraint;
  update_columns: Array<TagUpdateColumn>;
  where?: Maybe<TagBoolExp>;
};

/** Ordering options when selecting data from "tags". */
export type TagOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  taggings_aggregate?: Maybe<TaggingAggregateOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: tag */
export type TagPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "tags" */
export const TagSelectColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const;

export type TagSelectColumn =
  typeof TagSelectColumn[keyof typeof TagSelectColumn];
/** input type for updating data in table "tags" */
export type TagSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TagStddevFields = {
  __typename?: 'tag_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type TagStddevPopFields = {
  __typename?: 'tag_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type TagStddevSampFields = {
  __typename?: 'tag_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type TagSumFields = {
  __typename?: 'tag_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "tags" */
export const TagUpdateColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const;

export type TagUpdateColumn =
  typeof TagUpdateColumn[keyof typeof TagUpdateColumn];
/** aggregate var_pop on columns */
export type TagVarPopFields = {
  __typename?: 'tag_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type TagVarSampFields = {
  __typename?: 'tag_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type TagVarianceFields = {
  __typename?: 'tag_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** タグ付け */
export type Tagging = {
  __typename?: 'tagging';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  post: Post;
  post_id: Scalars['Int'];
  /** An object relationship */
  tag: Tag;
  tag_id: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "taggings" */
export type TaggingAggregate = {
  __typename?: 'tagging_aggregate';
  aggregate: Maybe<TaggingAggregateFields>;
  nodes: Array<Tagging>;
};

/** aggregate fields of "taggings" */
export type TaggingAggregateFields = {
  __typename?: 'tagging_aggregate_fields';
  avg: Maybe<TaggingAvgFields>;
  count: Scalars['Int'];
  max: Maybe<TaggingMaxFields>;
  min: Maybe<TaggingMinFields>;
  stddev: Maybe<TaggingStddevFields>;
  stddev_pop: Maybe<TaggingStddevPopFields>;
  stddev_samp: Maybe<TaggingStddevSampFields>;
  sum: Maybe<TaggingSumFields>;
  var_pop: Maybe<TaggingVarPopFields>;
  var_samp: Maybe<TaggingVarSampFields>;
  variance: Maybe<TaggingVarianceFields>;
};

/** aggregate fields of "taggings" */
export type TaggingAggregateFieldsCountArgs = {
  columns: Maybe<Array<TaggingSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "taggings" */
export type TaggingAggregateOrderBy = {
  avg?: Maybe<TaggingAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TaggingMaxOrderBy>;
  min?: Maybe<TaggingMinOrderBy>;
  stddev?: Maybe<TaggingStddevOrderBy>;
  stddev_pop?: Maybe<TaggingStddevPopOrderBy>;
  stddev_samp?: Maybe<TaggingStddevSampOrderBy>;
  sum?: Maybe<TaggingSumOrderBy>;
  var_pop?: Maybe<TaggingVarPopOrderBy>;
  var_samp?: Maybe<TaggingVarSampOrderBy>;
  variance?: Maybe<TaggingVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "taggings" */
export type TaggingArrRelInsertInput = {
  data: Array<TaggingInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<TaggingOnConflict>;
};

/** aggregate avg on columns */
export type TaggingAvgFields = {
  __typename?: 'tagging_avg_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "taggings" */
export type TaggingAvgOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "taggings". All fields are combined with a logical 'AND'. */
export type TaggingBoolExp = {
  _and?: Maybe<Array<TaggingBoolExp>>;
  _not?: Maybe<TaggingBoolExp>;
  _or?: Maybe<Array<TaggingBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  post?: Maybe<PostBoolExp>;
  post_id?: Maybe<IntComparisonExp>;
  tag?: Maybe<TagBoolExp>;
  tag_id?: Maybe<IntComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "taggings" */
export const TaggingConstraint = {
  /** unique or primary key constraint */
  TaggingsPkey: 'taggings_pkey',
  /** unique or primary key constraint */
  TaggingsPostIdTagIdKey: 'taggings_post_id_tag_id_key',
} as const;

export type TaggingConstraint =
  typeof TaggingConstraint[keyof typeof TaggingConstraint];
/** input type for incrementing numeric columns in table "taggings" */
export type TaggingIncInput = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "taggings" */
export type TaggingInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostObjRelInsertInput>;
  post_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<TagObjRelInsertInput>;
  tag_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type TaggingMaxFields = {
  __typename?: 'tagging_max_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  post_id: Maybe<Scalars['Int']>;
  tag_id: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "taggings" */
export type TaggingMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TaggingMinFields = {
  __typename?: 'tagging_min_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['Int']>;
  post_id: Maybe<Scalars['Int']>;
  tag_id: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "taggings" */
export type TaggingMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "taggings" */
export type TaggingMutationResponse = {
  __typename?: 'tagging_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tagging>;
};

/** on_conflict condition type for table "taggings" */
export type TaggingOnConflict = {
  constraint: TaggingConstraint;
  update_columns: Array<TaggingUpdateColumn>;
  where?: Maybe<TaggingBoolExp>;
};

/** Ordering options when selecting data from "taggings". */
export type TaggingOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  post?: Maybe<PostOrderBy>;
  post_id?: Maybe<OrderBy>;
  tag?: Maybe<TagOrderBy>;
  tag_id?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: tagging */
export type TaggingPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "taggings" */
export const TaggingSelectColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  PostId: 'post_id',
  /** column name */
  TagId: 'tag_id',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const;

export type TaggingSelectColumn =
  typeof TaggingSelectColumn[keyof typeof TaggingSelectColumn];
/** input type for updating data in table "taggings" */
export type TaggingSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type TaggingStddevFields = {
  __typename?: 'tagging_stddev_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "taggings" */
export type TaggingStddevOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TaggingStddevPopFields = {
  __typename?: 'tagging_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "taggings" */
export type TaggingStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TaggingStddevSampFields = {
  __typename?: 'tagging_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "taggings" */
export type TaggingStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TaggingSumFields = {
  __typename?: 'tagging_sum_fields';
  id: Maybe<Scalars['Int']>;
  post_id: Maybe<Scalars['Int']>;
  tag_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "taggings" */
export type TaggingSumOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** update columns of table "taggings" */
export const TaggingUpdateColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Id: 'id',
  /** column name */
  PostId: 'post_id',
  /** column name */
  TagId: 'tag_id',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const;

export type TaggingUpdateColumn =
  typeof TaggingUpdateColumn[keyof typeof TaggingUpdateColumn];
/** aggregate var_pop on columns */
export type TaggingVarPopFields = {
  __typename?: 'tagging_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "taggings" */
export type TaggingVarPopOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TaggingVarSampFields = {
  __typename?: 'tagging_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "taggings" */
export type TaggingVarSampOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TaggingVarianceFields = {
  __typename?: 'tagging_variance_fields';
  id: Maybe<Scalars['Float']>;
  post_id: Maybe<Scalars['Float']>;
  tag_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "taggings" */
export type TaggingVarianceOrderBy = {
  id?: Maybe<OrderBy>;
  post_id?: Maybe<OrderBy>;
  tag_id?: Maybe<OrderBy>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** ユーザー */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  /** An array relationship */
  likes: Array<Like>;
  /** An aggregate relationship */
  likes_aggregate: LikeAggregate;
  name: Scalars['String'];
  picture: Scalars['String'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: PostAggregate;
  updatedAt: Scalars['timestamptz'];
};

/** ユーザー */
export type UserLikesArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

/** ユーザー */
export type UserLikesAggregateArgs = {
  distinct_on: Maybe<Array<LikeSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<LikeOrderBy>>;
  where: Maybe<LikeBoolExp>;
};

/** ユーザー */
export type UserPostsArgs = {
  distinct_on: Maybe<Array<PostSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostOrderBy>>;
  where: Maybe<PostBoolExp>;
};

/** ユーザー */
export type UserPostsAggregateArgs = {
  distinct_on: Maybe<Array<PostSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostOrderBy>>;
  where: Maybe<PostBoolExp>;
};

/** aggregated selection of "users" */
export type UserAggregate = {
  __typename?: 'user_aggregate';
  aggregate: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "users" */
export type UserAggregateFields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<UserMaxFields>;
  min: Maybe<UserMinFields>;
};

/** aggregate fields of "users" */
export type UserAggregateFieldsCountArgs = {
  columns: Maybe<Array<UserSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: Maybe<Array<UserBoolExp>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<UserBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  email?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
  likes?: Maybe<LikeBoolExp>;
  name?: Maybe<StringComparisonExp>;
  picture?: Maybe<StringComparisonExp>;
  posts?: Maybe<PostBoolExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export const UserConstraint = {
  /** unique or primary key constraint */
  UsersPkey: 'users_pkey',
} as const;

export type UserConstraint = typeof UserConstraint[keyof typeof UserConstraint];
/** input type for inserting data into table "users" */
export type UserInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<LikeArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  posts?: Maybe<PostArrRelInsertInput>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'user_max_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  picture: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type UserMutationResponse = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "users" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<UserOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UserOrderBy = {
  createdAt?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<LikeAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  picture?: Maybe<OrderBy>;
  posts_aggregate?: Maybe<PostAggregateOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export const UserSelectColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Email: 'email',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Picture: 'picture',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const;

export type UserSelectColumn =
  typeof UserSelectColumn[keyof typeof UserSelectColumn];
/** input type for updating data in table "users" */
export type UserSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export const UserUpdateColumn = {
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Email: 'email',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Picture: 'picture',
  /** column name */
  UpdatedAt: 'updatedAt',
} as const;

export type UserUpdateColumn =
  typeof UserUpdateColumn[keyof typeof UserUpdateColumn];

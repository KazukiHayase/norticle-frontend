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

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** insert a single row into the table: "posts" */
  addPost: Maybe<Post>;
  /** insert data into the table: "posts" */
  addPosts: Maybe<PostMutationResponse>;
  /** insert a single row into the table: "users" */
  addUser: Maybe<User>;
  /** insert data into the table: "users" */
  addUsers: Maybe<UserMutationResponse>;
  /** delete single row from the table: "posts" */
  deletePost: Maybe<Post>;
  /** delete data from the table: "posts" */
  deletePosts: Maybe<PostMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUser: Maybe<User>;
  /** delete data from the table: "users" */
  deleteUsers: Maybe<UserMutationResponse>;
  /** update single row of the table: "posts" */
  updatePost: Maybe<Post>;
  /** update data of the table: "posts" */
  updatePosts: Maybe<PostMutationResponse>;
  /** update single row of the table: "users" */
  updateUser: Maybe<User>;
  /** update data of the table: "users" */
  updateUsers: Maybe<UserMutationResponse>;
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
export type MutationRootDeletePostArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostBoolExp;
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
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
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
  /** fetch data from the table: "posts" using primary key columns */
  post: Maybe<Post>;
  /** An array relationship */
  posts: Array<Post>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostAggregate;
  /** fetch data from the table: "users" using primary key columns */
  user: Maybe<User>;
  /** fetch data from the table: "users" */
  users: Array<User>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UserAggregate;
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
  /** fetch data from the table: "posts" using primary key columns */
  post: Maybe<Post>;
  /** An array relationship */
  posts: Array<Post>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostAggregate;
  /** fetch data from the table: "users" using primary key columns */
  user: Maybe<User>;
  /** fetch data from the table: "users" */
  users: Array<User>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UserAggregate;
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
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Post>;
  /** An aggregate relationship */
  posts_aggregate: PostAggregate;
  updatedAt: Scalars['timestamptz'];
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
  name?: Maybe<StringComparisonExp>;
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
  name?: Maybe<Scalars['String']>;
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
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
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
  name?: Maybe<OrderBy>;
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
  UpdatedAt: 'updatedAt',
} as const;

export type UserUpdateColumn =
  typeof UserUpdateColumn[keyof typeof UserUpdateColumn];

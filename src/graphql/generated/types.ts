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
  addPost: Maybe<Posts>;
  /** insert data into the table: "posts" */
  addPosts: Maybe<PostsMutationResponse>;
  /** insert a single row into the table: "users" */
  addUser: Maybe<Users>;
  /** insert data into the table: "users" */
  addUsers: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "posts" */
  deletePost: Maybe<Posts>;
  /** delete data from the table: "posts" */
  deletePosts: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUser: Maybe<Users>;
  /** delete data from the table: "users" */
  deleteUsers: Maybe<UsersMutationResponse>;
  /** update single row of the table: "posts" */
  updatePost: Maybe<Posts>;
  /** update data of the table: "posts" */
  updatePosts: Maybe<PostsMutationResponse>;
  /** update single row of the table: "users" */
  updateUser: Maybe<Users>;
  /** update data of the table: "users" */
  updateUsers: Maybe<UsersMutationResponse>;
};

/** mutation root */
export type MutationRootAddPostArgs = {
  object: PostsInsertInput;
  on_conflict: Maybe<PostsOnConflict>;
};

/** mutation root */
export type MutationRootAddPostsArgs = {
  objects: Array<PostsInsertInput>;
  on_conflict: Maybe<PostsOnConflict>;
};

/** mutation root */
export type MutationRootAddUserArgs = {
  object: UsersInsertInput;
  on_conflict: Maybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootAddUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict: Maybe<UsersOnConflict>;
};

/** mutation root */
export type MutationRootDeletePostArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostsBoolExp;
};

/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};

/** mutation root */
export type MutationRootUpdatePostArgs = {
  _inc: Maybe<PostsIncInput>;
  _set: Maybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _inc: Maybe<PostsIncInput>;
  _set: Maybe<PostsSetInput>;
  where: PostsBoolExp;
};

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set: Maybe<UsersSetInput>;
  where: UsersBoolExp;
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
export type Posts = {
  __typename?: 'posts';
  content: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['String'];
};

/** aggregated selection of "posts" */
export type PostsAggregate = {
  __typename?: 'posts_aggregate';
  aggregate: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFields = {
  __typename?: 'posts_aggregate_fields';
  avg: Maybe<PostsAvgFields>;
  count: Scalars['Int'];
  max: Maybe<PostsMaxFields>;
  min: Maybe<PostsMinFields>;
  stddev: Maybe<PostsStddevFields>;
  stddev_pop: Maybe<PostsStddevPopFields>;
  stddev_samp: Maybe<PostsStddevSampFields>;
  sum: Maybe<PostsSumFields>;
  var_pop: Maybe<PostsVarPopFields>;
  var_samp: Maybe<PostsVarSampFields>;
  variance: Maybe<PostsVarianceFields>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFieldsCountArgs = {
  columns: Maybe<Array<PostsSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  avg?: Maybe<PostsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PostsMaxOrderBy>;
  min?: Maybe<PostsMinOrderBy>;
  stddev?: Maybe<PostsStddevOrderBy>;
  stddev_pop?: Maybe<PostsStddevPopOrderBy>;
  stddev_samp?: Maybe<PostsStddevSampOrderBy>;
  sum?: Maybe<PostsSumOrderBy>;
  var_pop?: Maybe<PostsVarPopOrderBy>;
  var_samp?: Maybe<PostsVarSampOrderBy>;
  variance?: Maybe<PostsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  /** upsert condition */
  on_conflict?: Maybe<PostsOnConflict>;
};

/** aggregate avg on columns */
export type PostsAvgFields = {
  __typename?: 'posts_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type PostsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: Maybe<Array<PostsBoolExp>>;
  _not?: Maybe<PostsBoolExp>;
  _or?: Maybe<Array<PostsBoolExp>>;
  content?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  userId?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export const PostsConstraint = {
  /** unique or primary key constraint */
  PostsPkey: 'posts_pkey',
} as const;

export type PostsConstraint =
  typeof PostsConstraint[keyof typeof PostsConstraint];
/** input type for incrementing numeric columns in table "posts" */
export type PostsIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'posts_min_fields';
  content: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
  userId: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostsMutationResponse = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** on_conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  update_columns: Array<PostsUpdateColumn>;
  where?: Maybe<PostsBoolExp>;
};

/** Ordering options when selecting data from "posts". */
export type PostsOrderBy = {
  content?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  userId?: Maybe<OrderBy>;
};

/** primary key columns input for table: posts */
export type PostsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export const PostsSelectColumn = {
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

export type PostsSelectColumn =
  typeof PostsSelectColumn[keyof typeof PostsSelectColumn];
/** input type for updating data in table "posts" */
export type PostsSetInput = {
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type PostsStddevFields = {
  __typename?: 'posts_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type PostsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PostsStddevPopFields = {
  __typename?: 'posts_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type PostsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PostsStddevSampFields = {
  __typename?: 'posts_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type PostsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PostsSumFields = {
  __typename?: 'posts_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type PostsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "posts" */
export const PostsUpdateColumn = {
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

export type PostsUpdateColumn =
  typeof PostsUpdateColumn[keyof typeof PostsUpdateColumn];
/** aggregate var_pop on columns */
export type PostsVarPopFields = {
  __typename?: 'posts_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type PostsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PostsVarSampFields = {
  __typename?: 'posts_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type PostsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PostsVarianceFields = {
  __typename?: 'posts_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type PostsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "posts" using primary key columns */
  post: Maybe<Posts>;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostsAggregate;
  /** fetch data from the table: "users" using primary key columns */
  user: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
};

export type QueryRootPostArgs = {
  id: Scalars['Int'];
};

export type QueryRootPostsArgs = {
  distinct_on: Maybe<Array<PostsSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostsOrderBy>>;
  where: Maybe<PostsBoolExp>;
};

export type QueryRootPostsAggregateArgs = {
  distinct_on: Maybe<Array<PostsSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostsOrderBy>>;
  where: Maybe<PostsBoolExp>;
};

export type QueryRootUserArgs = {
  id: Scalars['String'];
};

export type QueryRootUsersArgs = {
  distinct_on: Maybe<Array<UsersSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UsersOrderBy>>;
  where: Maybe<UsersBoolExp>;
};

export type QueryRootUsersAggregateArgs = {
  distinct_on: Maybe<Array<UsersSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UsersOrderBy>>;
  where: Maybe<UsersBoolExp>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "posts" using primary key columns */
  post: Maybe<Posts>;
  /** An array relationship */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  postsAggregate: PostsAggregate;
  /** fetch data from the table: "users" using primary key columns */
  user: Maybe<Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: UsersAggregate;
};

export type SubscriptionRootPostArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRootPostsArgs = {
  distinct_on: Maybe<Array<PostsSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostsOrderBy>>;
  where: Maybe<PostsBoolExp>;
};

export type SubscriptionRootPostsAggregateArgs = {
  distinct_on: Maybe<Array<PostsSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostsOrderBy>>;
  where: Maybe<PostsBoolExp>;
};

export type SubscriptionRootUserArgs = {
  id: Scalars['String'];
};

export type SubscriptionRootUsersArgs = {
  distinct_on: Maybe<Array<UsersSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UsersOrderBy>>;
  where: Maybe<UsersBoolExp>;
};

export type SubscriptionRootUsersAggregateArgs = {
  distinct_on: Maybe<Array<UsersSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<UsersOrderBy>>;
  where: Maybe<UsersBoolExp>;
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
export type Users = {
  __typename?: 'users';
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  updatedAt: Scalars['timestamptz'];
};

/** ユーザー */
export type UsersPostsArgs = {
  distinct_on: Maybe<Array<PostsSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostsOrderBy>>;
  where: Maybe<PostsBoolExp>;
};

/** ユーザー */
export type UsersPostsAggregateArgs = {
  distinct_on: Maybe<Array<PostsSelectColumn>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<PostsOrderBy>>;
  where: Maybe<PostsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<UsersMaxFields>;
  min: Maybe<UsersMinFields>;
};

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns: Maybe<Array<UsersSelectColumn>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<UsersBoolExp>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<UsersBoolExp>>;
  createdAt?: Maybe<TimestamptzComparisonExp>;
  email?: Maybe<StringComparisonExp>;
  id?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  posts?: Maybe<PostsBoolExp>;
  updatedAt?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export const UsersConstraint = {
  /** unique or primary key constraint */
  UsersPkey: 'users_pkey',
} as const;

export type UsersConstraint =
  typeof UsersConstraint[keyof typeof UsersConstraint];
/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostsArrRelInsertInput>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  createdAt: Maybe<Scalars['timestamptz']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  createdAt?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  posts_aggregate?: Maybe<PostsAggregateOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export const UsersSelectColumn = {
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

export type UsersSelectColumn =
  typeof UsersSelectColumn[keyof typeof UsersSelectColumn];
/** input type for updating data in table "users" */
export type UsersSetInput = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export const UsersUpdateColumn = {
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

export type UsersUpdateColumn =
  typeof UsersUpdateColumn[keyof typeof UsersUpdateColumn];

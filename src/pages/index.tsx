import { withAuthn } from '../services/authn';
import { useSampleQuery } from './generated';

const IndexPage = () => {
  const { data, loading } = useSampleQuery();

  return (
    <>
      {`${loading}`}
      {data?.users.map((user) => (
        <>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </>
      ))}
    </>
  );
};

export default withAuthn(IndexPage);

import { withAuthn } from "../services/authn"

const IndexPage = () => (
  <>welcome</>
)

export default withAuthn(IndexPage)

const Authenticate = `query Authenticate($email: String!, $password: String!) {
  authenticate(email: $email, password: $password) {
    token
    expire
    user {
      name
      id
      kind
      telephone
      state
      lga
      agent {
        staffId
        designation
        designation
        commission
        active
      }
      admin {
        role
        readOnly
      }
    }
  }
}`
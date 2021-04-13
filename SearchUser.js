const Search_User = `query SearchUser ($page: Page!, $kind: Int!, $keyword: String) {
    searchUser(page: $page, kind: $kind, keyword: $keyword) {
      items {
        name
        id
        kind
        region
        lga
        telephone
        agent {
          staffId
          designation
        }
        admin {
          role
          readOnly
        }
      }
      pageInfo {
        page
        totalCount
        size
        hasNextPage
        hasPreviousPage
      }
    }
  }`
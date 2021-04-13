// Creator: WebInspector 537.36

import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function main() {
  let response;

  response = http.post(
    "https://staging-backend.bfree.com.ng/api",
    '{"operationName":"SearrchUsrr","variables":{"page":{"sortBy":"created_at","sortDirectionDesc":true,"size":9,"number":1},"kind":2,"keyword":""},"query":"query SearrchUsrr($page: Page!, $kind: Int!, $keyword: String) {\\n  searchUser(page: $page, kind: $kind, keyword: $keyword) {\\n    items {\\n      name\\n      id\\n      kind\\n      region\\n      lga\\n      telephone\\n      agent {\\n        staffId\\n        designation\\n      }\\n      admin {\\n        role\\n        readOnly\\n      }\\n    }\\n    pageInfo {\\n      page\\n      totalCount\\n      size\\n      hasNextPage\\n      hasPreviousPage\\n    }\\n  }\\n}\\n"}',
    {
      headers: {
        accept: "*/*",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQyNzAwMjYsImlkIjoiN2UwNWZhYTEtODM5My00NjNmLThmNTMtODk1MDliNmY4MjMwIiwib3JpZ19pYXQiOjE2MTgyNzAwMjZ9.pBLINq25FGM2JMCXsZx2XHdfwDwogECP8_ydyjuWef4",
        "sec-ch-ua-mobile": "?0",
        "content-type": "application/json",
        origin: "https://staging-backend.bfree.com.ng",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "accept-encoding": "gzip, deflate, br",
      },
    }
  );


  sleep(0.7);
}
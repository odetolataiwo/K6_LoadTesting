import { sleep } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "40s", target: 20 },
    { duration: "1m", target: 50 },
    { duration: "30s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["max<=600"],
    http_req_failed: ["rate>=10"],
  },
};

export default function main() {
  let response;

  // Authenticate
  response = http.post(
    "https://staging-backend.bfree.com.ng/api",
    '{"operationName":"Authenticate","variables":{"email":"","email2":"","password":""},"query":"query Authenticate($email: String!, $password: String!) {\\n  authenticate(email: $email, password: $password) {\\n    token\\n    expire\\n    user {\\n      name\\n      id\\n      kind\\n      telephone\\n      state\\n      lga\\n      agent {\\n        staffId\\n        designation\\n        designation\\n        commission\\n        active\\n      }\\n      admin {\\n        role\\n        readOnly\\n      }\\n    }\\n  }\\n}\\n"}',
    {
      headers: {
        "content-type": "application/json",
        origin: "https://staging-backend.bfree.com.ng",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
      },
    }
  );

  sleep(1);
}

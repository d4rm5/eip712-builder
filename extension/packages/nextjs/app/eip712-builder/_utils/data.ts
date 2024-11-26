export const EIP_712_TYPES = {
    Person: [
      { name: "name", type: "string" },
      { name: "wallet", type: "address" },
    ],
    Mail: [
      { name: "from", type: "Person" },
      { name: "to", type: "Person" },
      { name: "contents", type: "string" },
    ],
    Test: [
        { name: "name", type: "string" },
        { name: "wallet", type: "address" },
        { name: "email", type: "Mail" },
    ]
  } as const;

  export const EIP_712_DOMAIN = {
    name: "EIP-712 Extension",
    version: "1",
  } as const;
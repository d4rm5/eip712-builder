# EIP-712 sign buidler

Scaffold ETH 2 extension to build and test [EIP-712](https://eips.ethereum.org/EIPS/eip-712) signatures easy. 

## Installation

```bash
npx create-eth@latest -e d4rm5/eip712-builder
```

## Features

- **Dynamic Form Generation**: Automatically generates forms based on the EIP-712 types defined in your project.
- **Message Signing**: Sign EIP-712 messages using your connected wallet.
- **Customizable Types**: Easily define and modify EIP-712 types and domains.

### Getting Started

To use the EIP-712 Builder, follow these steps:

1. **Navigate to the EIP-712 Builder Page**:
   Open your application and navigate to the EIP-712 Builder page at `/eip712-builder`.

2. **Define EIP-712 Types and Domain**:
   Edit the EIP-712 types and domain in the [`data.ts`](packages/nextjs/app/eip712-builder/data.ts) file. Here is an example:

   ```ts
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
     ```

3. **Build Your Message**: 
Use the form on the EIP-712 Builder page to input the data for your message. The form fields are dynamically generated based on the types defined in the data.ts file.

4. **Sign the Message**: 
Click the "Sign message" button to sign the message with your connected wallet. The signature will be displayed on the page.


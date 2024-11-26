"use client"

import type { NextPage } from "next";
import EIP712Form from "./_components/EIP712Form";


const Eip712Builder: NextPage = () => {


    return (
    
    <main className="m-6">
    <h1 className="text-2xl font-bold">EIP-712 Builder</h1>
    <p className="text-sm text-gray-500">Build your EIP-712 message here</p>

    <p className="text-sm text-gray-500">Edit domain and types in { " " }
        <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all [word-spacing:-0.5rem] inline-block">
            packages / nextjs / app / eip712-builder / data.ts
        </code>   
    </p>

    <div className="m-6">
    <EIP712Form />
    </div>
    </main>
    );
}

export default Eip712Builder;
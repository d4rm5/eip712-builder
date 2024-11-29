"use client";

import { Formik, Form, Field } from 'formik';

const DomainForm = () => {
    return (
        <Formik
            initialValues={{
                name: 'Example domain',
                version: '1',
                chainId: 1,
                verifyingContract: ''
            }}
            onSubmit={(values) => console.log('Domain:', values)}
        >
            {({ values }) => (
                <Form className='space-y-2'>
                    <label htmlFor="name" className="label text-xl">Domain</label>
                    <div>
                    <Field
                        name="name"
                        placeholder="Name"
                        className="input w-full max-w-xs"
                    />
                    </div>
                    <div>
                    <Field
                        name="version"
                        placeholder="Version"
                        className="input w-full max-w-xs"
                    />
                    </div>
                    
                    <div>
                    <Field
                        name="chainId"
                        placeholder="Chain ID"
                        className="input w-full max-w-xs"
                    />
                    </div>
                    <div>
                    <Field
                        name="verifyingContract"
                        placeholder="Verifying Contract"
                        className="input w-full max-w-xs"
                    />
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default DomainForm;
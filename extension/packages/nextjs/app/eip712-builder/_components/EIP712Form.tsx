"use client";

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {useSignTypedData} from "wagmi";
import { generateInitialValues } from "../_utils/generateInitialValues";
import {renderFields} from '../_utils/renderFields';
import {EIP_712_TYPES, EIP_712_DOMAIN} from '../_utils/data';
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const EIP712Form = () => {

  const { signTypedData, data, status, error } = useSignTypedData()

  status : error ? console.log('Error:', error) : console.log('Signature:', data);  

  const [selectedType, setSelectedType] = useState<keyof typeof EIP_712_TYPES>('Person');
  const [initialValues, setInitialValues] = useState(generateInitialValues(selectedType))

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, setFieldValue: (field: string, value: any) => void) => {
    const value = event.target.value;
    setSelectedType(value as keyof typeof EIP_712_TYPES);
    setInitialValues(generateInitialValues(value as keyof typeof EIP_712_TYPES));
  };

  return (
    <Formik
    initialValues={initialValues}
    onSubmit={(values) => console.log('Formulario enviado:', values)}
    enableReinitialize 
      >

    {({ setFieldValue, values }) => (
        <Form>
          <label className="label">Primary type</label>
          <Field
            as="select"
            name="primaryType"
            className="select select-bordered w-full max-w-xs"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleSelectChange(e, setFieldValue)
            }
            value={selectedType}
          >
            {Object.keys(EIP_712_TYPES).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Field>

          <label className="label">Message</label>

          {renderFields(selectedType)}

          <button type="button" className="btn btn-primary btn-sm font-normal gap-1 mt-1"
      onClick={() => 
        signTypedData({
          domain: EIP_712_DOMAIN,
          types: EIP_712_TYPES,
          primaryType: selectedType,
          message: values as any,
        })
      }
    >
        Sign message
    <PencilSquareIcon className="h-4 w-4" />
      
    </button>
    {
      status === 'error' && <p>Failed! Check console.</p>
    }

    {
      status === 'success' && <p>Signature: {data}</p>
    }
    </Form>
      )}
      </Formik>
  )

}
export default EIP712Form;

import { Field } from "formik";
import {EIP_712_TYPES} from '../_utils/data';

export const renderFields = (
  typeName: keyof typeof EIP_712_TYPES,
  basePath: string = ""
) => {
  return EIP_712_TYPES[typeName].map((field) => {
    const fieldName = basePath ? `${basePath}.${field.name}` : field.name;

    if (EIP_712_TYPES[field.type as keyof typeof EIP_712_TYPES]) {
      // Tipo anidado
      return (
        <fieldset key={fieldName}>
          <label className="label text-xl">{field.name}</label>
          {renderFields(field.type as keyof typeof EIP_712_TYPES, fieldName)}
        </fieldset>
      );
    } else {
      // Tipo primitivo
      return (
        <div key={fieldName}>
          <label className="label" htmlFor={fieldName}>
            {field.name}
          </label>
          <Field className="input" name={fieldName} id={fieldName} />
        </div>
      );
    }
  });
};

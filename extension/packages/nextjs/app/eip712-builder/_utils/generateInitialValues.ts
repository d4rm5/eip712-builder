import {EIP_712_TYPES} from '../_utils/data';

export const generateInitialValues = (
  typeName: keyof typeof EIP_712_TYPES
): Record<string, any> => {
  const typeDefinition = EIP_712_TYPES[typeName];
  const initialValues: Record<string, any> = {};

  typeDefinition.forEach((field) => {
    if (EIP_712_TYPES[field.type as keyof typeof EIP_712_TYPES]) {
      // Tipo anidado
      initialValues[field.name] = generateInitialValues(field.type as keyof typeof EIP_712_TYPES);
    } else {
      // Tipo primitivo
      initialValues[field.name] = "";
    }
  });

  return initialValues;
};



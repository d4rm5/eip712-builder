import React, { useState } from 'react';
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const DynamicEIP712Form = () => {
  const [fields, setFields] = useState(['']);

  const addField = () => {
    setFields([...fields, '']);
  };

  const handleChange = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with values:', fields);
    // Here you would typically send the data to a server or perform other actions
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, index) => (
        <input
          key={index}
          type="text"
          value={field}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`Field ${index + 1}`}
          className="w-full"
        />
      ))}
      <button type="button" onClick={addField} variant="outline" className="w-full">
        <PlusCircleIcon className="mr-2 h-4 w-4" />
        Add Field
      </button>
      <button type="submit" className="w-full">Submit</button>
    </form>
  );
};

export default DynamicForm;
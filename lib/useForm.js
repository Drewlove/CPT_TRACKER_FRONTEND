import { useState } from 'react/cjs/react.development';

// initial = {}, passes a default empty object in case nothing else is passed in
export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') value = parseInt(value);
    if (type === 'file') {
      value = URL.createObjectURL(e.target.files[0]);
    }

    setInputs({ ...inputs, [name]: value });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // return the things (functions and data) we want to surface from the custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}

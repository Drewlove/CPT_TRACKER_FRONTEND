import { useState } from 'react/cjs/react.development';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') value = parseInt(value);
    if (type === 'file') {
      // console.log(e.target);
      // console.log(e.target.files);
      // value[0] = e.target.files;
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

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}

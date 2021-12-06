import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import Tesseract from 'tesseract.js';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';

// TODO
// add Loading screen while Tesseract is converting image to text
// will all schedules look like this?
// What are all the variations of a possible schedule?
// can a visit type be two words? If so, need to change function

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function upload() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    text: '',
  });
  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  const cptCodes = [
    { type: 'FU', cpt: 123 },
    { type: 'NP', cpt: 123 },
    { type: 'PO', cpt: 123 },
    { type: 'FU', cpt: 123 },
    { type: 'FIU', cpt: 123 },
    { type: 'Patient', cpt: 123 },
    { type: 'Post-Op', cpt: 123 },
    { type: 'Esl', cpt: 123 },
    { type: 'MBB', cpt: 123 },
    { type: 'ACDF', cpt: 123 },
  ];

  const handleClick = async () => {
    Tesseract.recognize(inputs.image, 'eng', {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        const { lines } = result.data;
        const schedule = lines.map((key, i) => {
          if (i !== 0) {
            const words = key.text.split(' ');
            const obj = {
              mrn: words[2],
              type: words.at(-1).replace('\n', ''),
            };
            return obj;
          }
        });
        schedule.forEach((line) => {
          cptCodes.forEach((key) => {
            console.log(line);
            console.log(key);
          });
        });
        // MRN, Visit Type, Level, CPT, RVU

        // console.log(text);
        // setText(text);
      });
  };

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(inputs);
        // Submit the inputfields to the backend:
        const res = await createProduct();
        clearForm();
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleClick}>
          Convert to Text
        </button>
        {/* <button type="submit">+ Add Schedule</button> */}
      </fieldset>
    </Form>
  );
}

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import Tesseract from 'tesseract.js';
// import useForm from '../lib/useForm';
import { getDataFromTree } from '@apollo/client/react/ssr';

import DisplayError from '../ErrorMessage';
import { ALL_PRODUCTS_QUERY } from '../Products';
import Form from '../styles/Form';
import VisitType from '../VisitType/VisitType';
import CircleProgress from '../CircleProgress/CircleProgress';
import convertImgToSchedule from '../../lib/convertImgToSchedule';

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

export default function visitAddForm() {
  // const { inputs, handleChange, clearForm, resetForm } = useForm({
  //   image: '',
  //   visitType: [],
  // });

  // const [tesseractStatus, setTesseractStatus] = useState('');
  // const [isConvertingImgToText, setisConvertingImgToText] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [list, setList] = useState([]);
  const [image, setImage] = useState('');
  const [test, setTest] = useState('test');

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: list,
      // refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  const handleChangeImg = (e) => {
    let { value } = e.target;
    value = URL.createObjectURL(e.target.files[0]);
    setImage(value);
  };

  // HERE, NEXT
  // list, array of objects, has id property, then a propery that is an object
  // spread operator only creates shallow copies, might not copy all visitData
  // put all properties in same object, ie lift "up" visitData into the object and be on the same level as id
  // figure out best practice for updating state that is an array of objects in react
  // probably here, use spread operator:
  // https://stackoverflow.com/questions/37662708/react-updating-state-when-state-is-an-array-of-objects
  const handleChangeTest = (e) => {
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.name);

    const { name, id } = e.target;

    const visitTypeId = id.substring(id.indexOf('-') + 1);
  };

  const handleClick = async () => {
    const result = await Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          console.log('status', m.status);
          setConversionProgress(m.progress);
        }
      },
    });
    const { lines } = result.data;
    const allVisitData = convertImgToSchedule(lines);
    setList(allVisitData);
  };

  const displayDefaultPage = () => (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
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
            onChange={handleChangeImg}
          />
        </label>
        <button type="button" onClick={handleClick}>
          Upload
        </button>
      </fieldset>
    </Form>
  );

  const convertingImage = () =>
    conversionProgress > 0 && conversionProgress < 1;

  const displayCircleProgress = () => (
    <CircleProgress conversionProgress={conversionProgress} />
  );

  const displayVisitTypes = () =>
    list.map((key) => (
      <VisitType
        key={key.id}
        id={key.id}
        visitData={key.visitData}
        handleChangeTest={handleChangeTest}
      />
    ));

  return (
    <section>
      {conversionProgress === 0 && displayDefaultPage()}
      {convertingImage() && displayCircleProgress()}
      {list.length > 0 && displayVisitTypes()}

      {/* <VisitType handleChangeTest={handleChangeTest} thing={thing} /> */}
    </section>
  );
}

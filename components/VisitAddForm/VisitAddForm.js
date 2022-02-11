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
  const [visitList, setVisitList] = useState([]);
  const [image, setImage] = useState('');
  const [test, setTest] = useState('test');

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: visitList,
      // refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  const handleChangeImg = (e) => {
    let { value } = e.target;
    value = URL.createObjectURL(e.target.files[0]);
    setImage(value);
  };

  // HERE, NEXT
  // visitType object should each have a property, altVisitType, which is an array
  // altVisitType: [],
  // After uploading the schedule, if the displayed visit type is different from
  // the actual visit type, then the user can correct it by changing the visit Type on the form
  // this updates the altVisitType array
  // the library file, convertImgToSchedule, should check a separate variable, listOfAltVisitTypes,
  // to see if the alternate interpretation of the visitType is in the array
  // if an altVisitType is found while converting the image to text, then the displayed
  // visitType is the actual visit type, not the alt.

  // if the visitType displayed is different from the visitType on the image, then
  // the visitType object s

  // Two options for adding visit.
  // 1. Be able to add single visit manually
  // 2. Scan picture to add visit

  // Error if "Upload is clicked" without visit file added.
  // Probably grey out Upload button until visit file is added
  // What happens if try to upload file that has no visit info?

  // Two options for adding visit.
  // 1. Be able to add single visit manually
  // 2. Scan picture to add visit

  // Error if "Upload is clicked" without visit file added.
  // Probably grey out Upload button until visit file is added
  // What happens if try to upload file that has no visit info?

  const handleChange = (e, visitId) => {
    const { name, value } = e.target;
    console.log(
      `hangleChangeTest visitId: ${visitId}, name: ${name}, value: ${value}`
    );
    const newVisitList = visitList.map((key) =>
      key.visitId === visitId ? { ...key, [name]: value } : key
    );
    setVisitList(newVisitList);
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
    setVisitList(allVisitData);
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
    visitList.map((key) => (
      <VisitType
        key={key.visitId}
        visitData={key}
        handleChange={handleChange}
      />
    ));

  return (
    <section>
      {conversionProgress === 0 && displayDefaultPage()}
      {convertingImage() && displayCircleProgress()}
      {visitList.length > 0 && displayVisitTypes()}
    </section>
  );
}

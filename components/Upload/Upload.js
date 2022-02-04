import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import Tesseract from 'tesseract.js';
// import useForm from '../lib/useForm';
import { getDataFromTree } from '@apollo/client/react/ssr';
import { v4 as uuidv4 } from 'uuid';
import DisplayError from '../ErrorMessage';
import { ALL_PRODUCTS_QUERY } from '../Products';
import Form from '../styles/Form';
import VisitType from '../VisitType';
import CircleProgress from '../CircleProgress/CircleProgress';

/* eslint no-use-before-define: ["error", { "functions": false }] */
// https://eslint.org/docs/rules/no-use-before-define

// TODO
// add uuid to each object in list;

// will all schedules look like this?
// What are all the variations of a possible schedule?
// can a visit type be two words? If so, need to change function

// on page load, retrieve all visit types and corresponding CPT codes from backend for this user
// it should be an object like this:

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
  // const { inputs, handleChange, clearForm, resetForm } = useForm({
  //   image: '',
  //   visitType: [],
  // });

  // const [tesseractStatus, setTesseractStatus] = useState('');
  // const [isConvertingImgToText, setisConvertingImgToText] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [list, setList] = useState([]);
  const [image, setImage] = useState('');

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: list,
      // refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  // NEXT:
  // user enters common visit types, along with CPT codes and RVUs
  // --> this creates an object, like the cptCodes obj above
  // this object is then loaded whenever the user visits this page
  // getPatientVisitData then uses that object as a reference point

  // uploaded image automatically converts to text, remove "Convert to Text" button

  // once allPatienVisitData is complete, is then converted to a form with:
  // mrn, type, cpt, rvu
  // user can then correct any mistakes and save the info

  const cptCodes = [
    { type: 'FU', fullName: '', cpt: 412, rvu: 0 },
    { type: 'NP', fullName: '', cpt: 540, rvu: 0 },
    { type: 'PO', fullName: '', cpt: 872, rvu: 0 },
    { type: 'FIU', fullName: '', cpt: 382, rvu: 0 },
    { type: 'New', fullName: 'New Patient', cpt: 620, rvu: 0 },
    { type: 'Post-Op', fullName: '', cpt: 521, rvu: 0 },
    { type: 'Esl', fullName: '', cpt: 893, rvu: 0 },
    { type: 'MBB', fullName: '', cpt: 768, rvu: 0 },
    { type: 'ACDF', fullName: '', cpt: 335, rvu: 0 },
  ];

  const handleChange = (e) => {
    let { value } = e.target;
    value = URL.createObjectURL(e.target.files[0]);
    setImage(value);
  };

  const handleClick = async () => {
    const result = await Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        // setTesseractStatus(m.status);
        // setisConvertingImgToText(true);
        if (m.status === 'recognizing text') {
          console.log('status', m.status);
          setConversionProgress(m.progress);
        }
      },
    });
    // setisConvertingImgToText(false);
    const { lines } = result.data;
    const allVisitData = getAllVisitData(lines);
    setList(allVisitData);
  };

  const getAllVisitData = (lines) => {
    const allVisitData = [];
    lines.forEach((line) => {
      const visitData = getVisitData(line);
      if (Object.keys(visitData).length !== 0)
        allVisitData.push({ visitData, id: uuidv4() });
    });
    return allVisitData;
  };

  const getVisitData = (line) => {
    let visitData = {};
    line.words.forEach((key) => {
      const { text } = key;
      if (isMrn(text)) visitData.mrn = text;
      const visitType = isVisitType(text);
      if (visitType !== null) visitData = { ...visitData, ...visitType };
    });
    return visitData;
  };

  const isMrn = (str) => {
    // MRN is usually a six digit number, Tim's mock schedule uses 9 digit #'s for MRNs
    const strNoHyphens = str.replace(/-/g, '');
    return strNoHyphens.length === 9 && parseInt(strNoHyphens);
  };

  const isVisitType = (str) => {
    const visitType = cptCodes.filter(
      // case insensitive comparison of each 'type' value in cptCode array with 'text'
      (key) =>
        key.type.localeCompare(str, undefined, { sensitivity: 'accent' }) === 0
    );
    if (visitType?.length) {
      return visitType[0];
    }
  };

  // const renderProgress = () => (
  //   <UploadLoading
  //     isConvertingImgToText={isConvertingImgToText}
  //     conversionProgress={conversionProgress}
  //   />
  // );
  // const progress = parseInt(conversionProgress * 100);
  // return (
  //   <div>
  //     <p>Converting image to text...</p>
  //     <p>{progress}%</p>
  //     <div />
  //   </div>
  // );
  const displayVisitTypes = () => list.map((key) => <VisitType props={key} />);

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
            onChange={handleChange}
          />
        </label>
        <button type="button" onClick={handleClick}>
          Upload
        </button>
        {/* <TesseractStatus>
          {/* {isConvertingImgToText ? renderProgress() : null} */}
        {/* {renderVisitTypes()} */}
        {/* <button type="submit">+ Add Schedule</button> */}
      </fieldset>
    </Form>
  );

  const displayCircleProgress = () => (
    <CircleProgress
      // isConvertingImgToText={isConvertingImgToText}
      conversionProgress={conversionProgress}
    />
  );

  return (
    <section>
      {conversionProgress === 0 && displayDefaultPage()}
      {conversionProgress > 0 && displayCircleProgress()}
      {/* {list.length > 0 && displayVisitTypes()} */}
      {/* {displayUploadLoading()} */}
    </section>
  );
}

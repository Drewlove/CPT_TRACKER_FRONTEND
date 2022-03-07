import { v4 as uuidv4 } from 'uuid';
import cptCodes from './cptCodes';

export default function convertImgToSchedule(lines) {
  return getAllVisitData(lines);
}

const getAllVisitData = (lines) => {
  const allVisitData = [];
  lines.forEach((line) => {
    const visitData = getVisitData(line);
    const visitId = uuidv4();
    if (Object.keys(visitData).length !== 0)
      allVisitData.push({ ...visitData, visitId });
  });
  return allVisitData;
};

const getVisitData = (line) => {
  let visitData = {};
  line.words.forEach((key) => {
    const { text } = key;
    if (isMrn(text)) visitData.mrn = parseInt(text);
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
      key.visitType.localeCompare(str, undefined, { sensitivity: 'accent' }) ===
      0
  );
  if (visitType?.length) {
    return visitType[0];
  }
};

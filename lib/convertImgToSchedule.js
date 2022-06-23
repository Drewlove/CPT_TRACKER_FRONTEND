import { v4 as uuidv4 } from 'uuid';
import cptCodes from './cptCodes';

export default function convertImgToSchedule(lines) {
  return getAllVisitData(lines);
}

const getAllVisitData = (lines) => {
  const allVisitData = [];
  lines.forEach((line) => {
    const visitData = getVisitData(line);
    console.log(`visitData: {$Object.keys(visitData}`);
    if (Object.keys(visitData).length !== 0)
      allVisitData.push({ ...visitData });
  });
  return allVisitData;
};

const getVisitData = (line) => {
  let visitData = {};
  line.words.forEach((key) => {
    const { text } = key;
    const visitType = isVisitType(text);
    console.log(`visitType: ${visitType}, type: ${typeof visitType}`);
    if (typeof visitType === 'undefined') return;
    visitData = {
      ...visitData,
      ...visitType,
      visitId: uuidv4(),
      visitDate: new Date(new Date().setHours(0, 0, 0, 0)),
    };
  });
  return visitData;
};

const isVisitType = (str) => {
  const visitType = cptCodes.filter(
    // case insensitive comparison of each 'type' value in cptCode array with str
    (key) =>
      key.visitType.localeCompare(str, undefined, { sensitivity: 'accent' }) ===
      0
  );
  if (visitType?.length) {
    return visitType[0];
  }
};

import React from 'react';
import { CircleProgress } from 'react-gradient-progress';

export default function CircleProgressIndicator(props) {
  const percentage = parseInt(props.conversionProgress * 100);

  return <CircleProgress percentage={percentage} strokeWidth={8} />;
}

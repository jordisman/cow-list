import React from 'react';
import CowItem from './cowItem';

const CowList = ({ cows }) => (
  <div>
    {cows.map((cow, index) => <CowItem cow={cow} key={index} />)}
  </div>
)

export default CowList;
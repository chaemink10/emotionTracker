import React from 'react';
import DescriptionInput from './DescriptionInput';
import DescriptionList from './DescriptionList';

const DescriptionConts = ({ tracker, onUpdate }) => {
  return (
    <>
      {tracker.description && (
        <DescriptionList tracker={tracker}></DescriptionList>
      )}
      <DescriptionInput
        tracker={tracker}
        onUpdate={onUpdate}
      ></DescriptionInput>
    </>
  );
};

export default DescriptionConts;

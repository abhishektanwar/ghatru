import React, { useState } from 'react';
import PassPhraseForm from './PassPhraseForm';
import { PageProps } from './HomePage';
import { Step, validPassPhrase as validPassPhraseJSON } from '../data';

const RiddlePhotoCollection = ({ changeStep }: PageProps) => {
  const [passPhrase, setPassPhrase] = useState('');
  const validPassPhrase = validPassPhraseJSON.riddlePhotoCollection;

  const updatePassPhrase = (value) => {
    setPassPhrase(value);
  };

  const onNextClick = () => {
    changeStep(Step.RIDDLE_BAG);
  };

  return (
    <div className="mt-40">
      <div className="space-y-3 flex flex-col justify-center text-center">
        <p>
          In the heart of our home, where time takes its repose,
          <br />
          A hidden trove of memories, where affection ebbs and flows.
          <br />
          Sixteen glimpses, a visual serenade so sweet,
          <br />
          Embark on a journey where kitchen memories meet.
          <br />
          <br />
          Amidst the culinary canvas and gastronomic cheer,
          <br />
          A secret lies beneath a device, bringing balance near.
          <br />
          Where daily routines in quiet convene,
          <br />
          Find your treasure by the kitchen's weighing machine."
        </p>
      </div>
      <PassPhraseForm
        passPhrase={passPhrase}
        updatePassPhrase={updatePassPhrase}
        onNextClick={onNextClick}
        validPassPhrase={validPassPhrase}
      />
    </div>
  );
};

export default RiddlePhotoCollection;

import React, { useState } from 'react';
import PassPhraseForm from './PassPhraseForm';
import { PageProps } from './HomePage';
import { Step, validPassPhrase as validPassPhraseJSON } from '../data';

const RiddleAfterEight = ({ changeStep }: PageProps) => {
  const [passPhrase, setPassPhrase] = useState('');
  const validPassPhrase = validPassPhraseJSON.riddleAfterEight;

  const updatePassPhrase = (value) => {
    setPassPhrase(value);
  };

  const onNextClick = () => {
    changeStep(Step.RIDDLE_PHOTO_COLLECTION);
  };

  return (
    <div className="mt-40">
      <div className="space-y-3 flex flex-col justify-center text-center">
        <p>
          When the clock strikes eight in a minty delight,
          <br />
          Hidden within metal walls, a treasure takes flight.
          <br />
          In the car's boot, where secrets are kept,
          <br />
          After Eight waits, in dreams, you'll be swept.
          <br />
          <br />
          Navigate the asphalt sea, where numbers align,
          <br />
          9127 holds the key, a sweet surprise in design.
          <br />
          Among plates and digits, the code resonates,
          <br />
          Unlock the trunk's secret, where chocolate dreams await.
          <br />
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

export default RiddleAfterEight;

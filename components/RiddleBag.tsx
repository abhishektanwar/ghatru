import React, { useState } from 'react';
import PassPhraseForm from './PassPhraseForm';
import { PageProps } from './HomePage';
import { Step, validPassPhrase as validPassPhraseJSON } from '../data';

const RiddleBag = ({ changeStep }: PageProps) => {
  const [passPhrase, setPassPhrase] = useState('');
  const validPassPhrase = validPassPhraseJSON.riddleBag;

  const updatePassPhrase = (value) => {
    setPassPhrase(value);
  };

  const onNextClick = () => {
    changeStep(Step.RIDDLE_VIDEO);
  };

  return (
    <div className="mt-40">
      <div className="space-y-3 flex flex-col justify-center text-center">
        <p>
          Within the heart of our space, secrets find their abode,
          <br />
          In a cupboard's sanctuary, a fashionable code.
          <br />
          A blend of fashion and flair, a secret's delight,
          <br />
          Seek where daily essentials find shelter with care.
          <br />
          <br />
          Among folded linens and memories stacked,
          <br />
          Discover your gift where garments are packed.
          <br />
          In the realm of storage where clothing finds its way,
          <br />
          A hidden surprise awaits, unlocked by a numeric sway.
          <br />
          <br />
          For the next chapter of this journey to unfold,
          <br />
          A whisper to me, the passcode in stories untold.
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

export default RiddleBag;

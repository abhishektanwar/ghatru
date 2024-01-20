import React, { useState } from 'react';
import { PageProps } from './HomePage';
import { Step, validPassPhrase as validPassPhraseJSON } from '../data';
import PassPhraseForm from './PassPhraseForm';

const RiddleKitkat = ({ changeStep }: PageProps) => {
  const [passPhrase, setPassPhrase] = useState('');
  const validPassPhrase = validPassPhraseJSON.riddleKitkat;

  const updatePassPhrase = (value) => {
    setPassPhrase(value);
  };

  const onNextClick = ()=>{
    changeStep(Step.RIDDLE_FLOWER);
  }

  return (
    <div className="mt-40">
      <div className="space-y-3 flex flex-col justify-center text-center">
        <p>
          In darkness, I'm sweet, a cocoa delight,
          <br />
          Break me apart, layer by layer so light.
          <br />
          Not just any chocolate, a favorite so true,
          <br />
          Crunchy, divine, and wrapped just for you.
        </p>

        <p>
          In a red and black cloak, I patiently wait,
          <br />
          My wafers in harmony, a tempting fate.
          <br />
          Hidden away, not far from your gaze,
          <br />
          Look for a red bag in our special space.
        </p>

        <p>
          This bag has wheels, a roll and a spin,
          <br />
          Seek it out, let the chocolatey fun begin.
          <br />
          Guess this treat, it's your birthday delight,
          <br />A break from the norm, a chocolatey height.
        </p>

        <p>
          What am I, my sweet birthday queen?
          <br />
          Guess this riddle, and the next clue is seen!
        </p>
      </div>
      <PassPhraseForm passPhrase={passPhrase} updatePassPhrase={updatePassPhrase} onNextClick={onNextClick} validPassPhrase={validPassPhrase} />
    </div>
  );
};


export default RiddleKitkat;

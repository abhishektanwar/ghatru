import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

interface SubmitFormProps {
  passPhrase: string;
  validPassPhrase: string;
  updatePassPhrase: (value: string) => void;
  onNextClick:()=>void;
}

const PassPhraseForm = ({ passPhrase, validPassPhrase, updatePassPhrase, onNextClick }: SubmitFormProps) => {
  const [showAnimation, setAnimation] = useState(false);

  const updateAnimation = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
      onNextClick()
    }, 2000);

  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 space-y-3 font-semibold">
        <input
          type="text"
          value={passPhrase}
          placeholder="Give me secret pass"
          className="outline-none border-b-2 border-lavendarSecondary placeholder:text-center text-lavendarPrimary px-2 bg-transparent text-center"
          onChange={(e) => updatePassPhrase(e.target.value)}
        />
        <button
          disabled={validPassPhrase !== passPhrase}
          className={`lavender-btn block m-w-fit disabled:opacity-50`}
          onClick={updateAnimation}>
          Next Gift
        </button>
      </div>
      <div className="flex justify-center items-center absolute top-1/2 left-1/2	">
        {showAnimation && <ConfettiExplosion force={1.2} duration={3000} particleCount={350} width={1600} />}
      </div>
    </>
  );
};

export default PassPhraseForm;

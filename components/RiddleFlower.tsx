import React,{useState} from 'react';
import PassPhraseForm from './PassPhraseForm';
import { PageProps } from './HomePage';
import { Step, validPassPhrase as validPassPhraseJSON } from '../data';

const RiddleFlower = ({ changeStep }: PageProps) => {
  const [passPhrase, setPassPhrase] = useState('');
  const validPassPhrase = validPassPhraseJSON.riddleFlower;

  const updatePassPhrase = (value) => {
    setPassPhrase(value);
  };

  const onNextClick = ()=>{
    changeStep(Step.RIDDLE_AFTER_EIGHT);
  }

  return (
    <div className="mt-40">
      <div className="space-y-3 flex flex-col justify-center text-center">
        <p>
          Where spirits whisper, and pizzas dance in glee,<br />
          By the haven of vino and a domino jubilee.<br />
          Amidst the realm where petals weave a tale,<br />
          Discover your gift in nature's fragrant regale.<br />

          In the garden where time surrenders its power,<br />
          A floral secret awaits, hidden in a fragrant bower.<br />
        </p>
      </div>
      <PassPhraseForm passPhrase={passPhrase} updatePassPhrase={updatePassPhrase} onNextClick={onNextClick} validPassPhrase={validPassPhrase} />
    </div>
  )
}

export default RiddleFlower;
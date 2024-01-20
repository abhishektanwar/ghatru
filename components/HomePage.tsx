import React,{useState} from 'react';
import giftImage from '../public/images/gift.png';
import CoverPage from './CoverPage';
import { Step } from '../data';
import RiddleKitkat from './RiddleKitkat.tsx';
import RiddleFlower from './RiddleFlower.tsx';
import RiddleAfterEight from './RiddleAfterEight.tsx';
import RiddlePhotoCollection from './RiddlePhotoCollection.tsx';
import RiddleBag from './RiddleBag.tsx';

export interface PageProps{
  changeStep:(step:Step)=>void;
}

const HomePage = () => {
  const [step,setStep] = useState(Step.COVER_PAGE)

  const changeStep = (step:Step) => {
    setStep(step);
  }

  switch(step){
    case Step.COVER_PAGE:
      return <CoverPage changeStep={changeStep} />
    case Step.RIDDLE_KITKAT:
      return <RiddleKitkat changeStep={changeStep} />
    case Step.RIDDLE_FLOWER:
      return <RiddleFlower changeStep={changeStep} />
    case Step.RIDDLE_AFTER_EIGHT:
      return <RiddleAfterEight changeStep={changeStep} />
    case Step.RIDDLE_PHOTO_COLLECTION:
      return <RiddlePhotoCollection changeStep={changeStep} />
    case Step.RIDDLE_BAG:
      return <RiddleBag changeStep={changeStep} />
    default:
      return <h2>Something went wrong! Please contact someone from team :' !!</h2>
  }
}

export default HomePage
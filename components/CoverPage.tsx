import React from 'react';
import giftImage from '../public/images/gift.png';
import { PageProps } from './HomePage';
import { Step } from '../data';



const CoverPage = ({changeStep}:PageProps) => {

  return (
    <div>
    <div className='space-y-3  mt-40'>
      <p>
        On this special day, I've prepared a little journey just for you – a celebration filled with joy, surprises, and, of course, your favorite person (that's me!). As we embark on this adventure together, let the warmth of our love guide you through each delightful moment.
      </p>
      <p>
        Get ready to unlock the magic that awaits, solve the riddles, and discover the treasures that are specially chosen with you in mind. Each step is a reminder of the incredible person you are and the beautiful memories we've created together.
      </p>
      <p>
        May this day be as extraordinary as you are, and may the love surrounding you be as boundless as the stars. Happy Birthday, my love! 🎁✨
      </p>
      <p>Now what are you waiting for? Tap on the gift box below to start this treasure hunt!!!!</p>
      As you solve each riddle, a new chapter of this birthday adventure unfolds. Follow the clues, let your intuition guide you, and may the joy of discovery fill your heart!

Remember, the journey is just as magical as the destination. Happy hunting, [Her Name]! 
    </div>
    <img src={giftImage} className='w-48 h-64 ml-auto mr-auto -translate-x-3 pointer' onClick={()=>changeStep(Step.RIDDLE_KITKAT)}/>
    </div>
  )
}

export default CoverPage;
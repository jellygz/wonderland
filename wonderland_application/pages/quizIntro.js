import { useEffect } from 'react';
import Buttons from '@/components/Buttons';
import Image from 'next/image';
import gifImage from '../public/gifs/blue_ball_bb.gif';
import { RecordContextProvider } from '@/context/RecordContext';
import Restrainer from '@/components/Restrainer';


export default function QuizIntro() {
    

    return (
        <>
        <RecordContextProvider>
        <Restrainer>
           <div>
           <Image src={gifImage} alt="spline ball" />
           </div>
            <div>
                <p>Your memory has been erased <br />
                Take your time to relax <br />
                We will soon begin to embark on a <br />
                journey exploring your deepest thoughts

</p>
            </div>
            <Buttons 
            buttonName="Start"
            routerName="/quiz/1"
            recordA={0}
            recordB={0}
            />
        </Restrainer>
        </RecordContextProvider>
        </>
    );
}

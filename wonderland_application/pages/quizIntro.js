import { useEffect } from 'react';
import Buttons from '@/Components/Buttons';
import Image from 'next/image';
import gifImage from '../public/gifs/blue_ball_bb.gif';


export default function QuizIntro() {
    

    return (
        <>
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
            routerName="/quiz1"
            recordA={0}
            recordB={0}
            />
        </>
    );
}

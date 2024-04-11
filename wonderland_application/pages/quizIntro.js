import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';
import Buttons from '@/Components/Buttons';

export default function QuizIntro() {
    // useEffect(() => {
    //     const canvas = document.getElementById('canvas3d');
    //     const app = new Application(canvas);
    //     app.load('https://prod.spline.design/vIhs7-UOuotuB-f4/scene.splinecode');
    // }, []); 

    return (
        <>
            <div id="canvas3d" style={{ width: 200, height: 200 }}>
                {/* Spline 3D canvas will be attached here */}
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
            />
        </>
    );
}

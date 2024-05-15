import Head from "next/head";
import ResultsTemplate from "@/components/ResultsTemplate";
import { RecordContextProvider } from "@/context/RecordContext";
import { useRouter } from "next/router";
import mainMagician from "@/public/1347 1 (1).png";
import mainPirate from "@/public/818.png";
import mainArcher from "@/public/1337.png";
import mainWarrior from "@/public/1160.png";
import { useSearchParams } from 'next/navigation'
import Image from "next/image";


export default function Result() {
  const router = useRouter();
  const { userName } = router.query;
  
  // const searchParams = useSearchParams();
  // const userName = searchParams.get("userName");
  console.log(userName);
  const radarChartData = {
    magician: [80, 70, 90, 60, 85, 75],
    pirate: [65, 75, 70, 95, 60, 80],
    archer: [70, 90, 85, 75, 80, 60],
    warrior: [75, 80, 65, 85, 90, 70]
  };

  const titleValue = (res) => {
    switch(res) {
        case "magician": return "MAGICIAN";
        case "pirate": return "PIRATE";
        case "archer": return "ARCHER";
        case "warrior": return "WARRIOR";
    }
  }

  const mainImgSrcValue = (res) => {
    switch(res) {
        case "magician": return mainMagician;
        case "pirate": return mainPirate;
        case "archer": return mainArcher;
        case "warrior": return mainWarrior;
    }
  }

  const characteristicsValue = (res) => {
    switch(res) {
        case "magician": return "#creative #resilient #passionate";
        case "pirate": return "#adaptable #thrives-under-pressure";
        case "archer": return "#patient #high-standards #persistence";
        case "warrior": return "#driven #diligent #detail-oriented";
    }
  }

  const descriptionValue = (res) => {
    switch(res) {
        case "magician": return "You are a dreamer who may have grand ideas but lack the focus and motivation to execute your plans.";
        case "pirate": return "You are a crisis-maker who thrives on the adrenaline rush of doing things last minute.";
        case "archer": return "You are a perfectionist who may set unrealistic standards, fearing failure and/or criticism.";
        case "warrior": return "You are an over-doer who tends to take on too much, struggling to prioritize.";
    }
  }

  const secondDescriptionValue = (res) => {
    switch(res) {
        case "magician": return "According to the your graph, one way to overcome your weaknesses would be to visualize yourself achieving all your goals. What steps would you need to take in order to be that self?";
        case "pirate": return "According to the your graph, one way to overcome your weaknesses would be to learn how to prioritize tasks and to tackle the most important ones to avoid anything becoming too overwhelming.";
        case "archer": return "According to the your graph, one way to overcome your weaknesses would be to apply self-compassion into your daily life and to be able to break down big tasks into smaller ones.";
        case "warrior": return "According to the your graph, one way to overcome your weaknesses would be to ask for support from others to avoid any tendencies of over-commiting to tasks";
    }
  }

  const thirdDescriptionValue = (res) => {
    switch(res) {
        case "magician": return (<ul style={{margin: 0, padding:0, textAlign:"left"}}> 
          <li>Set clear, specific goals.</li>
          <li>Prioritize high-impact tasks.</li>
          <li>Establish daily routines.</li>
          <li>Minimize distractions.</li>
          <li>Seek accountability partners.</li>
          <li>Visualize achieving goals daily.</li>
          </ul>);
        case "pirate": return (<ul style={{margin: 0, padding:0}}>
          <li>Schedule tasks early.</li>
          <li>Break projects into steps.</li>
          <li>Use organizational tools.</li>
          <li>Focus on priorities first.</li>
          <li>Practice mindfulness daily.</li>
          <li>Seek feedback regularly.</li>
          </ul>);
        case "archer": return (<ul style={{margin: 0, padding:0}}>
          <li>Practice self-compassion.</li>
          <li>Set realistic goals.</li>
          <li>Break tasks into steps.</li>
          <li>Accept mistakes.</li>
          <li>Focus on progress.</li>
          <li>Celebrate small accomplishments.</li>
          </ul>);
        case "warrior": return (<ul style={{margin: 0, padding:0}}>
          <li>Prioritize tasks effectively.</li>
          <li>Delegate when possible.</li>
          <li>Set realistic limits.</li>
          <li>Take regular breaks.</li>
          <li>Ask for support.</li>
          <li>Focus on essential tasks.</li>
          </ul>);
    }
  }

  const leftMatchImageValue = (res) => {
    switch(res) {
        case "magician": return (
          <Image style={{height: "auto"}}
          src="/1337.png"
          alt="Archer"
          width={155} 
          height={200} />
        )
        case "pirate": return (
          <Image style={{height: "auto"}}
          src="/818.png"
          alt="Pirate"
          width={155} 
          height={200} />
        )
        case "archer": return (
          <Image style={{height: "auto"}}
          src="/818.png"
          alt="Pirate"
          width={155} 
          height={200} />
        )
        case "warrior": return (
          <Image style={{height: "auto"}}
          src="/1337.png"
          alt="Archer"
          width={155} 
          height={200} />
        )
    }
  }

  const rightMatchImageValue = (res) => {
    switch(res) {
        case "magician": return (
          <Image style={{height: "auto"}}
          src="/818.png"
          alt="Pirate"
          width={155} 
          height={200} />
        )
        case "pirate": return (
          <Image style={{height: "auto"}}
          src="/1347 1 (1).png"
          alt="Magician"
          width={155} 
          height={200} />
        )
        case "archer": return (
          <Image style={{height: "auto"}}
          src="/1160.png"
          alt="Warrior"
          width={155} 
          height={200} />
        )
        case "warrior": return (
          <Image style={{height: "auto"}}
          src="/1160.png"
          alt="Warrior"
          width={155} 
          height={200} />
        )
    }
  }

  const leftMatchTextValue = (res) => {
    switch(res) {
        case "magician": return "ARCHER";
        case "pirate": return "PIRATE";
        case "archer": return "PIRATE";
        case "warrior": return "ARCHER";
    }
  }

  const rightMatchTextValue = (res) => {
    switch(res) {
        case "magician": return "PIRATE";
        case "pirate": return "MAGICIAN";
        case "archer": return "WARRIOR";
        case "warrior": return "WARRIOR";
    }
  }

  return (
    <>
      <Head>
        <title>Wonderland</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.query.title &&
        <ResultsTemplate
          title={titleValue(router.query.title)}
          mainImageSrc={mainImgSrcValue(router.query.title)}
          characteristics={characteristicsValue(router.query.title)}
          description={descriptionValue(router.query.title)}
          radarData={radarChartData[router.query.title.toLowerCase()]}
          userName={userName}
          secondDescription={secondDescriptionValue(router.query.title)}
          thirdDescription={thirdDescriptionValue(router.query.title)}
          leftMatchImage={leftMatchImageValue(router.query.title)}
          rightMatchImage={rightMatchImageValue(router.query.title)}
          leftMatchText={leftMatchTextValue(router.query.title)}
          rightMatchText={rightMatchTextValue(router.query.title)}
        />
      }
    </>
  )
}

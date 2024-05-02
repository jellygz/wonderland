import Head from "next/head";
import ResultsTemplate from "@/components/ResultsTemplate";
import { RecordContextProvider } from "@/context/RecordContext";
import { useRouter } from "next/router";
import mainMagician from "@/public/1347 1 (1).png";
import mainPirate from "@/public/818.png";
import mainArcher from "@/public/1337.png";
import mainWarrior from "@/public/1160.png";


export default function Result() {
  const router = useRouter();

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
        />
      }
    </>
  )
}

import { RecordContextProvider } from "@/context/RecordContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <RecordContextProvider>
      <Component {...pageProps} />
    </RecordContextProvider>
  )
}

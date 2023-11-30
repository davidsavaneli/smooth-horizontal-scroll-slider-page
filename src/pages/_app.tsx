import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useDynamicVh, useScrollTopOnRoute } from "hooks";
import { Header } from "components";

import 'assets/css/styles.css';

const App = ({ Component, router, pageProps }: AppProps) => {
  useDynamicVh();
  useScrollTopOnRoute();

  if (router.route === "/404" || router.route === "/500")
    return <Component {...pageProps} />;
  return (
    <div>
      {/* <Header /> */}
      <AnimatePresence mode="wait">
        <main key={router.route}>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </div>
  );
};

export default App;

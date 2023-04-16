import { Headers } from "./Header";
import { Footer } from "./Footer";
import { HomeCover } from "./HomeCover";
import { Slider } from "./Slider";

export function Home() {
  return (
    <div>
      <Headers />
      <HomeCover />
      <Slider />
      <Footer />


    </div>
  );
}


import { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress > 0 && progress < 1) return 1;
  return 0.2;
};

const Skills = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY = Math.min(
      clientHeight + halfH,
      Math.max(-screenH, scrollY - offsetTop) + halfH / clientHeight
    );

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-q-5xl mx-auto px-10 lg:px-20 py-23 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]"></div>
        <div
          className={s.skillText}
          style={{
            opacity: opacityForBlock(progress, 0),
          }}
        >
          We know our tools outside in.
        </div>
        <span
          className={`${s.skillText} inline-block after:content-['_']`}
          style={{
            opacity: opacityForBlock(progress, 1),
          }}
        >
          In other words, we have no idea what we&apos;re doing
        </span>
        <span
          className={`${s.skillText} inline-block`}
          style={{
            opacity: opacityForBlock(progress, 2),
          }}
        >
          What we do know however, is how to build an exciting, revolutionary
          next-generation <strong>hello world</strong> app
        </span>
      </div>
    </div>
  );
};

export default Skills;

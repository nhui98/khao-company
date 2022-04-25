import { createContext, useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

interface WrapperProps {
  children: any;
  numberOfPages: number;
}

interface TileContextValue {
  numberOfPages: number;
  currentPage: number;
}

export const TileContext = createContext<TileContextValue>({
  numberOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numberOfPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let currentPage = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;

    const halfH = screenH / 2;
    const precentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = precentY * numberOfPages;
  }

  return (
    <TileContext.Provider value={{ numberOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{
          height: numberOfPages * 100 + "vh",
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground = ({ children }: any): JSX.Element => (
  <div className="absolute h-full w-full">{children}</div>
);

export const TileContent = ({ children }: any): JSX.Element => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { currentPage, numberOfPages } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);
  const refContainer = useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numberOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};

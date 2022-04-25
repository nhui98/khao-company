import { TileWrapper, TileBackground, TileContent, Tile } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numberOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                We&apos;ve built
              </div>
              <div className="text-center">...</div>
            </WorkLeft>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Wait For It
              </div>
              <div className="text-center">...</div>
            </WorkLeft>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Absolutely
              </div>
              <div className="text-center">Nothing</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/nothing.jpg"
                layout="responsive"
                width={1200}
                height={1620}
                alt="nothing"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;

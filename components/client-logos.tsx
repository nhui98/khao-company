import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src="/assets/no-trustedby.svg"
            width={150}
            height={50}
            alt="trusted by"
            objectFit="contain"
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;

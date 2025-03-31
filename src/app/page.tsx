import Image from "next/image";
import Logo from "../../public/LMS-Video.gif";
import BackgroundImageUpper from "../../public/assets/3.jpg";
import BackgroundImageLower from "../../public/assets/4.jpg";

export default function IndexPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="relative h-screen flex flex-col items-center justify-center">
        <Image src={Logo} alt="LMS Logo" layout="responsive" />
        <div className="scroller w-full overflow-hidden whitespace-nowrap relative  flex items-center">
          <div className="scroller-inner text-5xl font-bold uppercase">
            Coming Soon • Coming Soon • Coming Soon • Coming Soon • Coming Soon
            •
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full h-1/2 min-h-[50vh]">
          <Image
            src={BackgroundImageUpper}
            alt="Upper Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-1/2 min-h-[50vh]">
          <Image
            src={BackgroundImageLower}
            alt="Lower Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  );
}

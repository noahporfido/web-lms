import Image from "next/image";

export default function IndexPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-full">
      <div className="relative h-screen md:h-full flex flex-col items-center">
        <Image
          src={"/LMS-Video.gif"}
          alt="LMS Logo"
          width={0}
          height={0}
          layout="responsive"
        ></Image>
        <div className="scroller w-full overflow-hidden whitespace-nowrap relative">
          <div className="scroller-inner text-5xl font-bold uppercase">
            Coming Soon • Coming Soon • Coming Soon • Coming Soon • Coming Soon
            •
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col items-center w-full  bg-cover bg-center h-1/2 min-h-[50vh]"
          style={{ backgroundImage: "url('/assets/3.jpg')" }}
        ></div>
        <div
          className="flex flex-col items-center w-full  bg-cover bg-center h-1/2 min-h-[50vh]"
          style={{ backgroundImage: "url('/assets/4.jpg')" }}
        ></div>
      </div>
    </main>
  );
}

export default function Gallery() {
  return (
    <>
      <div id="gallery" className="text-neutral-900 text-xl font-semibold uppercase self-center whitespace-nowrap mt-24 max-md:mt-10">
        VEJA MAIS DO NOSSO TRABALHO
      </div>
      <div className="text-neutral-900 text-center text-6xl font-extrabold leading-[50.22px] uppercase self-center whitespace-nowrap mt-2 max-md:text-4xl">
        GALERIA DE FOTOS
      </div>
      <div className="self-center w-full max-w-[1000px] mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-sm:items-center w-[59%] max-md:w-full max-md:ml-0">
            <img
              src="./gallery/1.png"
              className="aspect-[2.3] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch max-sm:items-center w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="./gallery/2.png"
              className="aspect-[1.62] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1000px] mt-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-sm:items-center w-[24%] max-md:w-full max-md:ml-0">
            <img
              src="./gallery/3.png"
              className="aspect-[0.94] object-contain object-center w-[235px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch max-sm:items-center w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="./gallery/4.png"
              className="aspect-[2.98] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1000px] mt-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-sm:items-center w-[67%] max-md:w-full max-md:ml-0">
            <img
              src="./gallery/5.png"
              className="aspect-[2.64] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch max-sm:items-center w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="./gallery/6.png"
              className="aspect-[1.28] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

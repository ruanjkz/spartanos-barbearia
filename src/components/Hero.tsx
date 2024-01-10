import Header from "./Header"

export default function Hero() {
  return (
    <div className="flex-col  overflow-hidden self-stretch relative flex min-h-[800px] w-full items-center pt-8 pb-12 px-16 max-md:max-w-full max-md:px-5">
      <img src="./hero.png" className="absolute object-cover h-full w-full  inset-0" />
      <div className="relative flex w-full max-w-[1000px]  flex-col mb-36 max-md:max-w-full max-md:mb-10">
        <Header/>
        <div className="text-primary text-8xl font-bold leading-[90px] self-stretch max-sm:mt-44 max-sm:self-center mt-40 max-md:max-w-full max-sm:text-center max-md:text-4xl max-md:leading-10 max-md:mt-10">
          <span className="text-white">A MELHOR BARBEARIA</span>
          <br />
          <span className="text-primary">DE SÃO PAULO!</span>
        </div>
        <div className="text-white text-opacity-70 text-xl font-medium leading-7 uppercase self-stretch max-sm:text-center mt-3 max-md:max-w-full">
          OFERECEMOS UM ATENDIMENTO DE QUALIDADE, CERVEJA GELADA, MúSICA boa
          <br />E OS MELHORES BARBEIROS DA REGIÃO.
        </div>
        <button className="text-neutral-900 text-xl font-medium leading-7 uppercase justify-center max-sm:self-center items-stretch bg-primary mt-8 px-9 py-3 rounded-sm self-start max-md:max-w-full max-md:px-5">
          MARCAR HORÁRIO
        </button>
      </div>
    </div>
  );
}

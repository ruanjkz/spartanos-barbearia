'use client'
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <div className="justify-between items-center self-stretch flex w-full gap-5 max-md:max-w-full max-md:flex-wrap">
      <div className="items-start self-stretch flex justify-between gap-5 max-sm:hidden">
        <span className="text-white text-sm font-medium uppercase whitespace-nowrap cursor-pointer justify-center items-stretch self-stretch aspect-[0.7142857142857143] py-2.5 ">
          ínicio
        </span>
        <div className="text-white text-sm font-medium uppercase self-center cursor-pointer my-auto">
          quem somos
        </div>
        <div className="text-white text-sm font-medium uppercase self-center cursor-pointer my-auto">
          SERVIÇOS
        </div>
        <div className="text-white text-sm font-medium uppercase cursor-pointer self-center grow whitespace-nowrap my-auto">
          CONTATO
        </div>
      </div>
      <img
        src="./Logo.png"
        className="aspect-[3.7] object-contain object-center w-[122px] overflow-hidden shrink-0 max-w-full my-auto"
      />
      <div className="justify-between items-stretch self-stretch flex gap-5 pl-2.5">
        <FaInstagram className="aspect-square cursor-pointer object-contain object-center w-3.5 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"/>
        <FaFacebook className="aspect-square cursor-pointer object-contain object-center w-3.5 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"/>
        <button className="text-neutral-900 text-sm font-medium uppercase whitespace-nowrap justify-center items-stretch bg-primary grow px-6 py-2.5 rounded-sm max-md:px-5">
          MARCAR HORÁRIO
        </button>
      </div>
    </div>
  );
}

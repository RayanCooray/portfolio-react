import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiJava, DiNodejs, DiCss3 } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandHtml5 className="text-5xl text-orange-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-5xl text-green-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandReactNative className="text-5xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJava className="text-5xl text-orange-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejs className="text-5xl text-green-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-5xl text-blue-600" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-5xl text-blue-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-5xl text-teal-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-5xl text-blue-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-5xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
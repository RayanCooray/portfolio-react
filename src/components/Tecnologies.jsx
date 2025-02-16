import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript, SiAntdesign, SiNodedotjs, SiJavascript, SiExpress, SiMicrosoftazure, SiFigma, SiAdobexd, SiNestjs,SiLunacy,SiShadcnui } from "react-icons/si";
import { DiJava, DiNodejs, DiCss3 } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Technologies</h1>
      
      {/* Frontend Technologies */}
      <h2 className="text-3xl text-center my-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">Frontend</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <TbBrandReactNative className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiNextdotjs className="text-5xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <TbBrandHtml5 className="text-5xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <DiCss3 className="text-5xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiTailwindcss className="text-5xl text-teal-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiTypescript className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiJavascript className="text-5xl text-yellow-400" />
        </div>
      </div>
      
      {/* Backend Technologies */}
      <h2 className="text-3xl text-center my-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">Backend</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiNodedotjs className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiNestjs className="text-5xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiExpress className="text-5xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <DiNodejs className="text-5xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <DiJava className="text-5xl text-orange-600" />
        </div>
      </div>

      {/* Database Technologies */}
      <h2 className="text-3xl text-center my-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">Database</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiMongodb className="text-5xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiMysql className="text-5xl text-blue-500" />
        </div>
      </div>

      {/* UI/UX Technologies */}
      <h2 className="text-3xl text-center my-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">UI/UX</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiFigma className="text-5xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiAdobexd className="text-5xl text-red-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiAntdesign className="text-5xl text-cyan-400" />
        </div>
        {/* <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiLunacy className="text-5xl text-pink-400" />
        </div> */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiShadcnui className="text-5xl text-slate-400" />
        </div>
      </div>

      {/* Cloud Technologies */}
      <h2 className="text-3xl text-center my-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-transparent bg-clip-text font-semibold">Cloud</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 shadow-lg bg-neutral-900">
          <SiMicrosoftazure className="text-5xl text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
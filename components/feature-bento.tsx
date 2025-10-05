"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function FeaturesBento() {
  return (
    <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-2 px-8 mt-20">
      <Card className="col-span-12 sm:col-span-4 h-[300px] retro-card border-2 border-cyber-blue-400 bg-gradient-to-br from-cyber-blue-500 to-retro-blue-700">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-cyan-300 uppercase font-bold tracking-wider">
            WHAT TO WATCH
          </p>
          <h4 className="text-white font-bold text-large neon-text">
            Stream the Acme event
          </h4>
        </CardHeader>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 z-0"></div>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] retro-card border-2 border-cyan-400 bg-gradient-to-br from-retro-blue-600 to-cyber-blue-800">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-cyan-300 uppercase font-bold tracking-wider">
            PLANT A TREE
          </p>
          <h4 className="text-white font-bold text-large">
            Contribute to the planet
          </h4>
        </CardHeader>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px] opacity-30 z-0"></div>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] retro-card border-2 border-cyber-blue-500 bg-gradient-to-br from-cyber-blue-600 to-retro-blue-900">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-cyan-300 uppercase font-bold tracking-wider">
            SUPERCHARGED
          </p>
          <h4 className="text-white font-bold text-large">
            Creates beauty like a beast
          </h4>
        </CardHeader>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-40 z-0"></div>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 retro-card border-2 border-cyan-400 bg-gradient-to-br from-white to-cyber-blue-100"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-cyber-blue-700 uppercase font-bold tracking-wider border-2 border-cyber-blue-500 bg-cyan-300 px-2 py-1 rounded">NEW</p>
          <h4 className="text-cyber-blue-900 font-bold text-2xl mt-2">Acme camera</h4>
        </CardHeader>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,136,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px] opacity-50 z-0"></div>
        <CardFooter className="absolute cyber-panel bottom-0 border-t-2 border-cyan-400 z-10 justify-between">
          <div>
            <p className="text-cyber-blue-900 text-tiny font-bold">Available soon.</p>
            <p className="text-cyber-blue-700 text-tiny font-semibold">Get notified.</p>
          </div>
          <Button className="text-tiny font-bold bg-gradient-to-r from-cyber-blue-500 to-retro-blue-700 text-white border-2 border-cyan-400 shadow-neon-blue" radius="full" size="sm">
            Notify Me
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 retro-card border-2 border-cyber-blue-500 bg-gradient-to-br from-cyber-blue-700 to-retro-blue-900"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-cyan-300 uppercase font-bold tracking-wider">
            YOUR DAY YOUR WAY
          </p>
          <h4 className="text-white font-bold text-xl">
            Your checklist for better sleep
          </h4>
        </CardHeader>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 z-0"></div>
        <CardFooter className="absolute cyber-panel bottom-0 z-10 border-t-2 border-cyan-400">
          <div className="flex flex-grow gap-2 items-center">
            <div className="rounded-full w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyber-blue-600 border-2 border-cyan-300 flex items-center justify-center">
              <div className="w-6 h-6 bg-white/20 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <p className="text-tiny text-white font-bold">Breathing App</p>
              <p className="text-tiny text-cyan-300 font-semibold">
                Get a good night&apos;s sleep.
              </p>
            </div>
          </div>
          <Button className="font-bold bg-cyan-400 text-retro-blue-900 border-2 border-cyan-300 shadow-neon-cyan" radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

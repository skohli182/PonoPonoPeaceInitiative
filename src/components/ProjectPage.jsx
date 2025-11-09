import React from "react";
import Logo from "../images/ponologo.png";
import "./ProjectPage.css";

const theme = {
  card: "#DFCEB9", // orange tile
  maroon: "#193D40", // featured project tile color
  border: "#F8F8F3",
};

function Tile({ title = "Placeholder", badge = true }) {
  return (
    <div
      className="relative rounded-3xl p-6 text-white shadow-sm"
      style={{ backgroundColor: theme.card }}
    >
      {badge && (
        <span className="absolute right-3 top-3 w-7 h-7 grid place-items-center rounded-full bg-white/40 text-white font-bold">
          +
        </span>
      )}
      {/* icon placeholder */}
      <div className="w-12 h-12 mb-6 rounded-full bg-white/30" />
      <div className="text-2xl font-semibold">{title}</div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#FFFCF6] text-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* ===== Hero grid ===== */}
        <section className="grid md:grid-cols-4 gap-6">
          {/* Featured left tile (maroon) */}
          <div
            className="md:col-span-1 rounded-3xl p-6 text-amber-100 shadow-sm flex flex-col justify-between"
            style={{ backgroundColor: theme.maroon }}
          >
            <div>
              <div className="w-14 h-14 mb-6 rounded-full bg-white/25" />
              <div className="text-2xl font-semibold">
                Computers for
                <br /> College
              </div>
            </div>

            <div className="mt-8 grid grid-cols-6 gap-3 opacity-80">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-orange-300/70"
                />
              ))}
            </div>
          </div>

          {/*  Tiles */}
          <Tile title="Tracing Shared Lineage" />
          <Tile title="Placeholder" />
          <Tile title="PlaceHolder" />
          <Tile title="Empowering Next Generation" />
          <Tile title="PlaceHolder" />
          <Tile title="PlaceHolder" />
        </section>
      </div>
    </main>
  );
}

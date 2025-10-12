"use client";

import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useCursor } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";

import CaseStudyModal from "./CaseStudyModal";
import type { ProjectSummary } from "./types";

function ProjectCard3D({
  index,
  project,
  isActive,
  onSelect,
  onOpenDetails,
}: {
  index: number;
  project: ProjectSummary;
  isActive: boolean;
  onSelect: (index: number) => void;
  onOpenDetails: (index: number) => void;
}) {
  const depthOffset = index * -0.08;
  const rotationOffset = index * 0.08;
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  return (
    <mesh
      position={[index * 0.12, depthOffset, depthOffset]}
      rotation={[
        0.12 + rotationOffset,
        -0.2 + rotationOffset / 2,
        rotationOffset / 2,
      ]}
      scale={isActive ? 1.06 : 1}
      onClick={() => onSelect(index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1.5, 1, 0.08]} />
      <meshStandardMaterial
        color={`hsl(${180 + index * 12}, ${isActive ? 70 : 65}%, ${
          isActive ? 62 : 55
        }%)`}
        metalness={0.3}
        roughness={0.4}
      />
      <Html position={[0, 0, 0.055]} center transform>
        <div className="w-56 rounded-xl border border-white/10 bg-slate-950/70 p-4 text-left text-xs text-slate-100 shadow-lg backdrop-blur">
          <h4 className="text-sm font-semibold text-white">{project.title}</h4>
          <p className="mt-2 leading-relaxed text-slate-300/90">
            {project.summary}
          </p>
          <button
            type="button"
            onClick={() => onOpenDetails(index)}
            disabled={!project.caseStudy}
            className={`mt-3 inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1 text-[0.7rem] font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 ${
              project.caseStudy
                ? "bg-white/5 text-emerald-100 hover:border-emerald-200/50 hover:text-emerald-50"
                : "cursor-not-allowed bg-white/5 text-slate-500"
            }`}
            aria-disabled={!project.caseStudy}
          >
            View details
            <span aria-hidden>↗</span>
          </button>
        </div>
      </Html>
    </mesh>
  );
}

export default function ThreeDCardStack({
  projects,
}: {
  projects: ProjectSummary[];
}) {
  const safeProjects = useMemo(() => projects.slice(0, 4), [projects]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const selectedProject = safeProjects[selectedIndex];

  useEffect(() => {
    if (selectedIndex >= safeProjects.length) {
      setSelectedIndex(Math.max(safeProjects.length - 1, 0));
    }
  }, [safeProjects, selectedIndex]);

  useEffect(() => {
    if (!selectedProject?.caseStudy && isDetailOpen) {
      setIsDetailOpen(false);
    }
  }, [isDetailOpen, selectedProject]);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
  };

  const handleOpenDetails = (index: number) => {
    setSelectedIndex(index);
    if (safeProjects[index]?.caseStudy) {
      setIsDetailOpen(true);
    }
  };

  const handleCloseDetails = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/10">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 1.75]}
        style={{ height: "20rem" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2.5, 2.5, 3]} intensity={0.6} />
        <Suspense fallback={null}>
          {safeProjects.map((project, index) => (
            <ProjectCard3D
              key={project.title}
              index={index}
              project={project}
              isActive={selectedIndex === index}
              onSelect={handleSelect}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
        />
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071021]"
        aria-hidden
      />
      {safeProjects.length > 0 && selectedProject && (
        <div className="relative z-10 space-y-4 border-t border-white/5 bg-slate-950/60 px-6 py-6 backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                Case study snapshot
              </p>
              <h3 className="text-lg font-semibold text-white">
                {selectedProject.title}
              </h3>
            </div>
            <div
              role="tablist"
              aria-label="Select project"
              className="flex flex-wrap gap-2"
            >
              {safeProjects.map((project, index) => (
                <button
                  key={project.title}
                  role="tab"
                  aria-selected={selectedIndex === index}
                  onClick={() => handleSelect(index)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                    selectedIndex === index
                      ? "bg-emerald-300/25 text-emerald-100"
                      : "bg-white/5 text-slate-300 hover:text-emerald-100"
                  }`}
                  type="button"
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-slate-300/90">
            <dl className="grid gap-4 md:grid-cols-2">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Challenge
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-200/90">
                  {selectedProject.challenge}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Outcome
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate-200/90">
                  {selectedProject.outcome}
                </dd>
              </div>
            </dl>

            <div className="flex flex-wrap gap-2">
              {selectedProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <ul className="space-y-2 text-sm text-emerald-200/90">
                {selectedProject.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2">
                    <span aria-hidden>▹</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            )}

            {(selectedProject.caseStudy || selectedProject.link) && (
              <div className="flex flex-wrap gap-3">
                {selectedProject.caseStudy && (
                  <button
                    type="button"
                    onClick={() => handleOpenDetails(selectedIndex)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/50 hover:text-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                  >
                    View full case study
                    <span aria-hidden>↗</span>
                  </button>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-emerald-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {selectedProject.link.label}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <CaseStudyModal
        open={isDetailOpen}
        onClose={handleCloseDetails}
        project={selectedProject ?? null}
      />
    </div>
  );
}

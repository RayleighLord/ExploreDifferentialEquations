import { describe, expect, it } from "vitest";

import { explorers } from "../catalog";

const expectedIds = [
  "scalar-ode-explorer",
  "phase-portrait-explorer",
  "fourier-series-explorer",
  "pde-characteristics-explorer",
  "wave-equation-explorer",
  "heat-equation-explorer",
  "elliptic-problems-explorer",
];

const expectedUrls = [
  "https://rayleighlord.github.io/ScalarODEsVisualizer/",
  "https://rayleighlord.github.io/PhasePortraitVisualizer/",
  "https://rayleighlord.github.io/FourierSeries/",
  "https://rayleighlord.github.io/CharacteristicsPDE/",
  "https://rayleighlord.github.io/WaveEquation/",
  "https://rayleighlord.github.io/HeatEquation/",
  "https://rayleighlord.github.io/EllipticProblems/",
];

describe("explorer catalog", () => {
  it("keeps the approved seven-card order", () => {
    expect(explorers.map(({ id }) => id)).toEqual(expectedIds);
    expect(explorers.map(({ title }) => title)).toEqual([
      "Scalar Differential Equations",
      "Phase Portrait",
      "Fourier Series",
      "PDE Characteristics",
      "Wave Equation",
      "Heat Equation",
      "Elliptic Problems",
    ]);
  });

  it("uses the canonical deployed application URLs", () => {
    expect(explorers.map(({ url }) => url)).toEqual(expectedUrls);
  });

  it("shows both planar equations in the phase-portrait formula", () => {
    expect(explorers.find(({ id }) => id === "phase-portrait-explorer")?.formula).toBe(
      String.raw`x'=f(x,y),\quad y'=g(x,y)`,
    );
  });

  it("shows the real trigonometric Fourier series", () => {
    expect(explorers.find(({ id }) => id === "fourier-series-explorer")?.formula).toBe(
      String.raw`f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right)`,
    );
  });

  it("shows the one-dimensional heat equation", () => {
    expect(explorers.find(({ id }) => id === "heat-equation-explorer")?.formula).toBe(
      String.raw`u_t=u_{xx}`,
    );
  });

  it("shows the representative equations for the new PDE explorers", () => {
    expect(explorers.find(({ id }) => id === "pde-characteristics-explorer")?.formula).toBe(
      String.raw`a\,u_x+b\,u_y=c`,
    );
    expect(explorers.find(({ id }) => id === "wave-equation-explorer")?.formula).toBe(
      String.raw`u_{tt}-u_{xx}=0`,
    );
    expect(explorers.find(({ id }) => id === "elliptic-problems-explorer")?.formula).toBe(
      String.raw`\Delta u=f`,
    );
  });

  it("keeps identifiers unique and URL-safe", () => {
    expect(new Set(explorers.map(({ id }) => id)).size).toBe(explorers.length);
    expect(explorers.every(({ id }) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))).toBe(true);
  });

  it("points every card at its corresponding local WebP preview", () => {
    expect(explorers.map(({ preview }) => preview)).toEqual(
      expectedIds.map((id) => `./previews/${id}.webp`),
    );
  });

  it("provides complete learner-facing content and accessible accent colors", () => {
    for (const explorer of explorers) {
      expect(explorer.title.trim()).not.toBe("");
      expect(explorer.topic.trim()).not.toBe("");
      expect(explorer.formula.trim()).not.toBe("");
      expect(explorer.description.trim()).not.toBe("");
      expect(explorer.accent).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });
});

import { describe, expect, it } from "vitest";

import { explorers } from "../catalog";

const expectedIds = ["scalar-ode-explorer", "phase-portrait-explorer"];

const expectedUrls = [
  "https://rayleighlord.github.io/ScalarODEsVisualizer/",
  "https://rayleighlord.github.io/PhasePortraitVisualizer/",
];

describe("explorer catalog", () => {
  it("keeps the approved two-card order", () => {
    expect(explorers.map(({ id }) => id)).toEqual(expectedIds);
    expect(explorers.map(({ title }) => title)).toEqual([
      "Scalar ODE Explorer",
      "Phase Portrait Explorer",
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

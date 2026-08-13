export interface Explorer {
  readonly id: string;
  readonly title: string;
  readonly topic: string;
  readonly formula: string;
  readonly description: string;
  readonly url: string;
  readonly preview: string;
  readonly accent: string;
}

export const explorers: readonly Explorer[] = [
  {
    id: "scalar-ode-explorer",
    title: "Scalar Differential Equations",
    topic: "First-order scalar equations",
    formula: String.raw`y'=f(y,t)`,
    description:
      "Draw integral curves on a live direction field, detect equilibria, and reveal the one-dimensional phase flow.",
    url: "https://rayleighlord.github.io/ScalarODEsVisualizer/",
    preview: "./previews/scalar-ode-explorer.webp",
    accent: "#08776f",
  },
  {
    id: "phase-portrait-explorer",
    title: "Phase Portrait",
    topic: "Planar autonomous systems",
    formula: String.raw`x'=f(x,y),\quad y'=g(x,y)`,
    description:
      "Trace trajectories through a planar vector field, locate equilibria, and examine their classification and local stability.",
    url: "https://rayleighlord.github.io/PhasePortraitVisualizer/",
    preview: "./previews/phase-portrait-explorer.webp",
    accent: "#5846b8",
  },
  {
    id: "fourier-series-explorer",
    title: "Fourier Series",
    topic: "Periodic functions",
    formula: String.raw`f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}\left(a_n\cos nx+b_n\sin nx\right)`,
    description:
      "Explore the Fourier series of a periodic function, vary the number of harmonics, and inspect its partial-sum reconstruction.",
    url: "https://rayleighlord.github.io/FourierSeries/",
    preview: "./previews/fourier-series-explorer.webp",
    accent: "#a64b17",
  },
  {
    id: "heat-equation-explorer",
    title: "1D Heat Equation",
    topic: "One-dimensional diffusion",
    formula: String.raw`u_t=u_{xx}`,
    description:
      "Select an initial profile temperature profile on a one-dimensional rod and explore the time evolution of the temperature",
    url: "https://rayleighlord.github.io/HeatEquation/",
    preview: "./previews/heat-equation-explorer.webp",
    accent: "#006f86",
  },
];

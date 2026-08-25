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
    id: "pde-characteristics-explorer",
    title: "PDE Characteristics",
    topic: "First-order quasilinear PDEs",
    formula: String.raw`a\,u_x+b\,u_y=c`,
    description:
      "Trace characteristic curves from Cauchy data and inspect the corresponding solution surface for first-order quasilinear partial differential equations.",
    url: "https://rayleighlord.github.io/CharacteristicsPDE/",
    preview: "./previews/pde-characteristics-explorer.webp",
    accent: "#2369a8",
  },
  {
    id: "wave-equation-explorer",
    title: "Wave Equation",
    topic: "One-dimensional wave propagation",
    formula: String.raw`u_{tt}-u_{xx}=0`,
    description:
      "Explore one-dimensional waves on infinite, semi-infinite, and finite domains, including propagation, reflection, and characteristic paths.",
    url: "https://rayleighlord.github.io/WaveEquation/",
    preview: "./previews/wave-equation-explorer.webp",
    accent: "#00776f",
  },
  {
    id: "heat-equation-explorer",
    title: "Heat Equation",
    topic: "One-dimensional diffusion",
    formula: String.raw`u_t=u_{xx}`,
    description:
      "Explore how initial temperature profiles evolve under the one-dimensional heat equation.",
    url: "https://rayleighlord.github.io/HeatEquation/",
    preview: "./previews/heat-equation-explorer.webp",
    accent: "#006f86",
  },
  {
    id: "elliptic-problems-explorer",
    title: "Elliptic Problems",
    topic: "Poisson and Laplace equations",
    formula: String.raw`\Delta u=f`,
    description:
      "Study separated modal solutions of Poisson and Laplace equations on rectangles, circular sectors, and disks with Dirichlet or Neumann data.",
    url: "https://rayleighlord.github.io/EllipticProblems/",
    preview: "./previews/elliptic-problems-explorer.webp",
    accent: "#a34236",
  },
];

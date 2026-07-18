import { renderToString } from "katex";

import { explorers, type Explorer } from "./catalog";

function renderMath(source: string): string {
  return renderToString(source, {
    output: "htmlAndMathml",
    strict: false,
    throwOnError: false,
  });
}

function createExplorerCard(explorer: Explorer, index: number): HTMLAnchorElement {
  const card = document.createElement("a");
  card.className = "explorer-card";
  card.href = explorer.url;
  card.dataset.explorerId = explorer.id;
  card.style.setProperty("--card-accent", explorer.accent);

  const preview = document.createElement("div");
  preview.className = "card-preview";

  const image = document.createElement("img");
  image.src = explorer.preview;
  image.alt = "";
  image.width = 960;
  image.height = 540;
  image.decoding = "async";
  image.loading = index < 2 ? "eager" : "lazy";
  if (index < 2) image.fetchPriority = "high";
  preview.append(image);

  const body = document.createElement("div");
  body.className = "card-body";

  const meta = document.createElement("span");
  meta.className = "card-meta";

  const topic = document.createElement("span");
  topic.className = "card-topic";
  topic.textContent = explorer.topic;

  const formula = document.createElement("span");
  formula.className = "card-formula";
  formula.innerHTML = renderMath(explorer.formula);
  meta.append(topic, formula);

  const title = document.createElement("h3");
  title.textContent = explorer.title;

  const description = document.createElement("p");
  description.textContent = explorer.description;

  const cta = document.createElement("span");
  cta.className = "card-cta";
  cta.innerHTML = `
    <span>Open visualization</span>
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  `;

  body.append(meta, title, description, cta);
  card.append(preview, body);
  return card;
}

function setupAboutDisclosure(): void {
  const toggle = document.querySelector<HTMLButtonElement>("#about-toggle");
  const panel = document.querySelector<HTMLElement>("#about-panel");
  const disclosure = document.querySelector<HTMLElement>(".about-disclosure");
  if (!toggle || !panel || !disclosure) {
    throw new Error("About disclosure was not rendered.");
  }

  const setExpanded = (expanded: boolean): void => {
    toggle.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
  };

  toggle.addEventListener("click", () => {
    setExpanded(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("click", (event) => {
    if (event.target instanceof Node && !disclosure.contains(event.target)) {
      setExpanded(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setExpanded(false);
      toggle.focus();
    }
  });
}

export function renderApp(): void {
  const root = document.querySelector<HTMLDivElement>("#app");
  if (!root) throw new Error("Missing #app mount point.");

  root.innerHTML = `
    <div class="site-background" aria-hidden="true"></div>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Explore Differential Equations home">
        <img src="./logo.svg" alt="" width="42" height="42" />
        <span class="brand-copy">
          <strong>Explore Differential Equations</strong>
          <span>Interactive course materials</span>
        </span>
      </a>
    </header>

    <main id="top">
      <section class="academic-intro" aria-labelledby="page-title">
        <p class="eyebrow">Interactive course materials</p>
        <h1 id="page-title">Differential Equations Visualizations</h1>
      </section>

      <section class="collection" aria-label="Interactive differential equations visualizations">
        <div id="explorer-grid" class="explorer-grid" tabindex="-1"></div>
      </section>
    </main>

    <footer class="site-footer">
      <a class="footer-brand" href="#top" aria-label="Explore Differential Equations home">
        <img src="./logo.svg" alt="" width="32" height="32" />
        <span>Explore Differential Equations</span>
      </a>
      <div class="about-disclosure">
        <button
          id="about-toggle"
          class="about-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="about-panel"
        >
          About
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>
        <p id="about-panel" class="about-panel" hidden>
          These resources were developed by
          <a href="https://github.com/rayleighlord">Javier González Monge</a>.
        </p>
      </div>
      <a class="back-to-top" href="#top">Return to top <span aria-hidden="true">↑</span></a>
    </footer>
  `;

  const grid = document.querySelector<HTMLDivElement>("#explorer-grid");
  if (!grid) throw new Error("Explorer grid was not rendered.");
  explorers.forEach((explorer, index) => grid.append(createExplorerCard(explorer, index)));

  setupAboutDisclosure();
}

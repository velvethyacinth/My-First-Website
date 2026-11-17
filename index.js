// Contact form feedback
const form = document.querySelector(".contact-form form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks! Your message has been received.");
    form.reset();
  });
}

//portfolio filter grid

const projects = [
  {
    title: "Project 1",
    category: "Design",
    description: "Add a short description of this project.",
    image: "",
    link: "#"
  },
  {
    title: "Project 2",
    category: "Website",
    description: "Add a short description of this project.",
    image: "",
    link: "#"
  },
  {
    title: "Project 3",
    category: "Event planning",
    description: "Add a short description of this project.",
    image: "",
    link: "#"
  },
  {
    title: "Project 4",
    category: "Design",
    description: "Add a short description of this project.",
    image: "",
    link: "#"
  },
  {
    title: "Project 5",
    category: "Website",
    description: "Add a short description of this project.",
    image: "",
    link: "#"
  },
  {
    title: "Project 6",
    category: "Event planning",
    description: "Add a short description of this project.",
    image: "",
    link: "#"
  }
];

const grid = document.getElementById("portfolio-grid");
const filters = document.getElementById("portfolio-filters");
let activeCategory = "All";

function renderFilters() {
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  filters.replaceChildren();

  for (const category of categories) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.dataset.category = category;
    button.setAttribute("aria-pressed", String(category === activeCategory));
    filters.append(button);
  }
}

function renderProjects() {
  const visibleProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  grid.replaceChildren();

  for (const project of visibleProjects) {
    const article = document.createElement("article");
    article.className = "portfolio-card";

    const link = document.createElement("a");
    link.href = project.link;

    const thumbnail = document.createElement("div");
    thumbnail.className = "portfolio-thumb";

    if (project.image) {
      const image = document.createElement("img");
      image.src = project.image;
      image.alt = `${project.title} project`;
      thumbnail.append(image);
    } else {
      thumbnail.textContent = "[ Project image ]";
    }

    const title = document.createElement("h3");
    title.textContent = project.title;

    const meta = document.createElement("div");
    meta.className = "portfolio-card-meta";
    meta.textContent = `${project.category} · ${project.description}`;

    link.append(thumbnail, title, meta);
    article.append(link);
    grid.append(article);
  }
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderFilters();
  renderProjects();
});

renderFilters();
renderProjects();

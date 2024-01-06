import fs from "node:fs";

const exclude = ["discussions", "docs", ".github"];

const repos = await fetch(`https://api.github.com/orgs/tinytoolSH/repos`).then(
  (response) => response.json()
);

const fetchReadme = async (slug) =>
  await fetch(
    `https://raw.githubusercontent.com/TinyToolSH/${slug}/main/README.md`
  ).then((response) => response.text());

repos.forEach(async (repo) => {
  const slug = repo.name;

  if (exclude.some((t) => slug.includes(t))) {
    return;
  }

  const frontmatter = `---
title: ${slug}
---
`;

  const readme = await fetchReadme(slug);

  fs.writeFile(
    `src/content/docs/tools/${slug}.md`,
    frontmatter + readme,
    "utf8",
    (error, data) => {
      console.log(`src/content/docs/tools/${slug}.md created`);
      error && console.log(error);
      console.log(data);
    }
  );
});

import fs from "node:fs";

const org = "tinytoolSH";
const path = "src/content/docs/tools";
const exclude = ["discussions", "docs", ".github"];

const repos = await fetch(`https://api.github.com/orgs/${org}/repos`).then(
  (response) => response.json()
);

const fetchReadme = async (slug) =>
  await fetch(
    `https://raw.githubusercontent.com/${org}/${slug}/main/README.md`
  ).then((response) => response.text());

repos.forEach(async (repo) => {
  const slug = repo.name;

  if (exclude.some((t) => slug.includes(t))) {
    return;
  }

  const readme = await fetchReadme(slug);

  const frontmatter = `---
title: ${slug}
---
`;

  fs.writeFile(
    `${path}/${slug}.md`,
    frontmatter + readme,
    "utf8",
    (error, data) => {
      console.log(`${path}/${slug}.md created`);
      error && console.log(error);
      console.log(data);
    }
  );
});

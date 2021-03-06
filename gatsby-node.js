const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  console.log("Page - " + page.page);
  if (page.path.match(/^\/pokemon/)) {
    createPage({
      path: "/pokemon",
      matchPath: "/pokemon/:id",
      component: path.resolve("src/pages/pokemon.js"),
    });
  }
};

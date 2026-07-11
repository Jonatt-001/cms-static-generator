const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static folders
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("public");

  // --- THIS IS THE FIX ---
  // Automatically groups all .md files in content/articles into the "articles" collection
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/articles/*.md");
  });
  // -----------------------

  // Date filters
  eleventyConfig.addFilter("readableDate", d => DateTime.fromJSDate(d, {zone: 'utc'}).toFormat("LLLL d, yyyy"));
  eleventyConfig.addFilter("htmlDate", d => DateTime.fromJSDate(d, {zone: 'utc'}).toFormat('yyyy-LL-dd'));
  
  return { 
    dir: { input: ".", output: "_site" } 
  };
};


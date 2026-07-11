const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addFilter("readableDate", d => DateTime.fromJSDate(d, {zone: 'utc'}).toFormat("LLLL d, yyyy"));
  eleventyConfig.addFilter("htmlDate", d => DateTime.fromJSDate(d, {zone: 'utc'}).toFormat('yyyy-LL-dd'));
  return { dir: { input: ".", output: "_site" } };
};


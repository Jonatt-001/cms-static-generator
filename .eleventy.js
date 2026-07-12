const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static folders
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("public");

  // Group articles into a collection
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./content/articles/*.md");
  });

  // Date filters
  eleventyConfig.addFilter("readableDate", d => DateTime.fromJSDate(d, {zone: 'utc'}).toFormat("LLLL d, yyyy"));
  eleventyConfig.addFilter("htmlDate", d => DateTime.fromJSDate(d, {zone: 'utc'}).toFormat('yyyy-LL-dd'));
  
  // NEW: Reading time filter
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>?/gm, '');
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute) || 1;
  });

  return { 
    dir: { input: ".", output: "_site" } 
  };
};


const format = require('date-fns/format')
module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  });

  // eleventyConfig.addFilter("findCategory",  function(arr, name)  {
  //   return arr.filter( item => item.slug == name ); 
    
  // });

  eleventyConfig.addFilter("pluck", function (arr, value, attr) {
    return arr.filter((category) => category.slug === value);
  });
  eleventyConfig.addFilter("search", function (arr, value, attr) {
    return arr.filter((category) => category.subCategories.slug === value);
    
  });

  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/img/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy("src/lib/");


  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/style.css");
  eleventyConfig.addWatchTarget("src/js/");
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
} 
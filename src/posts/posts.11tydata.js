module.exports = {
  layout: "layouts/post.njk",
  tags: ["posts"],
  eleventyComputed: {
    permalink: (data) => {
      const d = data.page.date;
      if (!d) return `/posts/${data.page.fileSlug}/`;
      const y = d.getUTCFullYear();
      const m = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      return `${y}/${m}/${day}/${data.page.fileSlug}/`;
    },
  },
};

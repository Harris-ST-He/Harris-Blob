import { getCollection } from "astro:content";

const formatChinaMidnightIso = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}T00:00:00+08:00`;
};

export const getSiteStartIso = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  );
  const firstPost = sortedPosts[0];

  if (!firstPost) {
    return formatChinaMidnightIso(new Date());
  }

  return formatChinaMidnightIso(firstPost.data.pubDate);
};

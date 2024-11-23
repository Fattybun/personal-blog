export type Tag = {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: {
    links: {
      self: string;
      help: string;
      site: string;
    };
  };
};

export type WordPressPost = {
  ID: number;
  title: string;
  excerpt: string;
  content: string;
  tags: Record<string, Tag>;
  featured_image: string;
  date: string;
  url: string;
};

const fetchAllPosts = async (): Promise<WordPressPost[] | null> => {
  const url =
    "https://public-api.wordpress.com/rest/v1.1/sites/fattybunblog.wordpress.com/posts";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);

    return null;
  }
};

export default fetchAllPosts;

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

const BASE_URL = "https://public-api.wordpress.com/rest/v1.1/sites/fattybunblog.wordpress.com/posts";

const fetchAllPosts = async (): Promise<WordPressPost[] | null> => {
  const url = BASE_URL; // Using a constant for the base URL

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      console.error(`Failed to fetch posts. Status: ${response.status}`);
      return null;
    }

    const data = await response.json();

    // Verify that data.posts is an array
    if (Array.isArray(data.posts)) {
      return data.posts;
    } else {
      console.error("Unexpected data format: posts is not an array", data);
      return null;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
    } else {
      console.error("Unknown error fetching posts:", error);
    }
    return null;
  }
};

export default fetchAllPosts;
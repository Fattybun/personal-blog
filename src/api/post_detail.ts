type WordPressPost = {
  ID: number;
  title: string;
  content: string;
};

const fetchPost = async (id: number): Promise<WordPressPost | null> => {
  const url =
    "https://public-api.wordpress.com/rest/v1.1/sites/fattybunblog.wordpress.com/posts/";

  try {
    const response = await fetch(url + id);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);

    return null;
  }
};

export default fetchPost;

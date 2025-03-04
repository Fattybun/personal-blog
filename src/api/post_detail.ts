type WordPressPost = {
  ID: number;
  title: string;
  content: string;
};

const BASE_URL = "https://public-api.wordpress.com/rest/v1.1/sites/fattybunblog.wordpress.com/posts/";

const fetchPost = async (id: number): Promise<WordPressPost | null> => {
  const url = `${BASE_URL}${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch post. Status: ${response.status}`);
      return null;
    }

    const data = await response.json();

    // Optional: Validate that data conforms to WordPressPost
    if (typeof data.ID === "number" && typeof data.title === "string" && typeof data.content === "string") {
      return data;
    } else {
      console.error("Invalid data format", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};

export default fetchPost;

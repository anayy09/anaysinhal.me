export const fetchBlogs = async (username) => {
  const GET_USER_BLOGS = `
    query GetUserArticles($page: Int!) {
        user(username: "${username}") {
            publication {
                posts(page: $page) {
                  title
                  brief
                  slug
                  dateAdded
                  coverImage
                }
            }
        }
    }
  `;

  let allBlogsFetched = false;
  let page = 0;
  const articles = [];

  while (!allBlogsFetched) {
    try {
      const response = await gql(GET_USER_BLOGS, { page: page });
      const posts = response.data.user.publication.posts;
      if (posts.length === 0) {
        allBlogsFetched = true;
      } else {
        articles.push(...posts);
        page++;
      }
    } catch (error) {
      throw new Error("Failed to fetch Hashnode blogs.");
    }
  }

  return articles;
};

async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return data.json();
}

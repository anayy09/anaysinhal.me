export const fetchBlogs = async () => {
  const GET_PUBLICATION_BLOGS = `
    query Publication {
      publication(host: "codecanvas.tech") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              brief
              url
            }
          }
        }
      }
    }
  `;

  try {
    const response = await gql(GET_PUBLICATION_BLOGS);
    const posts = response.data.publication.posts.edges.map(
      (edge) => edge.node
    );
    return posts;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch Hashnode blogs.");
  }
};

async function gql(query) {
  const data = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Include Authorization header if needed for your query
      // "Authorization": "Bearer YOUR_PERSONAL_ACCESS_TOKEN"
    },
    body: JSON.stringify({
      query,
    }),
  });

  return data.json();
}

const fetchData = async (url: string): Promise<unknown> => {
  const response = await fetch(url);
  return await response.json();
};

const showPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const posts = await fetchData(url);
    (
      posts as { userId: number; id: number; title: string; body: string }[]
    ).map((post) => console.log(post.id, post.title));
  } catch (error) {
    console.log(error);
  }
};

showPosts();

export const fetchPosts = async () => {
  const domain = 'kurashi-smartphone';
  const apiKey = import.meta.env.MICROCMS_API_KEY;

  const res = await fetch(`https://${domain}.microcms.io/api/v1/posts`, {
    headers: { 'X-MICROCMS-API-KEY': apiKey }
  });

  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
};

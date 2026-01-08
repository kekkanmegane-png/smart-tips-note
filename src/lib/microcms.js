export const fetchPosts = async () => {
  const domain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = import.meta.env.MICROCMS_API_KEY;

  const res = await fetch(`https://${domain}.microcms.io/api/v1/posts`, {
    headers: { 'X-MICROCMS-API-KEY': apiKey }
  });

  return res.json();
};

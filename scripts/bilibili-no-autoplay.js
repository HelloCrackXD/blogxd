hexo.extend.filter.register('after_post_render', function (data) {
  if (!data.content) return data;

  data.content = data.content.replace(
    /(<iframe[^>]*src=["'])([^"']*player\.bilibili\.com\/player\.html[^"']*)(["'][^>]*>)/gi,
    (match, pre, url, post) => {
      if (!/autoplay=/.test(url)) {
        url += (url.includes('?') ? '&' : '?') + 'autoplay=0';
      }
      return pre + url + post;
    }
  );

  return data;
});

document.getElementById("shareForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const url = encodeURIComponent(document.getElementById("url").value);
  const title = encodeURIComponent(document.getElementById("title").value);

  const buttons = [
    {
      name: "LINE",
      class: "line",
      link: `https://social-plugins.line.me/lineit/share?url=${url}`
    },
    {
      name: "Twitter",
      class: "twitter",
      link: `https://twitter.com/intent/tweet?url=${url}&text=${title}`
    },
    {
      name: "Facebook",
      class: "facebook",
      link: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
    {
      name: "Threads",
      class: "threads",
      link: `https://www.threads.net/intent/post?text=${title}%20${url}`
    },
    {
      name: "Instagram",
      class: "instagram",
      link: `https://www.instagram.com/` // プロフィールリンク推奨
    }
  ];

  let html = '';
  let code = '';

  buttons.forEach(btn => {
    html += `<a href="${btn.link}" class="${btn.class}" target="_blank">${btn.name}</a>\n`;
    code += `<a href="${btn.link}" class="${btn.class}" target="_blank">${btn.name}</a>\n`;
  });

  document.getElementById("preview").innerHTML = html;
  document.getElementById("code").value = code;
});

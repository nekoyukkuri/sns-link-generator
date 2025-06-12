document.getElementById("shareForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const url = encodeURIComponent(document.getElementById("url").value);
  const text = encodeURIComponent(document.getElementById("text").value);

  const buttons = [
    {
      name: "LINE",
      class: "line",
      icon: "fab fa-line",
      link: `https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`
    },
    {
      name: "Twitter",
      class: "twitter",
      icon: "fab fa-twitter",
      link: `https://twitter.com/intent/tweet?url=${url}&text=${text}`
    },
    {
      name: "Facebook",
      class: "facebook",
      icon: "fab fa-facebook-f",
      link: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    },
    {
      name: "Threads",
      class: "threads",
      icon: "fab fa-threads",
      link: `https://www.threads.net/intent/post?text=${text}%20${url}`
    },
    {
      name: "Reddit",
      class: "reddit",
      icon: "fab fa-reddit",
      link: `https://www.reddit.com/submit?url=${url}&title=${text}`
    }
  ];

  let previewHTML = '';
  let codeHTML = '';

  buttons.forEach(btn => {
    const buttonHTML = `<a href="${btn.link}" class="${btn.class}" target="_blank"><i class="${btn.icon}"></i>${btn.name}</a>`;
    previewHTML += buttonHTML + "\n";
    codeHTML += buttonHTML + "\n";
  });

  document.getElementById("preview").innerHTML = previewHTML;
  document.getElementById("code").value = codeHTML;
});

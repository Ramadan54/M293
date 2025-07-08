const prefix = "/M293/";
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", `${prefix}header.html`);
  loadPartial("footer", `${prefix}footer.html`);
});

function loadPartial(targetId, url) {
  fetch(url)
    .then((resp) => resp.text())
    .then((html) => {
      let container = document.getElementById(targetId);
      if (!container) {
        container = document.createElement("div");
        container.id = targetId;
        document.body.prepend(container);
        if (targetId === "footer") document.body.append(container);
      }
      container.outerHTML = html;
    })
    .catch(console.error);
}

document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("topicFilter");
  const posts = document.querySelectorAll(".post-card");

  filter.addEventListener("change", () => {
    const selected = filter.value;

    posts.forEach((post) => {
      const topic = post.querySelector(".post-meta")?.dataset.topic || "";
      if (selected === "all" || topic === selected) {
        post.style.display = "block";
      } else {
        post.style.display = "none";
      }
    });
  });
});

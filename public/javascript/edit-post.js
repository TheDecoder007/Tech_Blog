async function editFormHandler(event) {
  event.preventDefault();

  const blog_body = document
    .querySelector('textarea[id="post-blog-body"]')
    .value.trim();
  const title = document.querySelector('input[id="post-title"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      blog_body,
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);

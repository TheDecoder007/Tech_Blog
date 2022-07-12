
async function addPostHandler(event) {
    event.preventDefault();
  
    const blog_body = document.querySelector('textarea[id="post-blog-body"]').value;
    const title = document.querySelector('input[id="post-title"]').value;
  
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        blog_body,
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload('dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.blog-form').addEventListener('submit', addPostHandler);
  
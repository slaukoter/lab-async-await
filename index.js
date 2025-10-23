// Write your code here!

// Display Posts- Create Function to Display Posts 
function displayPosts(posts) {
    const postList = document.querySelector('#post-list')
    posts.forEach(post => {
        const li = document.createElement('li')
        const h1 = document.createElement('h1')
        const p = document.createElement('p')

        h1.textContent =post.title
        p.textContent = post.body

        li.appendChild(h1)
        li.appendChild(p)
        postList.appendChild(li)

    })
}

//Create function to house fetch and apply async to function

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        displayPosts(posts)
    } catch (error) {
        console.error('Error fetching posts:', error)
    }
}

fetchPosts()
async function get20Posts(api) {
    let data = await fetch(api);
    let posts = await data.json();// 500

    for (let i = 0; i < 20; i++) {
        let post = posts[i];

        let body = document.querySelector("body");
        let box = document.createElement("div");
        let name = document.createElement("h2");
        let email = document.createElement("p");
        let content = document.createElement("p");

        name.textContent = post.name;
        email.textContent = post.email;
        content.textContent = post.body;

        box.appendChild(name);
        box.appendChild(email);
        box.appendChild(content);

        body.appendChild(box);
    }
}

get20Posts("https://jsonplaceholder.typicode.com/comments");
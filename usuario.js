const app = document.querySelector(".container");
const getUrl = new URLSearchParams(window.location.search);
const id = getUrl.get("id");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(`${url}/${id}`)
  .then((res) => res.json())
  .then((data) => {
    const name = document.createElement("p");
    const email = document.createElement("p");

    name.innerHTML = data.name;
    email.innerHTML = data.email;

    app.appendChild(name);
    app.appendChild(email);
    console.log(name);
    console.log(email);
  })
  .catch((err) => console.log(err));

import "./scss/main.scss";
import { user } from "./js/tests/user";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = response.json();

  return data;
}

getPosts().then(posts => console.log(posts));

console.log(user);

// alert(`${user.name} has confirmed all seems well! You can delete test data!!`);

const testArray = [1, 2, 3, 4, 5];

const newArray = testArray.map(x => {
  return x + 1;
});

console.log(`this is ${newArray}`);

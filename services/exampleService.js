
const fetch = require('node-fetch');

const exampleSVC = async (number) => {
    const randomNumber = 2;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);
    const json = await response.json();
    return json;
};

module.exports = exampleSVC;

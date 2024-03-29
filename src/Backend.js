let backendUrl = "https://localhost:7087"


async function getUser() {
    fetch(
        backendUrl + "/User")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        })
}

async function postUser() {
    postData(backendUrl + "/User", { username:  })
}

async function postData(url = '', data = {
    username: "berkay",
    password: "123155464",

}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

componentDidMount() {
    console.log("start");

    let el = document.querySelector('#darkTheme');
    if (el) {
        el.addEventListener('click', function () {
            document.body.classList.toggle('dark');
        });
    }
}
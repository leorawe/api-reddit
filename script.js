const app = document.getElementById('root');
const container = document.createElement('div');
const searchUrl = 'https://www.reddit.com/r/php/search.json?q=drupal';
container.setAttribute('class', 'container');
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://www.reddit.com/r/php/search.json?q=drupal', true);
request.open('GET', searchUrl, true);

    request.onload = function () 
  // Begin accessing JSON data here
        {
            console.log(request.status);
      //      if (request.status >= 200 && request.status < 400) {
      console.log('accessing data next');

      // Begin accessing JSON data here
        var stuff = JSON.parse(this.response);
       // console.log(typeof stuff);
       // console.log(stuff.data.children[0].data.title);
       let investigate = stuff.data.children;
        Object.keys(investigate).map(i => console.log(investigate[i].data.title));

        Object.keys(investigate).map(i => {
             // Create a div with a card class
             const card = document.createElement('div');
            card.setAttribute('class', 'card');
            // Create an h1 and set the text content to the article's title
            const head = document.createElement('h2');
            head.textContent = investigate[i].data.title;

            // Create a p and set the text content to the article's description
            const p = document.createElement('p');
            //movie.description = movie.description.substring(0, 300); // Limit to 300 chars
            let description = "desc and link coming soon";
            p.textContent = `${description}...`; // End with an ellipses

            // Append the cards to the container element
             container.appendChild(card);

            // Each card will contain an h1 and a p
            card.appendChild(head);
            card.appendChild(p);
        });

      //      }
       //else {
       //      console.log('error');
       //      }
    }   

            // Send request
            request.send();

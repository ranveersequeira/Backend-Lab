# Backend-Lab


Server

    Create a NodeJS project using npm init.
    Create a folder in your project called server.
    Create a JavaScript file in the server folder named server.js.
    In server.js

    Import (require) path and fs.
    Create an array consisting of at least 5 chirp objects.
    Write the array to a file in the root of the project called chirps.json.

    Add code to server.js that reads the file and outputs the chirps to the console

Reddit

    Install request-promise from npm and save it to your package.json file.
    Create a JavaScript file in the root of your project called reddit.js.
    Use request-promise to retreive articles from https://reddit.com/r/popular.json.
    Extract from each article title, url, and author

    Push each extracted article to an array.
    Write the array to a file in the root of your project called popular-articles.json.

Popular_Download

    Create a JavaScript file named popular-downloader.js.
    Create a directory in the root of your project named downloads.
    Using axios, pull images from unsplash.
   
   

Express Fun Part- 1

    Create a new project using npm init.
    Install express and save it to your package.json file using --save.
    Create an express server that responds to the root get request ('/') with "Hello from the web server side...".

    Listen on port 3000.

    Use express.static to serve files from a folder named public in the root of your project.

    Create an index.html file.
    Create a styles.css file in a css directory in public.
    Create an app.js file in a js directory in public.

    Create your own middleware using app.use that console.logs every req.url and passes flow to the next function

Part - 2

    Add Bootstrap to your index.html.
    Create a form that posts to a route on your express server.
    Write the values from the form post to a json file on your server.

    Remember to set the action of the form to your route.
    Change the method of the form to POST.

    Create a route /formsubmissions that reads the file and responds with the results.



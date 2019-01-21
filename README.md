# Shopify Web Engineer Challenge - Summer 2019

The task was to build a web app to search for waste items using the Toronto Waste Wizard database, and save frequently used ones. This was a great project to work on and I had lots of fun in the process.

The challenge description can be viewed [here](https://cdn.shopify.com/static/web-eng-challenge-summer-2019/index.md).
The deployed version can be viewed [here](https://lit-eyrie-19857.herokuapp.com/).

## Usage

This web app was created in [AngularJS](https://angularjs.org/) and deployed to [Heroku](https://dashboard.heroku.com/apps).

To run the web app locally,

```sh
git clone https://github.com/rushigandhi/shopify-summer-2019-web-engineer-challenge.git
``` 
into your chosen directory.

`cd shopify-summer-2019-web-engineer-challenge` to enter the directory.

`npm install` to install node modules.

Run `ng serve` to start the web app.

Navigate to `http://localhost:4200/` to use the app.

## Design
All .css files are located in their respective components' folder and can be found at `src/app/components/component-name/component-name.component.css`
All design specifications follow the image below:
![Design](http://cdn.shopify.com/static/web-eng-challenge-summer-2019/design.png)
Media queries were added to support responsive design for all sorts of screen sizes.

I chose to use both [FontAwesome](https://fontawesome.com/) icons and images in the web app. The star is from the `fas fa-star` FontAwesome class while the magnifying glass is an image edited on Adobe Photoshop.

## Fetching the Data
The JSON data was fetched from [here](https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1329). I tried to play around with the URL to figure out if it was an API that could filter results. Changing the `?limit=1000` parameter worked, however appending `&keywords=takeout` to the URL did not help filter the results. Hence, it was assumed that it would be best to fetch all of the data and filter it locally.

## Displaying Results
`*ngIF` and `*ngFor` made it really easy to display data from arrays. The [`html-escape-unescape-module`](https://www.npmjs.com/package/html-escape-unescape) was used to unescape the HTML found in the JSON data.

## Searching
It was assumed that the best way to filter through the results would be to check if the queried string is a part of the keywords string in an object. The first algorithm I implemented was an O(n) linear search, where n is the size of the array of JSON objects, that just went through the array and displayed all objects that included the string query in its keywords. This excludes the time complexity of the .includes() function used to check if the queried string is in the keywords string. 

Since the backend is not filtering these results for us, if the JSON data is extremely large, the web app would not be fast enough to use. We don't want to be doing heavy computations on the front-end.

Currently, I'm trying to improve my algorithm and data structure-related skills, hence I thought it would be cool if I could implement something I've recently learned into this web app. To combat the time complexity issue, I decided to put the **Trie** (also called the Prefix Tree) data structure to use.

I learned more about Tries from the video below


[![IMAGE ALT TEXT HERE](https://i.ytimg.com/an_webp/dUBkaqrcYT8/mqdefault_6s.webp?du=3000&sqp=CLmzleIF&rs=AOn4CLAD_H40xaYFbOBbzI78h0Xe1IwqFg)](https://www.youtube.com/watch?v=dUBkaqrcYT8).

Tries store strings in a way that can be visualized in a tree (similar to Binary Search Trees).
![Trie Image](https://he-s3.s3.amazonaws.com/media/uploads/fb14630.png)


Image from:

https://www.hackerearth.com/practice/data-structures/advanced-data-structures/trie-keyword-tree/tutorial/

To check if a word exists, we can just traverse the Trie. We would need to go down M levels where M is the length of the queried string. Hence, the time complexity of a Trie search is O(M), but in this case, since M is length of the queried word, it will most likely be less than 30 characters long. Thus, this search will be much faster than the linear search I implemented before.

## What I Learned
I learned a variety of things while working on this challenge. I learned what escaped HTML is, I learned about the numerous Open Data APIs the City of Toronto has made publicly available, and I got to apply my web development skills.

This was also the first time I implemented the **Trie** data structure into an app. 

In conclusion, this was an amazing experience!

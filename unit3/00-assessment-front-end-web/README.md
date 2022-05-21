# Devmountain Foundations
### Week 6
### Unit 3 Assessment

---

#### :dart: Instructions

**Part 1: Edit HTML**

Change the following things in `home.html`:
- Change the image of the Devmountain logo to an image of either a rubber duck or a cat of your choice.
- Add another paragraph somewhere on the page. The content of the paragraph should be a message welcoming the user to the website.
- Add a bulleted list (ul) of compliments to the user, with at least 3 bullet points.
- Add a form input to the “Contact Us” form that asks the user how they heard about this website. They should be able to check boxes that include “Google”, “A friend”, or “Other”.

**Part 2: Edit Javascript**

- Change the event listener that is listening for the Contact Us form to submit. Instead of doing a console.log message on submit, the form should alert the user that the form has been submitted successfully. Use the alert function in Javascript.
- Add an event listener that listens for a mouseover event. When the user mouses over the picture on the page (cat or rubber duck) the page should alert give the user a compliment.

**Part 3: Create HTML Page**

Edit the file called `profile.html`. Make a profile about yourself.
The profile should feature your skills, interests, and career goals. Be creative and try practice using basic HTML elements like headings, paragraphs, lists, and forms, as well as CSS concepts such as classes and flexbox.

**Part 4: Create Interactive Components**

Copy the following HTML into your profile somewhere.

```
<button id="color">My Favorite Color</button>
<button id="place">My Favorite Place</button>
<button id="ritual">My Favorite Ritual</button>
```

Next, create a new file called `profile.js`. Make sure it is in the same location (same folder) as the `profile.html` file.
Then, add a script tag at the very end of the `<body>` element (just above the closing tag `</body>`) that connects `profile.js` to your HTML file.
In `profile.js`, create event listeners that check for a click on each of these buttons.
If a user clicks on “My Favorite Color”, it should alert the user of your favorite color, and so on.

**Part 5: Stylize buttons**

Add a class to each button element from the previous section. Then, add CSS to `styles.css` that makes the buttons larger and yellow.

**Extra Credit: Another Page**

Add another link in the homepage’s navigation section.
Create a new page for the website about your neighborhood. The page should feature a short description of your neighborhood, links to local restaurants and parks, and anything else you’d like to include.
Create a button that allows the user to request a random restaurant recommendation. Add an event listener in Javascript listens for a click on the button. When the button is clicked, your Javascript should call a new function that you write, which chooses a random restaurant for the user.

#### :sparkles: Solution
For this assessment, I implemented all required functionalities on Parts 1, 2 and 3, as well as redesigned the pages' layout.
For parts 4 and 5, I created similar functionalities, covering the skills assessed in the exercise.
Besides the assessment's requirements, I also created a back-end server that provides two `GET endpoints` for the app.

To test the project, you should:
1. Clone this folder
2. Open `client/home.html` file path on your browser
3. Run `npm install` on your terminal
4. Run `node server/index.js` on your terminal

Preview:

<img src="https://github.com/juliaf1/devmountain-challenges/blob/main/unit3/00-assessment-front-end-web/example-img-1.png?raw=true" width="80%" height="50%"/>
<img src="https://github.com/juliaf1/devmountain-challenges/blob/main/unit3/00-assessment-front-end-web/example-img-2.png?raw=true" width="80%" height="50%"/>

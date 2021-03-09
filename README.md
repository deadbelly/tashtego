# Tashtego
Sometimes your reading list haunts you. It looms large, like the skeletal remains of your first harpooner, tied to the great white whale that took your leg. Well Tashtego is here to help. This is an app that helps you organize and maintain a reading list, so you can stop putting off that one book everyone says you'll love.
## Installation
Tashtego is a Progressive Web Application that runs best on your phone. I recommend using it by visiting [tashtego.vercel.app](https://tashtego.vercel.app/), and if given the option installing or adding the site to your homepage. You can also tashtigo in a desktop browser.

If you'd like to install the development version: 
```
git clone <<url>>
cd ~/tashtego
npm i
```

Once all the dependancies are installed run `npm start` and the site should be accessible at `http://localhost:3000/`.

## Technologies
This app is built with `React`, `CSS`, and `HTML5` using the `create-react-app` boilerplate. It also uses several libraries and tools for which I'm extremely thankful including...
-`react-router-dom`
-`cypress`
-`react-beautiful-dnd`
-`moment.js`

## API
This app uses the [Open Library API](https://openlibrary.org/developers/api). There are some odd quirks to the data (the works of Toni Morrison are all miscatalogued for example), but in general I've found it to be an extremely thorough and reliable. If you repeatedly encounter 500 errors while using this app though, it may be worth it to check on the status of Open Library. 

## Features 
### The Search
When you first boot up Tashtego you won't have anything saved to your reading list. Head over to the search tab and use the input bar to find some books you want to read. You the search matches query terms with book titles, author names, keywords, and even common mispellings. There are some miscatalogues in the API (Toni Morisson's books are not all titled "Toni Morrison" for example), so I recommend just double checking the information against the cover image if you aren't sure. Each book returned by the search also includes information on the original publication date and number of editions so that you can be extra sure of that you're adding to the list. 

![A user searches for Marlon James](https://media0.giphy.com/media/dGCuAP0OOqq24gYs9Z/giphy.gif)

### The Reading List
Once you've built your reading list you can view it under the list tab. Each book appears on a drag-and-droppable card that has a cover thumbnail, the title and author(s), and it's list number. The book you're going to read next is marked as number 1, and the book you are currently reading is your Active Book. This book appears on your home page. Each book has a remove button that lets the user take it off their list. Note that the draggable list items are keyboard and screen reader accessible! In order to reorganize your list without a mouse or touchscreen, focus an item, press space bar to pick it up, the up and down arrows to re-order it, and then space again to drop it.

![A user reorganizes their reading list](https://media1.giphy.com/media/22BHxmMvU7A3IOfzIc/giphy.gif)

### The Active Book
The home screen will show you the book you are currently reading (your "Active Book"). On this page you'll see a cover image, the title, author(s), and an indication of when you plan to finish the book. The last item is a calendar input that lets you customize your intended completion day. Two buttons appear directly below the cover, Return to List and Finish. Return to List will put the Active Book on the bottom of your reading list, while Finish will remove it from you data entirely. When your Active Book is marked finished, returned to the list, or when your completion date rolls around, it will automatically be replaced by the first book on your reading list. If you would prefer to avoid the temptation to push this date back (maybe you're working on a research paper, or really want to move on to the next book) you can disable that feature in settings. 

![A user manipulates their active book](https://media1.giphy.com/media/84WvTIRCGL2SNm1dfp/giphy.gif)

### The Settings 
Under the settings tab the user can customize their experience in several ways. They can lock their reading list, preventing them from adding, removing, or re-ordering books. They can lock their completion date, preventing them from changing when they plan to finish a book. They can also change the default number of days they have to read something. This changes the preset calendar date that new Active Books will expect to be finished by. 

![A user adjusts their settings](https://media2.giphy.com/media/WGPjGYqLcsuQcx0DQd/giphy.gif)

## Testing 
I use [cypress](https://www.cypress.io/) for end to end and integration testing. In order to test the site run `npm run cypress` and you should be brought to a testing suite. The tests use stubbed api calls, but do expect the site to run locally. Make sure you've run `npm start` in an open tab and can visit the site before testing. 

## Future Iterations
Please visit the [issues page](https://github.com/deadbelly/tashtego/issues) for a list of ongoing projects with Tashtego. A few features I would love to implement are...

-A card for a users active book at the top of the reading list.
 
-The ability to schedule completion dates ahead of time for books on the list. 

-Push notifications for when an Active Book as rolled over.

## Contributors 
Tashtego was designed and built by me, [Boone Epstein](https://github.com/deadbelly). It was a project for Module 3 of the Front End Engineering Program at [the Turing School of Software and Design](https://turing.io/) in which I was tasked with designing a web application for a niche audience. In its current form it is a Minimal Viable Product, that I plan to improve over the coming week. 

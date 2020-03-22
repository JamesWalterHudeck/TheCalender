Developer: James W. Hudeck
Date: 3.22.2020

Created a calender app that will save your  to your local storage.
The app is based on military time because that is the time I use. 


----The HTML-----

The body

The boy consists of the header and the container

The Header.

-the jumbotron holds our "Work Day Scheduler"
-a small description of the app
-then the current date using moment.js

The container.

the container holds our calender.
Each div holds our time in military units, a space for you to write your own description of your day, and a save button.
the save button will save your added description to your local storage for you to be able to access it later. 

----The JS----

We begin with our document ready making sure that our document is loaded before any functionality can be used.

Next our save button gets a click event that saves your added text to the local storage.

NExt is the hour updater this function makes it so that the colors on the app match the time whether it be past, present or future. 

We then call our function to make it display on the page.

Next we load each of our saved data values from the text you saved from your local storage.

at the very end we use moment.js to display the current month, time, and year to display in the header of our HTML
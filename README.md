# Assignment 3: React and APIs
## ITEC4012: Web Application Frameworks
### Description
In this assignment we were tasked with creating a simple web application that integrates with Google Firebase to store and add data. With that, I opted to create a car inventory website where users can view cars as well as post a car for sale. On the homepage of the application all of the cars will be displayed. This works through a GET request to the Firestore database, where the cars will be returned. Each of the cars follow this basic structure:
- id: string
  - Automatically generated using a UUID when the car is added through the Add Car page.
- make: string
  - Stores the make of the car, for example: Honda.
- model: string
  - Stores the model of the car, for example: Civic Si.
- km: number
  - Stores the current amount of kilometers on the car.
- color: string
  - Stores the color of the car, for example: Grey.
- description: string
  - Stores the general description of the car.
- price: number
  - Stores the price of the car.
- images: array
  - Stores the URLs for the images of the car.

### Challenges
In creating this application there were a couple of hurdles that needed to be overcome. The first of which being adding data to the database. As I was new to pushing data to an API within JS, it was quite the learning curve. At first I used Google's method on their docs of using addDoc, however, due to the constraints of the assignment this would only be for proof of concept. Later on I had to implement using a POST request. This came with it's own challenges; as Firestore's elements are stored using Object->{type}Value:{value} I was faced with difficulty adding an array. I ended up implementing something that works well, however, I don't believe it is the most efficient. If I were to do it again I would much rather stick to the addDoc method for adding data to a document.

### Instructions
As I am not exactly too keen on sharing my Firestore endpoint with the rest of the world, you'll need to do some leg work on your end to get this application to work; but don't fret, it's fairly straight forward! 

The first thing you'll need to do is set up a Firebase account if you don't have one already. Start off my going to https://firebase.google.com/ and click 'Get Started'. If you are already signed into a Google account you can hit 'Create a Project'. From here, enter a project name, we can use 'car-project' as an example. Once the project is created click on "Firestore Database" on the left side panel followed by 'Create database'. For the sake of brevity, start it in 'test mode' and set a suitable Firestore location. Once the database is created we can create some placeholder data to get things rolling. Start by clicking 'Start collection', we'll give it an ID of 'cars'. Now we need to add it's first document, start by clicking 'Auto-ID', then we need to add some fields. Add the following fields:
- id
  - Type: string
  - Add some gibberish here, it doesn't really matter
- make
  - Type: string
  - Throw in your favorite car maker
- model
  - Type: string
  - You must have a favorite car right? Throw it in here!
- color
  - Type: string
  - Throw in your favorite color here!
- description
  - Type: string
  - Just use some placeholder text here.
- km
  - Type: number
  - Again, throw in some number soup here, it doesn't really matter.
- year
  - Type: number
  - Be realistic here, and throw in a year, let's say 2021.
- price
  - Type: number
  - More number soup, add some random price
- images
  - Type: array
  - Each of the children here will have a type of string, just add a couple of URLs of images here.

And that's it, you have your first 'car' made. Don't worry, this process only needs to be done once. Now we need to get the URL for the database so we can read from it and write to it from our web application. To do this we will need to click on the settings icon (gear cog) on the left side panel, clicking on 'Project settings'. From here we can see our Project ID, here you'll want to copy that. We also need to make note of our collection ID, if you've followed along it should be 'cars'. Now we ned to make the URL, however this is simple, just insert your variables into this URL: https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID_HERE/databases/(default)/documents/YOUR_COLLECTION_ID_HERE/

And that's all, now we can move to the application. Create a .env file in the root directory of the application and add the following: REACT_APP_API_ENDPOINT=YOUR_URL_HERE
Once that is saved we are good to install dependencies using `npm install` and then start the application using `npm start`. If everything was done correctly you should see your placeholder car on the homepage. You can now add as many cars as you desire.

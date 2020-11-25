# Overview
Create a burger logger with MySQL, Node, Express, Handlebars, and a homemade ORM (yum!).  Follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

# NPM Installs
<ul>
    <li> MySQL </li> 
    <li> Express </li>
    <li> Express-Handlebars </li>
    <li> Node.JS </li>
</ul>
 
# Description
 
The goal of this application is to allow the user's to input the name of the burger, have it display with a 'devour' button that can be clicked when they are finished eating the burger. Once they have clicked the button, the burger will move to the right-hand side of the page under 'Burger Devoured'. 
 
All burgers were stored in a burgers database. This database is connected to the application so that it updates depending on what elements are selected, devoured, or created. The database is created in the DB folder, which holds the schema and seeds files. To build a connection to the application, I used the MVC model. The M (Models) is the main component of this model that holds all the elements that are passed through to the other levels of the controller and views. In this application, there are three functions throughout our MVC. There is a function to read all the existing burgers (selectAll), one to insert a new burger (insertOne), and one to update the burger to devoured (updateOne). The model passes through parameters for these functions that are then defined in the C (controllers). 
 
The C (controllers) tells the model were to select the information that should be passed through. Because of certain parameters, some additional elements like an object had to be created so that the data could pass through correctly. The controller also uses req.parameters to select elements from a URL to be passed through to the ORM file or req.body if it is information that the user is entering like in the insert function. 
 
The ORM.js file actually talks to the database and tells it which queries to run. The values that are defined in the controllers are then entered into the query from the ORM and then ready to be viewed by the V (views). All of these are connected through the connection.js file and the server.js file. 
 
The views are the final output of the MVC model. In this application, we used handlebars to create our HTML. Handlebars require two different files, a main.handlebars, and an index.handlebars. The main file holds all the connections such as the CSS file and links to javascript files to provide the user with a beautiful and working page. The index.handlebars file holds all the code to actually build the layout of the page. To ensure the page was dynamic for desktop and mobile, we used bootstrap as well. 
 
Finally, to make the devour button work, I added an eatburger.js file that uses javascript to tell the MVC to update when the devour button has been selected and to grab the name of the new burger when submitted. 
 
Adding all of these different elements together created my EAT-DA-Burger application. 

# Image

<img src="public\assets\img\eatburger.png">



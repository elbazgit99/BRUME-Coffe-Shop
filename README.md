
# BRUM | COFFE SHOP  


## Project purpose :  

The goal of this project is to design and develop a two-page interactive web application allowing users to personalize their product (a coffee drink or makeup item) before adding it to the cart.
The project emphasizes DOM manipulation with JavaScript, excellent UX/UI, and strict versioning management via GitFlow.  

## About The Project : 

To increase customer engagement, a coffee shop  wants to launch an online interface where the customer "builds" their ideal product.

The user must be able to interact with the page to choose their options in real time, see the price update, and validate their selection.

The work will be done following a professional development process structured in 4 key stages.
## TECHNOLOGIRS  :  
The Project Made By  Technologies such as  :  
**UI/UX**: HTML5, css, Flex box, grid, JavaScript
**Planification using** : Jira scrum kanban framework  
**Distribution** : Git/Github  

## The Mession  :  
in 5 days
Submission deadline: 10/23/2026 at 5:00 a.m  


#### Initialization: Creation of the GitHub repository.  
**GitFlow**: Implementation of the main (production),  
develop (integration) branches, and strict use of the functionality branches (eg: feature/layout-css, feature/js-configurator).   
Project management: Using GitHub Projects (Kanban) to list tasks (To Do, In Progress, Review, Done).  
Strict rule: No direct commits to main or develop. Mandatory passage through Pull Requests (PR).  
  
**Step 1:** Zoning & Architecture (HTML/CSS)   
Creation of the HTML5 semantic structure of the two pages (Configurator Page and Summary  Page).  
Choice of CSS approach: Use of Custom CSS (Flexbox/CSS Grid) or a framework (Bootstrap or Tailwind CSS).  
Interface Zoning: Define where the product overview, selection options, and price summary are located.    
  
**Step 2:** Detailed Design & Responsive Version (UX/UI)  
Integration of Hi-Fi design (based on your Figma models).  
**UX (Makeup):** Elegant interface highlighting textures. Hue selectors (color pads) should be wide and easy to click (mobile-friendly).  
**UX (Coffee):** Warm interface. Cup sizes and additions (milk, syrup) should be clear (use of stylized icons or radio buttons).  
Responsive: The layout must switch from a horizontal layout on desktop (left preview, right options) to a vertical layout on mobile.   
Step 3: JavaScript and DOM Manipulation (The heart of the project)    
This is where the app comes to life. You must use Vanilla JS.      
   
Event headphones: Capture clicks on the different options (eg: coffee size, lipstick shade).    
#### Real-time UI update:    
**Coffee:** Change the cup image or icon depending on the size chosen. View selected supplements.  
**Makeup:** Change the color of the product preview depending on the tablet clicked.  
Dynamic calculation: The total price must be updated instantly each time the option changes.  
**Storage:** When clicking on "Validate/Add to cart", save the configuration (via localStorage or sessionStorage) and redirect to Page 2 (Summary), which will read this data to display the final order. (Bonus)  

## Planification : 
the product planification where based on jira platform, under Scrum, Kanban Framwork, creating **product backlog**,  
based on **user story** ,  

managing sprints with **Sprint Backlog**, by sprading the sprint to tickets  .


---   
## Project Structure  

BRUM  
├── assets/  
│     ├── icons/  
│     │     └── icons.png  
│     └── images/  
│           └── images.png  
├── fonts  
│     └── fonts.ttf   
├── index.html  
├── mainStyle.css  
├── hiddenStyle.css  
├── responsive.css  
├── script.js  
└── README.md  
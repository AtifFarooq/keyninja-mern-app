# keyninja-mern-app

I've used Node/Express/MongoDB for the back-end, and React.js for the front end in this basic app. I'm using some Bootstrap classes on the JSX elements for the styling.

## Home Page

This is the application's home page. As we can see, it has a simple NavBar at the top. At the bottom, we have a list of Customers. Their details (first name, last name and e-mail address) are being rendered out after being queried from the local instance of MongoDB. 

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/home_page.jpg)

## Customer Details

If we press on one of the customers from the list, we are redirected to a new page that contains details of the current customer:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/customer.jpg)

## Adding a New Customer

If we click on the 'Add Customer' button, we are taken to a different page that allows us to enter details for a new customer. Suppose we want to enter details for a customer called 'Queen Elizabeth':

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/add_customer.jpg)

Once we press the 'Add Customer' button, we are taken back to the homepage, where we can see the newly added user in the list (as the last entry):

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/add_customer_post.jpg)

## Updating Customer Details

Suppose that we want to change the details for 'Elon Musk'. We press the edit button, and that takes us to a new page:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/edit_customer.jpg)

We change these values. We rename 'Elon Musk' to 'Elongated Muskrat', and change the email address. After we press the 'Submit' button, we are again redirected to the main page, where we can now see that the changes have been updated:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/edit_customer_post.jpg)

## Removing a Customer

Now, suppose that we want to delete the customer 'Queen Elizabeth'. Clicking on the 'Delete' will achieve this:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-mern-app/master/resources/delete.jpg)

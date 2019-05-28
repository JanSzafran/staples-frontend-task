# Front-end task: eCommerce products

Create a web application to manage eCommerce products. Application user should be able to search and add products received from API to the cart. In a more details:

* After starting the application, the first page of the products should be loaded (the product should contain - picture, title, id, button for adding to the cart with quantity input).

* Clicking on the product should show the modal with details. Detailed product information should be displayed in the foreground (the product should contain a picture, title, id, description, brand, button to add to the cart with quantity input), what is underneath should be covered with a semi-transparent filling. 

* The application should have a filter (search functionality). Entering the value in the filter should return the results from the API for e.g. query `/products?q=:query`. The filter should be cleaned after pressing the `clean` button.

* The application should be paged in accordance with the API.

* _Optional:_ Products should be placed in the shopping cart displayed with quantity in the top right corner of the screen after clicking the `Add to Cart` button. The cart should be kept between page refreshments.

* _Optional:_ Unit tests of created components are welcome :).

## Notes

- Create your project in the `./client` directory.

- The design of the application is up to you :D.

- Use frameworks (Angular/React&Redux/Vue&Vuex etc.). We encourage you to try Vue and Vuex, because we use these tools. We want to see how you deal with Javascript and whether you can design a component structure. If you prefer to write in pure Javascript and not use any frameworks, this is fine.

- We allow the use of CSS libraries. We propose Tailwind.css because we work in it, of course there is no problem to create css from scratch or use scss.

- Your solution will be judged by its code quality (HTML/CSS/JS) and look and feel of the finished product.

## Running the API

Node.js 8 or greater is required.

```bash
npm start
```

Server address will appear in the terminal.

## How to deliver your solution

- Use whatever repository hosting you want.
- Compress the task in a `.zip` or a `.bundle` file. We want to have all the git history. Easiest way is to run:

```bash
git bundle create staples-frontend-task.bundle --all
```

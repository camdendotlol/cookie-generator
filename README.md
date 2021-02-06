# Cookie Generator

This simple web app generates a random "cookie" recipe using JavaScript's math object.

The first five ingredients (butter, sugar, flour, baking soda, and eggs) are essential cookie ingredients and are thus guaranteed to be in the recipe, although their amounts may be 0.

The next five ingredients are randomly selected from a large list. For clarity of code and ease of modification, the list of additives is stored in the `additives.js` file and imported by the main module. As a simple text list, the additives can be modified without any special coding skills by appending a new item in single-quotes.

# Devmountain Foundations
## Recipe App Conceptual Planning

### Features

- users can sign into the app with their email and password
- users can create recipes with ingredients and instructions
- recipes can be marked as public or private
- users can view other people’s recipes
- ingredients from recipes can be added to user’s grocery lists
- users can create their own occasions and assign recipes to occasions

### Brainstorming

During my brainstorming session, I considered the user journeys of the Recipe App and the required data for those and grouped them in these detailed User Stories:

As a **User**, I can sign up with my `email` and `password`.<br>
I can save my `name` and create an `username` so other people can see the recipes I created and find my profile.<br>
I can set an `avatar` to improve my personal branding.<br>
I can `verify` my email to make my account more secure.<br>

As a **User**, I can create an **Organization Profile** and invite other users to collabore and crate recipes for that profile.

I can create or browser for **Recipes** that have a `title`, `prep time`, `description`, `ingredients` (which are made of quantity + the ingredient itself) and `instructions`.<br>
When I create a recipe, I can decide if it's `public` and other users can see it or `private` and only me or selected users can see it.<br>
I can share a private/unlisted recipe with other users via a `shared link`.<br>
I can invite other users via email to manage (edit details, instructions and ingredients of) a recipe, they become `co-authors`.<br>
I can like public recipes and see how many `likes` that recipe has.

I can add a recipe full ingredient's list or pick individual items to my **Grocery List**.<br>
I can create multiple private grocery lists to better plan my month and `name` them to identify each from my collection of lists.<br>
I can see the ingredients of my grocery list grouped by their recipes.<br>
I can edit the `amount` of the ingredients on my grocery list or remove individual ingredients.<br>
I can easily clean all ingredients out of my grocery list.<br>
I can `cross off` an ingredient of my grocery list to mark I already picked or bought it.<br>

I can add recipes to a private or public collection of saved recipes.<br>
I can create `public` or `private` collections of recipes and `name` them by their related **Occasions**.<br>
I can see my occasions and see the recipes saved in those collections.<br>
I can remove recipes from my collections.<br>
I can add a short `description` to my occasion so me and/or other people can gain more details about that group of recipes.<br>
I can share a private/unlisted occasion with other users via a `shared link`.<br>
I can invite other users via email to manage (add/remove recipes of) a collection.<br>


### Table Ideas

| App Users Fields | Description |
| ----------- | ----------- |
| Email | To allow users to sign in and account recovery |
| Password | To allow users to sign in |
| Name | To display to other users who created a Recipe |
| Avatar | To improve personal branding |
| Activated? | To keep track if the user verified their email |

| Recipes Fields | Description |
| ----------- | ----------- |
| Title | To allow users to filter and search for recipes |
| Description | To gain more details on the recipe background |
| Yummy Picture | To increase user engagement / make people feel disappointed when their recipes don't plan out accordingly |
| Prep Time | To allow users to filter recipes |
| Public? | To disable/enable other users from viewing/searching for the recipe |
| Shared Link | To allow other users to access an unlisted/private recipe |
| Likes count | To improve perfomance when listing/displaying recipes (prevents from having to search through the RecipesLikes table every time) |

| Grocery Lists Fields | Description |
| ----------- | ----------- |
| User Id | - |
| Title | To allow users to identify their lists |

| Occasions Fields | Description |
| ----------- | ----------- |
| Title | To allow users to filter and search for occasions |
| Description | To gain more details on that collection |
| Shared Link | To allow other users to access an unlisted/private occasion |

| Recipe Ingredients Fields | Description |
| ----------- | ----------- |
| Recipe id | - |
| Amount | To keep track of the amount needed for that ingredient |
| Ingredient name | To identify the ingredient |

| Recipe Instructions Fields | Description |
| ----------- | ----------- |
| Recipe id | - |
| Title | To hightlight the instruction theme |
| Description | To detail the instruction |
| Step | To save the step/order of that instruction step |

| Recipes Users | Description |
| ----------- | ----------- |
| Recipe id | - |
| User id | - |
| Role | To manage the access rights each user has on each recipe |

| Occasions Users | Description |
| ----------- | ----------- |
| Recipe id | - |
| Occasion id | - |
| Role | To manage the access rights each user has on each occasion |

| Occasions Recipes Fields | Description |
| ----------- | ----------- |
| Recipe id | - |
| Occasion id | - |

| Grocery Lists Ingredients Fields | Description |
| ----------- | ----------- |
| Recipe Ingredient id | - |
| Grocery List id | - |
| Personalized amount | To change the amount needed for that ingredient |
| Checked? | To track if the item has been bought/cross off |

| Recipes Likes Fields | Description |
| ----------- | ----------- |
| Recipe id | - |
| User id | - |

### Relationships

#### One-to-one
There aren't any one to one relationships in the Recipe App.

#### One-to-many
- Recipe-Ingredients: each recipe can have multiple ingredients, but each recipe ingredient should belong to only one recipe.
- Recipe-Instructions: each recipe can have multiple instructions, but each recipe instruction should belong to only one recipe.
- User-GroceryLists: each user can have multiple grocery lists, but each grocery list should belong to only one user.

#### Many-to-many
- Users-Recipes: each user can have multiple recipes and each recipe can belong to multiple users - this was first grouped as a One-to-many relationship, but then it was decided to keep as a many to many to facilitate organizations profile and multi authors feature.
- Users-Occasions: each user can have multiple occasions and each occasion can belong to multiple users - this was first grouped as a One-to-many relationship, but then it was decided to keep as a many to many to facilitate shared management of a collection.
- Recipes-Occasions: each occasion can have multiple recipes associated with and each recipe can be associated to multiple recipes.
- GroceryLists-RecipesIngredients: each grocery list can have as many associated with recipe ingredients and each recipe ingredient can be associated to as many grocery lists.
- Users-LikedRecipe: each user can like multiple recipes and each recipe can be liked by multiple users.

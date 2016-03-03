The *things* that show up on your app's main view are part of some seed data that is added to your database (including your test and admin users) every time you restart your app (by running `grunt serve` in the command line). This data is defined in **/server/config/seed.js**.  

You can add, remove, or change data in this file, and it will be written to your database, overwriting any duplicates the next time you run `grunt serve`. If an object defined in **seed.js** is overwritten, the database will assign a new *.\_id* property to it (we'll cover *.\_id* properties in the next section), which may give you some issues later on in testing. To avoid this, you can turn off seeding by setting `seedDB: false` in **/server/config/environment/development.js**.

[PREVIOUS](Accessing-the-database-from-your-frontend)
[NEXT](Quick-tip-keep-data-in-sync)

import Route from '@ioc:Adonis/Core/Route';

Route.post("/users", "UsersController.create");
Route.get("/users", "UsersController.index");

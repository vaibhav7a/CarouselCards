import Category from '../Model/Category';
export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d', require("../assets/italian-food-1024.jpg")),
  new Category('c2', 'Quick & Easy', '#f54242', require("../assets/quick&Easy.jpg")),
  new Category('c3', 'Hamburgers', '#f5a442', require("../assets/humburguer.jpg")),
  new Category('c4', 'German', '#f5d142', require("../assets/Swedish-Nomad.jpg")),
  new Category('c5', 'Light & Lovely', '#368dff', require("../assets/lunch-mezze.jpg")),
  new Category('c7', 'Breakfast', '#9eecff', require("../assets/breakfast.jpg")),
  new Category('c8', 'Asian', '#b9ffb0', require("../assets/spring-rolls.jpg")),
  new Category('c9', 'French', '#ffc7ff', require("../assets/french-food.jpg")),
  new Category('c10', 'Summer', '#47fced', require("../assets/summer.jpg")),
];

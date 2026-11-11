/* Wag & Whisker: product list and approved reviews.
   Change these with the Admin page, download the new file, and upload it to GitHub next to index.html. */
var PRODUCTS = [
  {"id":"pedigree","name":"Pedigree","pet":"dogs","category":"Food","price":200,"description":"Dry and wet dog food for puppies and adult dogs.","image":"images/pedigree.jpg","active":true},
  {"id":"smartheart","name":"SmartHeart","pet":"dogs","category":"Food","price":250,"description":"Dog food with protein, vitamins and minerals.","image":"images/smartheart.jpg","active":true},
  {"id":"vitality","name":"Vitality","pet":"dogs","category":"Food","price":120,"description":"Dog food for everyday feeding.","image":"images/vitality.jpg","active":true},
  {"id":"nutrichunks","name":"Nutri Chunks","pet":"dogs","category":"Food","price":170,"description":"Complete dog food in different varieties.","image":"images/nutrichunks.jpg","active":true},
  {"id":"royalcanin-dogs","name":"Royal Canin (dogs)","pet":"dogs","category":"Food","price":150,"description":"Specialized nutrition for different dog breeds and sizes.","image":"images/royalcanin-dog.jpg","active":true},
  {"id":"whiskas","name":"Whiskas","pet":"cats","category":"Food","price":520,"description":"Dry and wet food for cats.","image":"images/whiskas.jpg","active":true},
  {"id":"friskies","name":"Friskies","pet":"cats","category":"Food","price":420,"description":"Cat food with different flavors.","image":"images/friskies.jpg","active":true},
  {"id":"me-o","name":"Me-O","pet":"cats","category":"Food","price":360,"description":"Dry and wet cat food.","image":"images/meo.jpg","active":true},
  {"id":"royalcanin-cats","name":"Royal Canin (cats)","pet":"cats","category":"Food","price":380,"description":"Specialized food for different cat breeds and life stages.","image":"images/royalcanin-cat.jpg","active":true},
  {"id":"sheba","name":"Sheba","pet":"cats","category":"Food","price":300,"description":"Premium wet cat food.","image":"images/sheba.jpg","active":true}
];

/* Reviews, one list per product id. Add approved reviews here with the Admin page. */
var REVIEWS = {};

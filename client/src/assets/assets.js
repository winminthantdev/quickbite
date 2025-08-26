import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";

import slide1 from "./slide_1.jpg"
import slide2 from "./slide_2.webp"
import slide3 from "./slide_3.webp"
import slide4 from "./slide_4.jpg"

import chinese_food_image from './chinese_food_image.jpeg'
import drinks_image from './drink.png'
import burmese_food_image from './burmesefood.jpg'
import thai_food_image from './thaifood.jpg'

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  delivery_truck_icon,
  leaf_icon,
  black_arrow_icon,
  white_arrow_icon,

  slide1,
  slide2,
  slide3,
  slide4,

  chinese_food_image,
  burmese_food_image,
  thai_food_image,
  drinks_image,
};

// Category datas
export const dummyCategories = [
  {
    "text": "Chinese Food",
    "path": "Chinese",
    "image": chinese_food_image,
  },
  {
    "text": "Thai Food",
    "path": "Thai",
    "image": thai_food_image,
  },
  {
    "text": "Burmese Food",
    "path": "Burmese",
    "image": burmese_food_image,
  },
  {
    "text": "Drinks",
    "path": "Drinks",
    "image": drinks_image,
  }
];


//  products datas
export const dummyProducts = [

    // Drinks datas
  {
    "_id": "a2",
    "name": "Johnnie Walker Black Label 700ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 85,
    "offerPrice": 75,
    "image": ["johnnie_black_1", "johnnie_black_2"],
    "description": [
      "Blended Scotch whisky",
      "Rich and smooth flavor with smoky notes",
      "Perfect for sipping or mixing"
    ],
    "createdAt": "2025-08-24T12:10:00.000Z",
    "updatedAt": "2025-08-24T12:10:00.000Z",
    "inStock": true
  },
  {
    "_id": "b3",
    "name": "Absolut Vodka 1L",
    "category": "Drinks",
    "subCategory": "Vodka",
    "price": 45,
    "offerPrice": 40,
    "image": ["absolut_1", "absolut_2"],
    "description": [
      "Swedish vodka made from winter wheat",
      "Clean and crisp taste",
      "Versatile for cocktails"
    ],
    "createdAt": "2025-08-24T12:12:00.000Z",
    "updatedAt": "2025-08-24T12:12:00.000Z",
    "inStock": true
  },
  {
    "_id": "c4",
    "name": "Hendrick's Gin 750ml",
    "category": "Drinks",
    "subCategory": "Gin",
    "price": 60,
    "offerPrice": 55,
    "image": ["hendricks_1", "hendricks_2"],
    "description": [
      "Gin with a unique blend of cucumber and rose",
      "Floral and refreshing flavor",
      "Ideal for gin and tonics"
    ],
    "createdAt": "2025-08-24T12:15:00.000Z",
    "updatedAt": "2025-08-24T12:15:00.000Z",
    "inStock": true
  },
  {
    "_id": "d5",
    "name": "Captain Morgan Spiced Rum 750ml",
    "category": "Drinks",
    "subCategory": "Rum",
    "price": 30,
    "offerPrice": 28,
    "image": ["captain_morgan_1", "captain_morgan_2"],
    "description": [
      "Spiced rum with notes of vanilla and caramel",
      "Bold and smooth taste",
      "Great for mixing with cola or in cocktails"
    ],
    "createdAt": "2025-08-24T12:18:00.000Z",
    "updatedAt": "2025-08-24T12:18:00.000Z",
    "inStock": true
  },
  {
    "_id": "e6",
    "name": "Jack Daniel's Old No. 7 Tennessee Whiskey 1L",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 55,
    "offerPrice": 50,
    "image": ["jack_daniels_1", "jack_daniels_2"],
    "description": [
      "Charcoal-mellowed Tennessee whiskey",
      "Smooth and sweet with a classic taste",
      "Enjoy neat, on the rocks, or in a cocktail"
    ],
    "createdAt": "2025-08-24T12:20:00.000Z",
    "updatedAt": "2025-08-24T12:20:00.000Z",
    "inStock": true
  },
  {
    "_id": "f7",
    "name": "Corona Extra 12-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 25,
    "offerPrice": 22,
    "image": ["corona_1", "corona_2"],
    "description": [
      "Pale lager beer from Mexico",
      "Crisp and refreshing with a light flavor",
      "Best served with a lime wedge"
    ],
    "createdAt": "2025-08-24T12:22:00.000Z",
    "updatedAt": "2025-08-24T12:22:00.000Z",
    "inStock": true
  },
  {
    "_id": "g8",
    "name": "Chivas Regal 12-Year-Old 700ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 70,
    "offerPrice": 65,
    "image": ["chivas_regal_1", "chivas_regal_2"],
    "description": [
      "Blended Scotch whisky aged for 12 years",
      "Fruity and sweet with a lingering finish",
      "A classic and sophisticated choice"
    ],
    "createdAt": "2025-08-24T12:25:00.000Z",
    "updatedAt": "2025-08-24T12:25:00.000Z",
    "inStock": true
  },
  {
    "_id": "h9",
    "name": "Smirnoff Red Label 700ml",
    "category": "Drinks",
    "subCategory": "Vodka",
    "price": 28,
    "offerPrice": 25,
    "image": ["smirnoff_1", "smirnoff_2"],
    "description": [
      "Triple-distilled vodka",
      "Smooth and clean taste",
      "A great base for a wide range of cocktails"
    ],
    "createdAt": "2025-08-24T12:28:00.000Z",
    "updatedAt": "2025-08-24T12:28:00.000Z",
    "inStock": true
  },
  {
    "_id": "i10",
    "name": "Tanqueray London Dry Gin 1L",
    "category": "Drinks",
    "subCategory": "Gin",
    "price": 40,
    "offerPrice": 38,
    "image": ["tanqueray_1", "tanqueray_2"],
    "description": [
      "London dry gin with a strong juniper character",
      "Bold and crisp flavor",
      "A classic choice for martinis"
    ],
    "createdAt": "2025-08-24T12:30:00.000Z",
    "updatedAt": "2025-08-24T12:30:00.000Z",
    "inStock": true
  },
  {
    "_id": "j11",
    "name": "Bacardi Carta Blanca 750ml",
    "category": "Drinks",
    "subCategory": "Rum",
    "price": 25,
    "offerPrice": 23,
    "image": ["bacardi_1", "bacardi_2"],
    "description": [
      "Light and dry white rum",
      "Smooth and subtle flavor with notes of vanilla and almond",
      "The key ingredient for a classic Mojito"
    ],
    "createdAt": "2025-08-24T12:32:00.000Z",
    "updatedAt": "2025-08-24T12:32:00.000Z",
    "inStock": true
  },
  {
    "_id": "k12",
    "name": "Grey Goose Vodka 750ml",
    "category": "Drinks",
    "subCategory": "Vodka",
    "price": 50,
    "offerPrice": 48,
    "image": ["grey_goose_1", "grey_goose_2"],
    "description": [
      "Premium French vodka",
      "Soft and smooth texture",
      "Perfect for sipping on its own or in a martini"
    ],
    "createdAt": "2025-08-24T12:35:00.000Z",
    "updatedAt": "2025-08-24T12:35:00.000Z",
    "inStock": true
  },
  {
    "_id": "l13",
    "name": "Jameson Irish Whiskey 700ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 40,
    "offerPrice": 38,
    "image": ["jameson_1", "jameson_2"],
    "description": [
      "Triple-distilled Irish whiskey",
      "Smooth and balanced flavor with notes of nutty and vanilla",
      "Enjoy neat, with a mixer, or in an Irish Coffee"
    ],
    "createdAt": "2025-08-24T12:38:00.000Z",
    "updatedAt": "2025-08-24T12:38:00.000Z",
    "inStock": true
  },
  {
    "_id": "m14",
    "name": "Bombay Sapphire Gin 750ml",
    "category": "Drinks",
    "subCategory": "Gin",
    "price": 45,
    "offerPrice": 42,
    "image": ["bombay_sapphire_1", "bombay_sapphire_2"],
    "description": [
      "Vapor-infused gin with a blend of 10 botanicals",
      "Bright and citrusy flavor",
      "A modern classic for a gin and tonic"
    ],
    "createdAt": "2025-08-24T12:40:00.000Z",
    "updatedAt": "2025-08-24T12:40:00.000Z",
    "inStock": true
  },
  {
    "_id": "n15",
    "name": "Malibu Rum 750ml",
    "category": "Drinks",
    "subCategory": "Rum",
    "price": 22,
    "offerPrice": 20,
    "image": ["malibu_1", "malibu_2"],
    "description": [
      "Coconut-flavored Caribbean rum",
      "Sweet and tropical taste",
      "Ideal for fruity cocktails like a Pina Colada"
    ],
    "createdAt": "2025-08-24T12:42:00.000Z",
    "updatedAt": "2025-08-24T12:42:00.000Z",
    "inStock": true
  },
  {
    "_id": "o16",
    "name": "Jose Cuervo Especial Tequila 700ml",
    "category": "Drinks",
    "subCategory": "Tequila",
    "price": 35,
    "offerPrice": 32,
    "image": ["jose_cuervo_1", "jose_cuervo_2"],
    "description": [
      "Gold tequila from Mexico",
      "Sweet and spicy with a smooth finish",
      "The perfect base for a classic Margarita"
    ],
    "createdAt": "2025-08-24T12:45:00.000Z",
    "updatedAt": "2025-08-24T12:45:00.000Z",
    "inStock": true
  },
  {
    "_id": "p17",
    "name": "Heineken 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 15,
    "offerPrice": 14,
    "image": ["heineken_1", "heineken_2"],
    "description": [
      "Pale lager beer from the Netherlands",
      "Slightly fruity and refreshing taste",
      "A globally recognized and popular beer"
    ],
    "createdAt": "2025-08-24T12:48:00.000Z",
    "updatedAt": "2025-08-24T12:48:00.000Z",
    "inStock": true
  },
  {
    "_id": "q18",
    "name": "Glenfiddich 12-Year-Old 700ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 95,
    "offerPrice": 90,
    "image": ["glenfiddich_1", "glenfiddich_2"],
    "description": [
      "Single malt Scotch whisky aged for 12 years",
      "Fruity and sweet with a classic Speyside character",
      "A benchmark single malt whisky"
    ],
    "createdAt": "2025-08-24T12:50:00.000Z",
    "updatedAt": "2025-08-24T12:50:00.000Z",
    "inStock": true
  },
  {
    "_id": "r19",
    "name": "Patrón Silver Tequila 750ml",
    "category": "Drinks",
    "subCategory": "Tequila",
    "price": 75,
    "offerPrice": 70,
    "image": ["patron_1", "patron_2"],
    "description": [
      "100% agave tequila",
      "Crisp and clean with notes of citrus",
      "A premium tequila for sipping or in high-end cocktails"
    ],
    "createdAt": "2025-08-24T12:52:00.000Z",
    "updatedAt": "2025-08-24T12:52:00.000Z",
    "inStock": true
  },
  {
    "_id": "s20",
    "name": "Courvoisier VS Cognac 700ml",
    "category": "Drinks",
    "subCategory": "Brandy",
    "price": 60,
    "offerPrice": 55,
    "image": ["courvoisier_1", "courvoisier_2"],
    "description": [
      "VS (Very Special) cognac",
      "Floral and fruity with a rich finish",
      "A sophisticated spirit for enjoying neat"
    ],
    "createdAt": "2025-08-24T12:55:00.000Z",
    "updatedAt": "2025-08-24T12:55:00.000Z",
    "inStock": true
  },
  {
    "_id": "t21",
    "name": "Baileys Irish Cream 700ml",
    "category": "Drinks",
    "subCategory": "Liqueur",
    "price": 30,
    "offerPrice": 28,
    "image": ["baileys_1", "baileys_2"],
    "description": [
      "Irish cream liqueur with whiskey and cream",
      "Smooth and creamy with notes of chocolate and vanilla",
      "Perfect in coffee, desserts, or on its own"
    ],
    "createdAt": "2025-08-24T12:58:00.000Z",
    "updatedAt": "2025-08-24T12:58:00.000Z",
    "inStock": true
  },
  {
    "_id": "u22",
    "name": "Modelo Especial 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 16,
    "offerPrice": 15,
    "image": ["modelo_1", "modelo_2"],
    "description": [
      "Pilsner-style lager beer from Mexico",
      "Crisp and full-flavored with a rich taste",
      "Pairs well with a variety of foods"
    ],
    "createdAt": "2025-08-24T13:00:00.000Z",
    "updatedAt": "2025-08-24T13:00:00.000Z",
    "inStock": true
  },
  {
    "_id": "v23",
    "name": "Tito's Handmade Vodka 1.75L",
    "category": "Drinks",
    "subCategory": "Vodka",
    "price": 55,
    "offerPrice": 50,
    "image": ["titos_1", "titos_2"],
    "description": [
      "Handmade American vodka from corn",
      "Smooth and slightly sweet taste",
      "A popular choice for its clean and pure flavor"
    ],
    "createdAt": "2025-08-24T13:03:00.000Z",
    "updatedAt": "2025-08-24T13:03:00.000Z",
    "inStock": true
  },
  {
    "_id": "w24",
    "name": "Maker's Mark Bourbon 750ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 40,
    "offerPrice": 38,
    "image": ["makers_mark_1", "makers_mark_2"],
    "description": [
      "Bourbon whiskey with a soft and wheated mashbill",
      "Smooth and approachable with notes of caramel and vanilla",
      "Handcrafted and aged for a unique taste"
    ],
    "createdAt": "2025-08-24T13:05:00.000Z",
    "updatedAt": "2025-08-24T13:05:00.000Z",
    "inStock": true
  },
  {
    "_id": "x25",
    "name": "Svedka Vodka 1L",
    "category": "Drinks",
    "subCategory": "Vodka",
    "price": 25,
    "offerPrice": 22,
    "image": ["svedka_1", "svedka_2"],
    "description": [
      "Swedish vodka distilled five times",
      "Clean and crisp with a smooth finish",
      "A value-driven and versatile vodka"
    ],
    "createdAt": "2025-08-24T13:08:00.000Z",
    "updatedAt": "2025-08-24T13:08:00.000Z",
    "inStock": true
  },
  {
    "_id": "y26",
    "name": "Dewar's White Label 700ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 35,
    "offerPrice": 32,
    "image": ["dewars_1", "dewars_2"],
    "description": [
      "Blended Scotch whisky",
      "Smooth and honeyed with a clean finish",
      "A classic and approachable Scotch"
    ],
    "createdAt": "2025-08-24T13:10:00.000Z",
    "updatedAt": "2025-08-24T13:10:00.000Z",
    "inStock": true
  },
  {
    "_id": "z27",
    "name": "Sauza Silver Tequila 750ml",
    "category": "Drinks",
    "subCategory": "Tequila",
    "price": 28,
    "offerPrice": 25,
    "image": ["sauza_1", "sauza_2"],
    "description": [
      "Silver tequila made from blue agave",
      "Clean and citrusy flavor",
      "Great for margaritas and other cocktails"
    ],
    "createdAt": "2025-08-24T13:12:00.000Z",
    "updatedAt": "2025-08-24T13:12:00.000Z",
    "inStock": true
  },
  {
    "_id": "aa28",
    "name": "Fireball Cinnamon Whisky 750ml",
    "category": "Drinks",
    "subCategory": "Whiskey",
    "price": 25,
    "offerPrice": 23,
    "image": ["fireball_1", "fireball_2"],
    "description": [
      "Cinnamon-flavored whiskey",
      "Sweet and spicy with a strong cinnamon kick",
      "Best enjoyed as a chilled shot"
    ],
    "createdAt": "2025-08-24T13:15:00.000Z",
    "updatedAt": "2025-08-24T13:15:00.000Z",
    "inStock": true
  },
  {
    "_id": "ab29",
    "name": "Jägermeister 700ml",
    "category": "Drinks",
    "subCategory": "Liqueur",
    "price": 30,
    "offerPrice": 28,
    "image": ["jagermeister_1", "jagermeister_2"],
    "description": [
      "Herbal liqueur made with 56 botanicals",
      "Sweet and complex flavor with notes of anise and citrus",
      "Traditionally served as a chilled shot"
    ],
    "createdAt": "2025-08-24T13:18:00.000Z",
    "updatedAt": "2025-08-24T13:18:00.000Z",
    "inStock": true
  },
  {
    "_id": "ac30",
    "name": "Red Bull 4-pack",
    "category": "Drinks",
    "subCategory": "Energy Drink",
    "price": 10,
    "offerPrice": 9,
    "image": ["red_bull_1", "red_bull_2"],
    "description": [
      "Energy drink with caffeine and taurine",
      "Sweet and slightly tangy flavor",
      "Provides a boost of energy"
    ],
    "createdAt": "2025-08-24T13:20:00.000Z",
    "updatedAt": "2025-08-24T13:20:00.000Z",
    "inStock": true
  },
  {
    "_id": "ad31",
    "name": "Coca-Cola Classic 2L",
    "category": "Drinks",
    "subCategory": "Soft Drink",
    "price": 3,
    "offerPrice": 2.5,
    "image": ["coke_1", "coke_2"],
    "description": [
      "Classic carbonated soft drink",
      "Sweet and refreshing taste",
      "A globally loved beverage"
    ],
    "createdAt": "2025-08-24T13:22:00.000Z",
    "updatedAt": "2025-08-24T13:22:00.000Z",
    "inStock": true
  },
  {
    "_id": "ae32",
    "name": "Pepsi 2L",
    "category": "Drinks",
    "subCategory": "Soft Drink",
    "price": 3,
    "offerPrice": 2.5,
    "image": ["pepsi_1", "pepsi_2"],
    "description": [
      "Carbonated soft drink with a bold taste",
      "Sweet and fizzy",
      "A refreshing alternative to other sodas"
    ],
    "createdAt": "2025-08-24T13:25:00.000Z",
    "updatedAt": "2025-08-24T13:25:00.000Z",
    "inStock": true
  },
  {
    "_id": "af33",
    "name": "Sprite 2L",
    "category": "Drinks",
    "subCategory": "Soft Drink",
    "price": 2.5,
    "offerPrice": 2,
    "image": ["sprite_1", "sprite_2"],
    "description": [
      "Lemon-lime flavored soft drink",
      "Crisp and clean with no caffeine",
      "Great for mixing or on its own"
    ],
    "createdAt": "2025-08-24T13:28:00.000Z",
    "updatedAt": "2025-08-24T13:28:00.000Z",
    "inStock": true
  },
  {
    "_id": "ag34",
    "name": "Evian Natural Spring Water 1L",
    "category": "Drinks",
    "subCategory": "Water",
    "price": 2,
    "offerPrice": 1.5,
    "image": ["evian_1", "evian_2"],
    "description": [
      "Natural spring water from the French Alps",
      "Clean and pure taste",
      "Perfect for staying hydrated"
    ],
    "createdAt": "2025-08-24T13:30:00.000Z",
    "updatedAt": "2025-08-24T13:30:00.000Z",
    "inStock": true
  },
  {
    "_id": "ah35",
    "name": "Perrier Carbonated Mineral Water 750ml",
    "category": "Drinks",
    "subCategory": "Water",
    "price": 2.5,
    "offerPrice": 2,
    "image": ["perrier_1", "perrier_2"],
    "description": [
      "Naturally carbonated mineral water",
      "Crisp and bubbly texture",
      "A refreshing alternative to soda"
    ],
    "createdAt": "2025-08-24T13:32:00.000Z",
    "updatedAt": "2025-08-24T13:32:00.000Z",
    "inStock": true
  },
  {
    "_id": "ai36",
    "name": "Ocean Spray Cranberry Juice 1.5L",
    "category": "Drinks",
    "subCategory": "Juice",
    "price": 5,
    "offerPrice": 4.5,
    "image": ["ocean_spray_1", "ocean_spray_2"],
    "description": [
      "Cranberry juice cocktail",
      "Sweet and tart flavor",
      "Great for cocktails or a refreshing drink"
    ],
    "createdAt": "2025-08-24T13:35:00.000Z",
    "updatedAt": "2025-08-24T13:35:00.000Z",
    "inStock": true
  },
  {
    "_id": "aj37",
    "name": "Tropicana Orange Juice 1L",
    "category": "Drinks",
    "subCategory": "Juice",
    "price": 4,
    "offerPrice": 3.5,
    "image": ["tropicana_1", "tropicana_2"],
    "description": [
      "100% pure squeezed orange juice",
      "Sweet and tangy with a classic orange flavor",
      "A healthy and delicious way to start the day"
    ],
    "createdAt": "2025-08-24T13:38:00.000Z",
    "updatedAt": "2025-08-24T13:38:00.000Z",
    "inStock": true
  },
  {
    "_id": "ak38",
    "name": "Gatorade Thirst Quencher 32oz",
    "category": "Drinks",
    "subCategory": "Sports Drink",
    "price": 2,
    "offerPrice": 1.75,
    "image": ["gatorade_1", "gatorade_2"],
    "description": [
      "Sports drink to replenish electrolytes",
      "Sweet and flavorful with a variety of options",
      "Helps you stay hydrated during and after exercise"
    ],
    "createdAt": "2025-08-24T13:40:00.000Z",
    "updatedAt": "2025-08-24T13:40:00.000Z",
    "inStock": true
  },
  {
    "_id": "al39",
    "name": "Bud Light 12-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 18,
    "offerPrice": 16,
    "image": ["bud_light_1", "bud_light_2"],
    "description": [
      "Light American lager beer",
      "Crisp and clean with a low-calorie profile",
      "A popular and easy-drinking beer"
    ],
    "createdAt": "2025-08-24T13:42:00.000Z",
    "updatedAt": "2025-08-24T13:42:00.000Z",
    "inStock": true
  },
  {
    "_id": "am40",
    "name": "Coors Light 12-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 18,
    "offerPrice": 16,
    "image": ["coors_light_1", "coors_light_2"],
    "description": [
      "Light American lager beer",
      "Cold-filtered for a crisp and refreshing taste",
      "A classic choice for a light beer"
    ],
    "createdAt": "2025-08-24T13:45:00.000Z",
    "updatedAt": "2025-08-24T13:45:00.000Z",
    "inStock": true
  },
  {
    "_id": "an41",
    "name": "Guinness Draught 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 20,
    "offerPrice": 18,
    "image": ["guinness_1", "guinness_2"],
    "description": [
      "Irish dry stout beer",
      "Creamy and smooth with a rich, roasted flavor",
      "A unique and iconic beer"
    ],
    "createdAt": "2025-08-24T13:48:00.000Z",
    "updatedAt": "2025-08-24T13:48:00.000Z",
    "inStock": true
  },
  {
    "_id": "ao42",
    "name": "Sierra Nevada Pale Ale 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 15,
    "offerPrice": 14,
    "image": ["sierra_nevada_1", "sierra_nevada_2"],
    "description": [
      "American pale ale",
      "Hoppy and citrusy with a balanced flavor",
      "A pioneering craft beer"
    ],
    "createdAt": "2025-08-24T13:50:00.000Z",
    "updatedAt": "2025-08-24T13:50:00.000Z",
    "inStock": true
  },
  {
    "_id": "ap43",
    "name": "Stella Artois 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 16,
    "offerPrice": 15,
    "image": ["stella_artois_1", "stella_artois_2"],
    "description": [
      "European lager beer",
      "Crisp and slightly bitter with a clean finish",
      "A classic and elegant beer"
    ],
    "createdAt": "2025-08-24T13:52:00.000Z",
    "updatedAt": "2025-08-24T13:52:00.000Z",
    "inStock": true
  },
  {
    "_id": "aq44",
    "name": "Dos Equis Lager Especial 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 14,
    "offerPrice": 13,
    "image": ["dos_equis_1", "dos_equis_2"],
    "description": [
      "Pilsner-style lager beer from Mexico",
      "Refreshing and smooth with a mild taste",
      "Pairs well with spicy food"
    ],
    "createdAt": "2025-08-24T13:55:00.000Z",
    "updatedAt": "2025-08-24T13:55:00.000Z",
    "inStock": true
  },
  {
    "_id": "ar45",
    "name": "Blue Moon Belgian White 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 15,
    "offerPrice": 14,
    "image": ["blue_moon_1", "blue_moon_2"],
    "description": [
      "Belgian-style wheat ale",
      "Spicy and citrusy with a hint of orange peel",
      "Traditionally served with an orange slice"
    ],
    "createdAt": "2025-08-24T13:58:00.000Z",
    "updatedAt": "2025-08-24T13:58:00.000Z",
    "inStock": true
  },
  {
    "_id": "as46",
    "name": "Samuel Adams Boston Lager 6-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 16,
    "offerPrice": 15,
    "image": ["samuel_adams_1", "samuel_adams_2"],
    "description": [
      "Vienna lager beer",
      "Rich and malty with a balanced hop character",
      "A classic American craft beer"
    ],
    "createdAt": "2025-08-24T14:00:00.000Z",
    "updatedAt": "2025-08-24T14:00:00.000Z",
    "inStock": true
  },
  {
    "_id": "at47",
    "name": "Miller Lite 12-pack",
    "category": "Drinks",
    "subCategory": "Beer",
    "price": 17,
    "offerPrice": 15,
    "image": ["miller_lite_1", "miller_lite_2"],
    "description": [
      "Light American lager beer",
      "Crisp and refreshing with a clean taste",
      "A go-to light beer for many"
    ],
    "createdAt": "2025-08-24T14:02:00.000Z",
    "updatedAt": "2025-08-24T14:02:00.000Z",
    "inStock": true
  },
  {
    "_id": "au48",
    "name": "O'Doul's Amber 6-pack",
    "category": "Drinks",
    "subCategory": "Non-Alcoholic Beer",
    "price": 10,
    "offerPrice": 9,
    "image": ["odouls_1", "odouls_2"],
    "description": [
      "Non-alcoholic amber beer",
      "Rich and malty with a sweet finish",
      "A great option for those who want the beer taste without the alcohol"
    ],
    "createdAt": "2025-08-24T14:05:00.000Z",
    "updatedAt": "2025-08-24T14:05:00.000Z",
    "inStock": true
  },
  {
    "_id": "av49",
    "name": "Arizona Green Tea with Ginseng and Honey 12-pack",
    "category": "Drinks",
    "subCategory": "Tea",
    "price": 12,
    "offerPrice": 10,
    "image": ["arizona_1", "arizona_2"],
    "description": [
      "Iced green tea with ginseng and honey",
      "Sweet and refreshing with a subtle herbal flavor",
      "A classic bottled tea"
    ],
    "createdAt": "2025-08-24T14:08:00.000Z",
    "updatedAt": "2025-08-24T14:08:00.000Z",
    "inStock": true
  },
  {
    "_id": "aw50",
    "name": "Lipton Iced Tea 2L",
    "category": "Drinks",
    "subCategory": "Tea",
    "price": 4,
    "offerPrice": 3.5,
    "image": ["lipton_1", "lipton_2"],
    "description": [
      "Classic sweetened iced tea",
      "Sweet and balanced flavor",
      "A popular and refreshing drink"
    ],
    "createdAt": "2025-08-24T14:10:00.000Z",
    "updatedAt": "2025-08-24T14:10:00.000Z",
    "inStock": true
  },
  {
    "_id": "ax51",
    "name": "Starbucks Frappuccino Mocha 4-pack",
    "category": "Drinks",
    "subCategory": "Coffee",
    "price": 8,
    "offerPrice": 7,
    "image": ["starbucks_1", "starbucks_2"],
    "description": [
      "Bottled mocha-flavored coffee drink",
      "Sweet and creamy with a strong coffee and chocolate flavor",
      "Perfect for an on-the-go coffee fix"
    ],
    "createdAt": "2025-08-24T14:12:00.000Z",
    "updatedAt": "2025-08-24T14:12:00.000Z",
    "inStock": true
  },
// Chinese Food Datas
  {
    "_id": "cf01",
    "name": "Kung Pao Chicken",
    "category": "Chinese",
    "subCategory": "Spicy Dishes",
    "price": 12,
    "offerPrice": 10,
    "image": ["kungpao_1.jpg", "kungpao_2.jpg", "kungpao_3.jpg"],
    "description": [
      "Spicy stir-fried chicken with peanuts",
      "Rich in protein",
      "Served with chili peppers"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf02",
    "name": "Sweet and Sour Pork",
    "category": "Chinese",
    "subCategory": "Classic Entrees",
    "price": 14,
    "offerPrice": 12,
    "image": ["sourpork_1.jpg", "sourpork_2.jpg"],
    "description": [
      "Crispy pork with sweet and sour sauce",
      "Tangy flavor",
      "Served with bell peppers"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf03",
    "name": "Fried Rice",
    "category": "Chinese",
    "subCategory": "Rice & Noodles",
    "price": 8,
    "offerPrice": 7,
    "image": ["friedrice_1.jpg", "friedrice_2.jpg"],
    "description": [
      "Classic Chinese fried rice",
      "Made with egg and vegetables",
      "Perfect side dish"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf04",
    "name": "Spring Rolls",
    "category": "Chinese",
    "subCategory": "Appetizers",
    "price": 6,
    "offerPrice": 5,
    "image": ["springroll_1.jpg", "springroll_2.jpg"],
    "description": [
      "Crispy fried rolls",
      "Filled with vegetables",
      "Popular appetizer"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf05",
    "name": "Hot and Sour Soup",
    "category": "Chinese",
    "subCategory": "Soups",
    "price": 7,
    "offerPrice": 6,
    "image": ["hotsoup_1.jpg", "hotsoup_2.jpg"],
    "description": [
      "Spicy and tangy soup",
      "Made with tofu and mushrooms",
      "Perfect starter"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf06",
    "name": "Chow Mein",
    "category": "Chinese",
    "subCategory": "Rice & Noodles",
    "price": 11,
    "offerPrice": 9,
    "image": ["chowmein_1.jpg", "chowmein_2.jpg"],
    "description": [
      "Stir-fried noodles",
      "Mixed with vegetables and soy sauce",
      "Popular street food"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf07",
    "name": "Dim Sum",
    "category": "Chinese",
    "subCategory": "Appetizers",
    "price": 9,
    "offerPrice": 8,
    "image": ["dimsum_1.jpg", "dimsum_2.jpg"],
    "description": [
      "Steamed dumplings",
      "Traditional Cantonese dish",
      "Served with dipping sauce"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf08",
    "name": "Mapo Tofu",
    "category": "Chinese",
    "subCategory": "Spicy Dishes",
    "price": 10,
    "offerPrice": 9,
    "image": ["mapotofu_1.jpg", "mapotofu_2.jpg"],
    "description": [
      "Spicy tofu with minced pork",
      "Rich Szechuan flavor",
      "Served with rice"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf09",
    "name": "Peking Duck",
    "category": "Chinese",
    "subCategory": "Specialty Dishes",
    "price": 20,
    "offerPrice": 18,
    "image": ["pekingduck_1.jpg", "pekingduck_2.jpg"],
    "description": [
      "Roast duck with crispy skin",
      "Served with pancakes",
      "Famous Beijing dish"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf10",
    "name": "Szechuan Beef",
    "category": "Chinese",
    "subCategory": "Spicy Dishes",
    "price": 15,
    "offerPrice": 13,
    "image": ["szechuanbeef_1.jpg", "szechuanbeef_2.jpg"],
    "description": [
      "Spicy stir-fried beef",
      "Cooked with chili and garlic",
      "Szechuan specialty"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf11",
    "name": "Steamed Buns",
    "category": "Chinese",
    "subCategory": "Snacks",
    "price": 5,
    "offerPrice": 4,
    "image": ["steamedbun_1.jpg", "steamedbun_2.jpg"],
    "description": [
      "Soft steamed buns",
      "Filled with pork or vegetables",
      "Popular snack"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf12",
    "name": "Egg Foo Young",
    "category": "Chinese",
    "subCategory": "Classic Entrees",
    "price": 9,
    "offerPrice": 8,
    "image": ["eggfooyoung_1.jpg", "eggfooyoung_2.jpg"],
    "description": [
      "Chinese-style omelette",
      "Cooked with vegetables and meat",
      "Served with gravy"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf13",
    "name": "Sesame Chicken",
    "category": "Chinese",
    "subCategory": "Classic Entrees",
    "price": 13,
    "offerPrice": 11,
    "image": ["sesamechicken_1.jpg", "sesamechicken_2.jpg"],
    "description": [
      "Crispy chicken coated with sesame sauce",
      "Sweet and savory taste",
      "Served with rice"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf14",
    "name": "Wonton Soup",
    "category": "Chinese",
    "subCategory": "Soups",
    "price": 8,
    "offerPrice": 7,
    "image": ["wontonsoup_1.jpg", "wontonsoup_2.jpg"],
    "description": [
      "Light broth with wonton dumplings",
      "Comforting soup",
      "Popular starter"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf15",
    "name": "General Tso's Chicken",
    "category": "Chinese",
    "subCategory": "Classic Entrees",
    "price": 14,
    "offerPrice": 12,
    "image": ["generaltso_1.jpg", "generaltso_2.jpg"],
    "description": [
      "Crispy fried chicken",
      "Glazed with sweet-spicy sauce",
      "Popular American-Chinese dish"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf16",
    "name": "Lo Mein",
    "category": "Chinese",
    "subCategory": "Rice & Noodles",
    "price": 11,
    "offerPrice": 9,
    "image": ["lomein_1.jpg", "lomein_2.jpg"],
    "description": [
      "Soft noodles stir-fried with vegetables",
      "Savory soy-based sauce",
      "Street food favorite"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf17",
    "name": "Mongolian Beef",
    "category": "Chinese",
    "subCategory": "Classic Entrees",
    "price": 16,
    "offerPrice": 14,
    "image": ["mongolianbeef_1.jpg", "mongolianbeef_2.jpg"],
    "description": [
      "Tender beef strips",
      "Cooked with green onions and garlic",
      "Sweet-savory sauce"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf18",
    "name": "Sesame Noodles",
    "category": "Chinese",
    "subCategory": "Rice & Noodles",
    "price": 9,
    "offerPrice": 8,
    "image": ["sesamenoodles_1.jpg", "sesamenoodles_2.jpg"],
    "description": [
      "Cold noodles tossed in sesame sauce",
      "Nutty flavor",
      "Refreshing summer dish"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf19",
    "name": "Chinese BBQ Pork (Char Siu)",
    "category": "Chinese",
    "subCategory": "Specialty Dishes",
    "price": 15,
    "offerPrice": 13,
    "image": ["charsiu_1.jpg", "charsiu_2.jpg"],
    "description": [
      "Roasted pork with sweet glaze",
      "Cantonese specialty",
      "Served with rice or noodles"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "cf20",
    "name": "Chinese Dumplings",
    "category": "Chinese",
    "subCategory": "Appetizers",
    "price": 10,
    "offerPrice": 9,
    "image": ["dumplings_1.jpg", "dumplings_2.jpg"],
    "description": [
      "Steamed or fried dumplings",
      "Filled with pork and vegetables",
      "Served with soy dipping sauce"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },

//   Thai Food Datas
  {
    "_id": "tf01",
    "name": "Pad Thai",
    "category": "Thai",
    "subCategory": "Noodle Dishes",
    "price": 12,
    "offerPrice": 10,
    "image": ["padthai_1.jpg", "padthai_2.jpg"],
    "description": [
      "Stir-fried rice noodles",
      "Topped with peanuts and lime",
      "Popular street food"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf02",
    "name": "Green Curry",
    "category": "Thai",
    "subCategory": "Curries",
    "price": 13,
    "offerPrice": 11,
    "image": ["greencurry_1.jpg", "greencurry_2.jpg"],
    "description": [
      "Spicy green curry with coconut milk",
      "Cooked with chicken and basil",
      "Served with jasmine rice"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf03",
    "name": "Tom Yum Soup",
    "category": "Thai",
    "subCategory": "Soups",
    "price": 9,
    "offerPrice": 8,
    "image": ["tomyum_1.jpg", "tomyum_2.jpg"],
    "description": [
      "Hot and sour soup",
      "Made with lemongrass and shrimp",
      "Famous Thai starter"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf04",
    "name": "Massaman Curry",
    "category": "Thai",
    "subCategory": "Curries",
    "price": 14,
    "offerPrice": 12,
    "image": ["massaman_1.jpg", "massaman_2.jpg"],
    "description": [
      "Mild curry with peanuts and potatoes",
      "Slow cooked beef or chicken",
      "Sweet and savory flavor"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf05",
    "name": "Som Tum (Papaya Salad)",
    "category": "Thai",
    "subCategory": "Salads",
    "price": 8,
    "offerPrice": 7,
    "image": ["somtum_1.jpg", "somtum_2.jpg"],
    "description": [
      "Spicy papaya salad",
      "Tossed with chili and lime",
      "Refreshing and tangy"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf06",
    "name": "Pad Kra Pao (Basil Chicken)",
    "category": "Thai",
    "subCategory": "Stir-fries",
    "price": 11,
    "offerPrice": 9,
    "image": ["padkrapao_1.jpg", "padkrapao_2.jpg"],
    "description": [
      "Spicy basil chicken stir-fry",
      "Served with rice and fried egg",
      "Street food favorite"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf07",
    "name": "Red Curry",
    "category": "Thai",
    "subCategory": "Curries",
    "price": 13,
    "offerPrice": 11,
    "image": ["redcurry_1.jpg", "redcurry_2.jpg"],
    "description": [
      "Spicy red curry",
      "Cooked with chicken and bamboo shoots",
      "Coconut milk based"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf08",
    "name": "Thai Fried Rice",
    "category": "Thai",
    "subCategory": "Rice & Noodles",
    "price": 9,
    "offerPrice": 8,
    "image": ["thaifriedrice_1.jpg", "thaifriedrice_2.jpg"],
    "description": [
      "Fried rice with Thai spices",
      "Topped with egg",
      "Served with cucumber slices"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf09",
    "name": "Panang Curry",
    "category": "Thai",
    "subCategory": "Curries",
    "price": 13,
    "offerPrice": 11,
    "image": ["panang_1.jpg", "panang_2.jpg"],
    "description": [
      "Creamy Panang curry",
      "Peanut and coconut base",
      "Mild spiciness"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
  {
    "_id": "tf10",
    "name": "Thai Fish Cakes",
    "category": "Thai",
    "subCategory": "Appetizers",
    "price": 10,
    "offerPrice": 9,
    "image": ["fishcakes_1.jpg", "fishcakes_2.jpg"],
    "description": [
      "Crispy Thai fish cakes",
      "Served with sweet chili sauce",
      "Popular appetizer"
    ],
    "createdAt": "2025-08-24T14:35:55.000Z",
    "updatedAt": "2025-08-24T14:35:55.000Z",
    "inStock": true
  },
//   Burmese Food Datas
  {
    "_id": "b001",
    "name": "Mohinga",
    "category": "Burmese",
    "subCategory": "Soup",
    "price": 8,
    "offerPrice": 6,
    "image": ["mohinga_1", "mohinga_2", "mohinga_3"],
    "description": ["Traditional fish soup with rice noodles", "Topped with crispy fritters", "Popular breakfast dish"],
    "createdAt": "2025-08-24T12:20:00.000Z",
    "updatedAt": "2025-08-24T12:20:00.000Z",
    "inStock": true
  },
  {
    "_id": "b002",
    "name": "Shan Noodles",
    "category": "Burmese",
    "subCategory": "Noodles",
    "price": 7,
    "offerPrice": 5,
    "image": ["shan_noodle_1", "shan_noodle_2"],
    "description": ["Rice noodles with chicken or pork", "Flavored with soy sauce and garlic", "Signature Shan dish"],
    "createdAt": "2025-08-24T12:21:00.000Z",
    "updatedAt": "2025-08-24T12:21:00.000Z",
    "inStock": true
  },
  {
    "_id": "b003",
    "name": "Tea Leaf Salad (Lahpet Thoke)",
    "category": "Burmese",
    "subCategory": "Salad",
    "price": 6,
    "offerPrice": 5,
    "image": ["lahpet_1", "lahpet_2"],
    "description": ["Fermented tea leaves salad", "Mixed with peanuts, sesame seeds, and crispy garlic", "Burmese national salad"],
    "createdAt": "2025-08-24T12:22:00.000Z",
    "updatedAt": "2025-08-24T12:22:00.000Z",
    "inStock": true
  },
  {
    "_id": "b004",
    "name": "Burmese Curry Chicken",
    "category": "Burmese",
    "subCategory": "Curry",
    "price": 10,
    "offerPrice": 8,
    "image": ["curry_chicken_1", "curry_chicken_2"],
    "description": ["Spicy chicken curry with turmeric and ginger", "Served with rice", "Homemade Burmese flavor"],
    "createdAt": "2025-08-24T12:23:00.000Z",
    "updatedAt": "2025-08-24T12:23:00.000Z",
    "inStock": true
  },
  {
    "_id": "b005",
    "name": "Burmese Pork Curry",
    "category": "Burmese",
    "subCategory": "Curry",
    "price": 10,
    "offerPrice": 8,
    "image": ["curry_pork_1", "curry_pork_2"],
    "description": ["Rich pork curry with Burmese spices", "Perfect with steamed rice", "Homestyle dish"],
    "createdAt": "2025-08-24T12:24:00.000Z",
    "updatedAt": "2025-08-24T12:24:00.000Z",
    "inStock": true
  },
  {
    "_id": "b006",
    "name": "Burmese Fish Curry",
    "category": "Burmese",
    "subCategory": "Curry",
    "price": 11,
    "offerPrice": 9,
    "image": ["curry_fish_1", "curry_fish_2"],
    "description": ["Spicy fish curry with lemongrass and turmeric", "Served with steamed rice", "Traditional Burmese flavor"],
    "createdAt": "2025-08-24T12:25:00.000Z",
    "updatedAt": "2025-08-24T12:25:00.000Z",
    "inStock": true
  },
  {
    "_id": "b007",
    "name": "Burmese Tofu Salad (Tofu Thoke)",
    "category": "Burmese",
    "subCategory": "Salad",
    "price": 7,
    "offerPrice": 6,
    "image": ["tofu_salad_1", "tofu_salad_2"],
    "description": ["Fried chickpea tofu salad", "Mixed with garlic oil, peanuts, and lime", "Light and healthy dish"],
    "createdAt": "2025-08-24T12:26:00.000Z",
    "updatedAt": "2025-08-24T12:26:00.000Z",
    "inStock": true
  },
  {
    "_id": "b008",
    "name": "Nangyi Thoke (Thick Noodles Salad)",
    "category": "Burmese",
    "subCategory": "Noodles",
    "price": 8,
    "offerPrice": 6,
    "image": ["nangyi_1", "nangyi_2"],
    "description": ["Thick rice noodles with chicken, egg, and chickpea flour sauce", "Topped with crispy onions", "Popular Burmese street food"],
    "createdAt": "2025-08-24T12:27:00.000Z",
    "updatedAt": "2025-08-24T12:27:00.000Z",
    "inStock": true
  },
  {
    "_id": "b009",
    "name": "Shan Tofu Soup",
    "category": "Burmese",
    "subCategory": "Soup",
    "price": 7,
    "offerPrice": 6,
    "image": ["shan_tofu_soup_1", "shan_tofu_soup_2"],
    "description": ["Light soup with Shan tofu and vegetables", "Healthy and comforting", "Popular breakfast or lunch dish"],
    "createdAt": "2025-08-24T12:28:00.000Z",
    "updatedAt": "2025-08-24T12:28:00.000Z",
    "inStock": true
  },
  {
    "_id": "b010",
    "name": "Coconut Rice",
    "category": "Burmese",
    "subCategory": "Rice",
    "price": 5,
    "offerPrice": 4,
    "image": ["coconut_rice_1", "coconut_rice_2"],
    "description": ["Fragrant rice cooked in coconut milk", "Mild and flavorful", "Served with curries"],
    "createdAt": "2025-08-24T12:29:00.000Z",
    "updatedAt": "2025-08-24T12:29:00.000Z",
    "inStock": true
  },
  {
    "_id": "b011",
    "name": "Burmese Chicken Rice",
    "category": "Burmese",
    "subCategory": "Rice",
    "price": 6,
    "offerPrice": 5,
    "image": ["chicken_rice_1", "chicken_rice_2"],
    "description": ["Steamed rice with poached chicken", "Served with ginger-garlic sauce", "Popular comfort food"],
    "createdAt": "2025-08-24T12:30:00.000Z",
    "updatedAt": "2025-08-24T12:30:00.000Z",
    "inStock": true
  },
  {
    "_id": "b012",
    "name": "Fried Rice Burmese Style",
    "category": "Burmese",
    "subCategory": "Rice",
    "price": 7,
    "offerPrice": 6,
    "image": ["fried_rice_1", "fried_rice_2"],
    "description": ["Stir-fried rice with vegetables, egg, and soy sauce", "Flavorful and quick meal", "Burmese street food favorite"],
    "createdAt": "2025-08-24T12:31:00.000Z",
    "updatedAt": "2025-08-24T12:31:00.000Z",
    "inStock": true
  },
  {
    "_id": "b013",
    "name": "Burmese Pork Skewers (Wet Tha Hin)",
    "category": "Burmese",
    "subCategory": "Grill",
    "price": 9,
    "offerPrice": 8,
    "image": ["pork_skewer_1", "pork_skewer_2"],
    "description": ["Grilled marinated pork skewers", "Served with spicy dipping sauce", "Popular snack"],
    "createdAt": "2025-08-24T12:32:00.000Z",
    "updatedAt": "2025-08-24T12:32",
    "inStock": true
  }
]
const products = [
    {
      "id": 1,
      "name": "Egg McMuffin",
      "images": [
        {
          "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:1-4-product-tile-desktop"
        },
        {
          "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Egg-McMuffin-1:product-header-mobile?wid=768&hei=443&dpr=off"
        }
      ],
      "desc": "A freshly cracked Grade A egg on a toasted English Muffin topped with real butter and add lean Canadian bacon and melty American cheese.",
      "ingredients": [
        {
          "id": 1,
          "name": "English Muffin",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/english_muffin"
        },
        {
          "id": 2,
          "name": "Egg",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/round_egg"
        },
        {
          "id": 3,
          "name": "Canadian Bacon",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/canadian_bacon"
        },
        {
          "id": 4,
          "name": "Pasteurized Process American Cheese",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
        },
        {
          "id": 5,
          "name": "Salted Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/butter_salted"
        },
        {
          "id": 6,
          "name": "Clarified Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/clarified_butter"
        }
      ],
      "price": 5.00,
      "veg": false
    },
    {
      "id": 2,
      "name": "Sausage McMuffin",
      "images": [
        {
          "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin:1-4-product-tile-desktop"
        },
        {
          "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-McMuffin:product-header-mobile?wid=768&hei=441&dpr=off"
        }
      ],
      "desc": "A warm, freshly toasted English muffin, topped with a savory hot sausage patty and a slice of melty American cheese.",
      "ingredients": [
        {
          "id": 1,
          "name": "English Muffin",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/english_muffin"
        },
        {
          "id": 2,
          "name": "Sausage Patty",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/sausage"
        },
        {
          "id": 3,
          "name": "Salted Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/butter_salted"
        },
        {
          "id": 4,
          "name": "Clarified Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/clarified_butter"
        }
      ],
      "price": 12.00,
      "veg": false
    },
    {
      "id": 3,
      "name": "Sausage Biscuit",
      "images": [
        {
          "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:1-4-product-tile-desktop"
        },
        {
          "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=443&dpr=off"
        }
      ],
      "desc": "Made with sizzling hot sausage on a warm buttermilk biscuit that’s topped with real butter and baked to perfection.",
      "ingredients": [
        {
          "id": 1,
          "name": "Biscuit",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/biscuit"
        },
        {
          "id": 2,
          "name": "Sausage Patty",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/sausage"
        },
        {
          "id": 5,
          "name": "Salted Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/butter_salted"
        }
      ],
      "price": 12.00,
      "veg": false
    },
    {
      "id": 4,
      "name": "Sausage Biscuit with Egg",
      "images": [
        {
          "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-with-Egg-Regular-Size-Biscuit-1:1-4-product-tile-desktop"
        },
        {
          "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Biscuit-with-Egg-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=441&dpr=off"
        }
      ],
      "desc": "A sizzling hot pork sausage patty, and a classic McDonald's folded egg.",
      "ingredients": [
        {
          "id": 1,
          "name": "Biscuit",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/biscuit"
        },
        {
          "id": 2,
          "name": "Folded Egg",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/folded_egg"
        },
        {
          "id": 3,
          "name": "Sausage Patty",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/sausage"
        },
        {
          "id": 4,
          "name": "Salted Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/butter_salted"
        },
        {
          "id": 5,
          "name": "Clarified Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/clarified_butter"
        }
      ],
      "price": 4.60,
      "veg": false
    },
    {
      "id": 6,
      "name": "McGriddles",
      "images": [
        {
          "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles-1:1-4-product-tile-desktop"
        },
        {
          "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-mobile?wid=768&hei=441&dpr=off"
        }
      ],
      "desc": "A warm griddle cakes—with the sweet taste of maple—that hold a fluffy folded egg, savory sausage, and melty American cheese.",
      "ingredients": [
        {
          "id": 1,
          "name": "Griddle Cakes",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/McGriddles_top"
        },
        {
          "id": 2,
          "name": "Sausage Patty",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/sausage"
        },
        {
          "id": 3,
          "name": "Folded Egg",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/folded_egg"
        },
        {
          "id": 4,
          "name": "Pasteurized Process American Cheese",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
        },
        {
          "id": 5,
          "name": "Clarified Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/clarified_butter"
        }
      ],
      "price": 12.00,
      "veg": false
    },
    {
      "id": 5,
      "name": "Crispy Chicken Sandwich",
      "images": [
        {
          "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-crispy-chicken-sandwich:1-4-product-tile-desktop"
        },
        {
          "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off"
        }
      ],
      "desc": "A southern style fried chicken sandwich that's crispy, juicy and tender perfection.",
      "ingredients": [
        {
          "id": 1,
          "name": "Crispy Chicken Fillet",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-crispy-chicken-fillet"
        },
        {
          "id": 2,
          "name": "Potato Roll",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-potato-roll"
        },
        {
          "id": 3,
          "name": "Crinkle Cut Pickle",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-crinkle-cut-pickle"
        },
        {
          "id": 4,
          "name": "Salted Butter",
          "img": "https://s7d1.scene7.com/is/image/mcdonalds/butter_salted"
        }
      ],
      "price": 8.00,
      "veg": false
    },
    // {
    //   "id": 6,
    //   "name": "Deluxe Chicken Sandwich",
    //   "images": [
    //     {
    //       "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:1-4-product-tile-desktop"
    //     },
    //     {
    //       "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-deluxe-crispy-chicken-sandwich:product-header-mobile?wid=768&hei=443&dpr=off"
    //     }
    //   ],
    //   "desc": "Get a little extra with toppings. Go deluxe with shredded lettuce, Roma tomatoes and mayo to take crispy, juicy and tender to the next level.",
    //   "ingredients": [
    //     {
    //       "id": 1,
    //       "name": "Crispy Chicken Fillet",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-crispy-chicken-fillet"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Potato Roll",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-potato-roll"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Roma Tomato",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/Ingredients_Tomato_180x180"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Shredded Lettuce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Mayonnaise",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/mayonnaise"
    //     }
    //   ],
    //   "price": 10,
    //   "veg": false
    // },
    // {
    //   "id": 7,
    //   "name": "Spicy Chicken Sandwich",
    //   "images": [
    //     {
    //       "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:1-4-product-tile-desktop"
    //     },
    //     {
    //       "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-spicy-crispy-chicken-sandwich:product-header-mobile?product-header-desktop&wid=768&hei=443&dpr=off"
    //     }
    //   ],
    //   "desc": "With our Spicy Pepper Sauce topping the southern style fried chicken fillet on a toasted potato roll",
    //   "ingredients": [
    //     {
    //       "id": 1,
    //       "name": "Crispy Chicken Fillet",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-crispy-chicken-fillet"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Potato Roll",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-potato-roll"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Spicy Pepper Sauce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-original-spicy-sauce"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Crinkle Cut Pickle",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/t-crinkle-cut-pickle"
    //     }
    //   ],
    //   "price": 9.60,
    //   "veg": false
    // },
    // {
    //   "id": 8,
    //   "name": "Filet-O-Fish®",
    //   "images": [
    //     {
    //       "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Filet-O-Fish-1:1-4-product-tile-desktop"
    //     },
    //     {
    //       "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Filet-O-Fish-1:product-header-mobile?wid=768&hei=443&dpr=off"
    //     }
    //   ],
    //   "desc": "On melty American cheese and topped with creamy McDonald’s tartar sauce, all served on a soft, steamed bun.",
    //   "ingredients": [
    //     {
    //       "id": 1,
    //       "name": "Fish Filet Patty",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/fish"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Regular Bun",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/regular_bun"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Tartar Sauce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/default_logo"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Pasteurized Process American Cheese Half Slice",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/american_cheese_half"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Shredded Lettuce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce"
    //     }
    //   ],
    //   "price": 7.00,
    //   "veg": false
    // },
    // { 
    //   "id": 9,
    //   "name": "McChicken®",
    //   "images": [
    //     {
    //       "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:1-4-product-tile-desktop"
    //     },
    //     {
    //       "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-mobile?wid=768&hei=443&dpr=off"
    //     }
    //   ],
    //   "desc": "Topped with shredded lettuce and just the right amount of creamy mayonnaise, all served on a perfectly toasted bun.",
    //   "ingredients": [
    //     {
    //       "id": 1,
    //       "name": "McChicken Patty",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/mcchicken"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Regular Bun",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/regular_bun"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Shredded Lettuce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Mayonnaisee",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/mayonnaisef"
    //     }
    //   ],
    //   "price": 8.00,
    //   "veg": false
    // },
    // {
    //   "id": 10,
    //   "name": "Big Mac",
    //   "images": [
    //     {
    //       "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:1-4-product-tile-desktop"
    //     },
    //     {
    //       "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Mac-1:product-header-mobile?wid=768&hei=441&dpr=off"
    //     }
    //   ],
    //   "desc": "The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun.",
    //   "ingredients": [
    //     {
    //       "id": 1,
    //       "name": "Big Mac Bun",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/big_mac_bun"
    //     },
    //     {
    //       "id": 2,
    //       "name": "100% Beef Patty",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/10_1_patty"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Shredded Lettuce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Big Mac Sauce",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/big_mac_sauce"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Pasteurized Process American Cheese",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
    //     },
    //     {
    //       "id": 6,
    //       "name": "Pickle Slices",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/pickles"
    //     },
    //     {
    //       "id": 7,
    //       "name": "Onions",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/reconstituted_onions"
    //     }
    //   ],
    //   "price": 10.45,
    //   "veg": false
    // },
    // {
    //   "id": 11,
    //   "name": "Quarter Pounder",
    //   "images": [
    //     {
    //       "sm": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop"
    //     },
    //     {
    //       "lg": "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Quarter-Pounder-with-Cheese-1:product-header-mobile?wid=768&hei=443&dpr=off"
    //     }
    //   ],
    //   "desc": "Sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun.",
    //   "ingredients": [
    //     {
    //       "id": 1,
    //       "name": "Quarter Pound 100% Beef Patty",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/default_logo"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Quarter Pound Bun",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/quarter_pounder_bun"
    //     },
    //     {
    //       "id": 3,
    //       "name": "Pasteurized Process American Cheese",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180"
    //     },
    //     {
    //       "id": 4,
    //       "name": "Ketchup",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/ketchup"
    //     },
    //     {
    //       "id": 5,
    //       "name": "Pickle Slices",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/pickles"
    //     },
    //     {
    //       "id": 6,
    //       "name": "Onions",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/slivered_onions"
    //     },
    //     {
    //       "id": 7,
    //       "name": "Mustard",
    //       "img": "https://s7d1.scene7.com/is/image/mcdonalds/mustard"
    //     }
    //   ],
    //   "price": 6.00,
    //   "veg": false
    // }
  ]

  export default products;
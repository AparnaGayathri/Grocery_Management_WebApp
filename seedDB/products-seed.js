const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------vegetables
  const vegetables_title = [
    "Tomatoes",
    "Carrot",
    "Onion",
    "EggPlant",
    "Potato",
    "Lady Finger",
    "Green Beans",
    "Beetroot",
    "Broccoli",
    "Cucumber",
  ];
  const vegetables_imgs = [
    "https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1601493700750-58796129ebb5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnJvdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1599145566106-fa02aafba0b4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9uaW9ufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1604321272882-07c73743be32?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEVnZ1BsYW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1664289242854-e99d345cfa92?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFkeSUyMGZpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/uploads/141143339879512fe9b0d/f72e2c85?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBiZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1533231040102-5ec7a63e6d0a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVldHJvb3R8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
  ];

  //--------------------Travel Bags
  const travel_titles = [
    "Stylish Pastel Pink Travel Bag",
    "A Fahionable Set of Two Pink Travel Bags",
    "White and Black Hard Luggage",
    "Rainbow Dotted Duffle Bag Luggage",
    "Blue and Gray Classic Suitcase",
    "A Set of Three Hard Durable Suitcases",
    "Light Blue Hard Luggage",
    "Black Leather Vintage Suitcase",
    "A Set of Three Large Travel Bags",
    "Two Stylish Light Green Travel Bags With Different Sizes",
    "Simple Blue Luggage with Many Compartments",
  ];

  const travel_imgs = [
    "https://p1.pxfuel.com/preview/899/786/420/travel-bag-hard-and-bag.jpg",
    "https://p1.pxfuel.com/preview/479/120/981/luggage-metallic-luguagge-case.jpg",
    "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-1.2.1&1534&q=80",
    "https://cdn.pixabay.com/photo/2019/06/20/16/10/duffle-bag-4287485_960_720.png",
    "https://p0.pikrepo.com/preview/74/133/blue-and-gray-suede-rolling-luggage-thumbnail.jpg",
    "https://cdn.pixabay.com/photo/2019/01/22/15/53/suitcases-3948389_960_720.png",
    "https://cdn.pixabay.com/photo/2019/07/09/11/52/travel-bag-4326738_960_720.jpg",
    "https://p0.pxfuel.com/preview/942/496/984/various-bag-bags-luggage.jpg",
    "https://p0.pxfuel.com/preview/273/580/962/travelvarious-bag-bags-holiday.jpg",
    "https://p1.pxfuel.com/preview/926/897/247/travel-bag-hard-and-bag.jpg",
    "https://p0.pxfuel.com/preview/963/699/697/bag-blue-handbag-white.jpg",
  ];

  //--------------------fruits
  const fruits_titles = [
    "Avocado",
    "Green Pear",
    "Kiwi",
    "Orange",
    "Pomegranate",
    "Pineapple ",
    "Banana",
    "Apple",
    "Strawberry",
    "Red Cherry",
  ];

  const fruits_imgs = [
    "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587883012610-e3df17d41270?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543218024-57a70143c369?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmFuYXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXBwbGV8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJ1aXRzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1439127989242-c3749a012eac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hlcnJ5fGVufDB8fDB8fHww",
  ];

  //--------------------Nuts
  const Nuts_titles = [
    "Almonds",
    "Peanuts",
    "Cashew Nuts",
    "Pistachio",
    "Hazelnuts",
  ];
  const Nuts_imgs = [
    "https://images.unsplash.com/photo-1583126379180-ec70bb3178b1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxtb25kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhbnV0cyd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FzaGV3c3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1610137512859-aa919f651a05?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlzdGFjaGlvfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1635843130314-c0b5cc832b79?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF6ZWxudXRzfGVufDB8fDB8fHww",
  ];

  //--------------------Large Handags

  const dairy_titles = [
    "Milk",
    "Butter",
    "Yogurt",
    "Cheese",
    "Custard",
  ];
  const dairy_imgs = [
    "https://images.unsplash.com/photo-1644346402970-d8d7304ff82f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1pbGt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WW9ndXJ0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1569461610576-2d995e62e84b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3VzdGFyZHxlbnwwfHwwfHx8MA%3D%3D",
  ];

  //-----------------------Purses
  // const purses_titles = [
  //   "Hot Pink Leather Purse",
  //   "Glittery Black Purse with Golden Strap",
  //   "Practical Black Leather Purse",
  //   "Red Leather Pouche with Free Earrings",
  //   "Lavender Leather Purse",
  //   "White and Black Snakeskin Purse",
  //   "Dark Brown Simple Purse",
  //   "Red Kipling Pouche",
  //   "Biege Kipling Pouche",
  // ];
  // const purses_imgs = [
  //   "https://c.pxhere.com/photos/c2/fc/bag_fashion_style-518806.jpg!d",
  //   "https://images.unsplash.com/photo-1564222195116-8a74a96b2c8c?ixlib=rb-1.2.1&1534&q=80",
  //   "https://c.pxhere.com/photos/cb/9e/wallet_black_clutch_purse_leather_fashion_style_accessory-952715.jpg!d",
  //   "https://c.pxhere.com/photos/63/90/purse_handbag_fashion_bag_style_design_leather_accessory-780266.jpg!d",
  //   "https://c.pxhere.com/photos/2d/da/wallet_purple_wallet_purple_money_purse_billfold_lavender_fashion-863005.jpg!d",
  //   "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-1.2.1&1534&q=80",
  //   "https://www.publicdomainpictures.net/pictures/60000/velka/leather-purse-isolated-background.jpg",
  //   "https://c.pxhere.com/photos/94/29/bag_handbag_purse_pink_red_fashion_glamour_accessory-952105.jpg!d",
  //   "https://c.pxhere.com/photos/9b/57/bag_purse_handbag_fashion_style_accessory_white-1336949.jpg!d",
  // ];

  //-----------------Totes

  // const totes_titles = [
  //   "Plain White Cotton Tote",
  //   "Elegant Red Leather Tote",
  //   "Handmade Embroided White Tote with Red Roses",
  //   "Multicolored White Tote",
  //   "Owl White Cotton Tote",
  //   "Simple Grey Zipped Tote",
  //   "Earth Positive Tote Bag",
  //   "Deep Purple Handstamped Tote",
  //   "White Cotton Tote with Drawings",
  //   "Grey Wolf Tote",
  //   "Yellow and Green Bold Tote",
  // ];
  // const totes_imgs = [
  //   "https://p1.pxfuel.com/preview/1021/986/529/bag-cotton-cotton-bag-textile-wall-white.jpg",
  //   "https://p1.pxfuel.com/preview/741/996/910/handbag-fashion-fashionable-woman.jpg",
  //   "https://p1.pxfuel.com/preview/58/205/88/shop-bag-bags-sale.jpg",
  //   "https://p1.pxfuel.com/preview/367/279/652/bag-bag-elephant-cloth-bag.jpg",
  //   "https://p0.pikrepo.com/preview/627/393/white-blue-and-red-owl-print-tote-bag.jpg",
  //   "https://farm5.staticflickr.com/4022/4714518639_8d9e06be13_b.jpg",
  //   "https://live.staticflickr.com/3538/3674472019_727d8c4669.jpg",
  //   "https://live.staticflickr.com/5161/5342130557_7fa8cc5935_b.jpg",
  //   "https://p1.pxfuel.com/preview/368/540/34/bag-cotton-natural-cotton-bag-advertising-royalty-free-thumbnail.jpg",
  //   "https://p1.pxfuel.com/preview/726/975/813/bag-handbag-womans-bag-sport-bag.jpg",
  //   "https://p1.pxfuel.com/preview/844/198/547/bag-burlap-advertising.jpg",
  // ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
         // description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 100, max: 500}),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(vegetables_title, vegetables_imgs, "Vegetables");
  await seedProducts(fruits_titles, fruits_imgs, "Fruits");
  // await seedProducts(travel_titles, travel_imgs, "Travel");
  await seedProducts(Nuts_titles, Nuts_imgs, "Nuts");
  await seedProducts(dairy_titles,dairy_imgs,"Dairy Products");
  // await seedProducts(purses_titles, purses_imgs, "Purses");
  // await seedProducts(totes_titles, totes_imgs, "Totes");

  await closeDB();
}

seedDB();

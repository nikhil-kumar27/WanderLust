const mongoose = require("mongoose");
const ownerId = new mongoose.Types.ObjectId("6a26a27004054ce664cb1cee");
const sampleListings = [
  {
  title: "Cozy Beachfront Cottage",
  description:
    "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
  image: {
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "cozy-beachfront-cottage-image",
  },
  price: 1500,
  location: "Malibu",
  country: "United States",
},
{
  title: "Modern Loft in Downtown",
  description:
    "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
  image: {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "modern-loft-in-downtown-image",
  },
  price: 1200,
  location: "New York City",
  country: "United States",
},
{
  title: "Mountain Retreat",
  description:
    "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
  image: {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "mountain-retreat-image",
  },
  price: 1000,
  location: "Aspen",
  country: "United States",
},
{
  title: "Historic Villa in Tuscany",
  description:
    "Experience the charm of Tuscany in this beautifully restored villa.",
  image: {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "historic-villa-in-tuscany-image",
  },
  price: 2500,
  location: "Florence",
  country: "Italy",
},
{
  title: "Secluded Treehouse Getaway",
  description:
    "Live among the treetops in this unique treehouse retreat.",
  image: {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "secluded-treehouse-getaway-image",
  },
  price: 800,
  location: "Portland",
  country: "United States",
},
{
  title: "Beachfront Paradise",
  description:
    "Step out of your door onto the sandy beach.",
  image: {
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "beachfront-paradise-image",
  },
  price: 2000,
  location: "Cancun",
  country: "Mexico",
},
{
  title: "Rustic Cabin by the Lake",
  description:
    "Spend your days fishing and kayaking on the serene lake.",
  image: {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "rustic-cabin-by-the-lake-image",
  },
  price: 900,
  location: "Lake Tahoe",
  country: "United States",
},
{
  title: "Luxury Penthouse with City Views",
  description:
    "Indulge in luxury living with panoramic city views.",
  image: {
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "luxury-penthouse-with-city-views-image",
  },
  price: 3500,
  location: "Los Angeles",
  country: "United States",
},
{
  title: "Ski-In/Ski-Out Chalet",
  description:
    "Hit the slopes right from your doorstep.",
  image: {
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "ski-in-ski-out-chalet-image",
  },
  price: 3000,
  location: "Verbier",
  country: "Switzerland",
},
{
  title: "Safari Lodge in the Serengeti",
  description:
    "Experience the thrill of the wild in a safari lodge.",
  image: {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "safari-lodge-in-the-serengeti-image",
  },
  price: 4000,
  location: "Serengeti National Park",
  country: "Tanzania",
},
{
  title: "Historic Canal House",
  description:
    "Stay in a beautifully preserved canal house in Amsterdam.",
  image: {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "historic-canal-house-image",
  },
  price: 1800,
  location: "Amsterdam",
  country: "Netherlands",
},
{
  title: "Private Island Retreat",
  description:
    "Have an entire island to yourself.",
  image: {
    url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "private-island-retreat-image",
  },
  price: 10000,
  location: "Fiji",
  country: "Fiji",
},
{
  title: "Charming Cottage in the Cotswolds",
  description:
    "Escape to the picturesque Cotswolds.",
  image: {
    url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "charming-cottage-in-the-cotswolds-image",
  },
  price: 1200,
  location: "Cotswolds",
  country: "United Kingdom",
},
{
  title: "Historic Brownstone in Boston",
  description:
    "Step back in time in this elegant brownstone.",
  image: {
    url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "historic-brownstone-in-boston-image",
  },
  price: 2200,
  location: "Boston",
  country: "United States",
},
{
  title: "Beachfront Bungalow in Bali",
  description:
    "Relax on the sandy shores of Bali.",
  image: {
    url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "beachfront-bungalow-in-bali-image",
  },
  price: 1800,
  location: "Bali",
  country: "Indonesia",
},
{
  title: "Mountain View Cabin in Banff",
  description:
    "Enjoy breathtaking mountain views.",
  image: {
    url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "mountain-view-cabin-in-banff-image",
  },
  price: 1500,
  location: "Banff",
  country: "Canada",
},
{
  title: "Art Deco Apartment in Miami",
  description:
    "Step into the glamour of the 1920s.",
  image: {
    url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "art-deco-apartment-in-miami-image",
  },
  price: 1600,
  location: "Miami",
  country: "United States",
},
{
  title: "Tropical Villa in Phuket",
  description:
    "Escape to a tropical paradise in Phuket.",
  image: {
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "tropical-villa-in-phuket-image",
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
},
{
  title: "Historic Castle in Scotland",
  description:
    "Live like royalty in the Scottish Highlands.",
  image: {
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "historic-castle-in-scotland-image",
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
},
{
  title: "Desert Oasis in Dubai",
  description:
    "Experience luxury in the middle of the desert.",
  image: {
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "desert-oasis-in-dubai-image",
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
},
{
  title: "Rustic Log Cabin in Montana",
  description:
    "Unplug and unwind in this cozy log cabin.",
  image: {
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "rustic-log-cabin-in-montana-image",
  },
  price: 1100,
  location: "Montana",
  country: "United States",
},
{
  title: "Beachfront Villa in Greece",
  description:
    "Enjoy crystal-clear Mediterranean waters.",
  image: {
    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "beachfront-villa-in-greece-image",
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
},
{
  title: "Eco-Friendly Treehouse Retreat",
  description:
    "Stay in an eco-friendly treehouse nestled in the forest.",
  image: {
    url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "eco-friendly-treehouse-retreat-image",
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
},
{
  title: "Historic Cottage in Charleston",
  description:
    "Experience the charm of historic Charleston.",
  image: {
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "historic-cottage-in-charleston-image",
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
},
{
  title: "Modern Apartment in Tokyo",
  description:
    "Explore the vibrant city of Tokyo.",
  image: {
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "modern-apartment-in-tokyo-image",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
},
{
  title: "Lakefront Cabin in New Hampshire",
  description:
    "Spend your days by the lake in the White Mountains.",
  image: {
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "lakefront-cabin-in-new-hampshire-image",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
},
{
  title: "Luxury Villa in the Maldives",
  description:
    "Indulge in luxury in this overwater villa.",
  image: {
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "luxury-villa-in-the-maldives-image",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
},
{
  title: "Ski Chalet in Aspen",
  description:
    "Hit the slopes in style in Aspen.",
  image: {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "ski-chalet-in-aspen-image",
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
},
{
  title: "Secluded Beach House in Costa Rica",
  description:
    "Escape to a secluded beach house on the Pacific coast.",
  image: {
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    filename: "secluded-beach-house-in-costa-rica-image",
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
},
];

const sampleListing = sampleListings.map((listing) => ({...listing,owner: ownerId,}));
module.exports = { data: sampleListing };
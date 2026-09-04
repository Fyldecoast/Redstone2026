// Gallery photo index. Add or remove entries here to update the gallery page.
const GALLERY_ITEMS = [
  {
    "cat": "all",
    "cap": "Four in a bed winner",
    "thumb": "assets/images/gallery/g01-thumb.jpg",
    "full": "assets/images/gallery/g01-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast Area Lounge",
    "thumb": "assets/images/gallery/g02-thumb.jpg",
    "full": "assets/images/gallery/g02-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast Area Lounge1",
    "thumb": "assets/images/gallery/g03-thumb.jpg",
    "full": "assets/images/gallery/g03-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast Area Lounge3",
    "thumb": "assets/images/gallery/g04-thumb.jpg",
    "full": "assets/images/gallery/g04-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast Area Lounge4",
    "thumb": "assets/images/gallery/g05-thumb.jpg",
    "full": "assets/images/gallery/g05-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Reception Lounge Area",
    "thumb": "assets/images/gallery/g06-thumb.jpg",
    "full": "assets/images/gallery/g06-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast Area Cereal",
    "thumb": "assets/images/gallery/g07-thumb.jpg",
    "full": "assets/images/gallery/g07-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Lounge View",
    "thumb": "assets/images/gallery/g08-thumb.jpg",
    "full": "assets/images/gallery/g08-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast area table setting",
    "thumb": "assets/images/gallery/g09-thumb.jpg",
    "full": "assets/images/gallery/g09-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast area piano",
    "thumb": "assets/images/gallery/g10-thumb.jpg",
    "full": "assets/images/gallery/g10-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Breakfast area",
    "thumb": "assets/images/gallery/g11-thumb.jpg",
    "full": "assets/images/gallery/g11-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Chessboard Lounge",
    "thumb": "assets/images/gallery/g12-thumb.jpg",
    "full": "assets/images/gallery/g12-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Crystal Chandelier",
    "thumb": "assets/images/gallery/g13-thumb.jpg",
    "full": "assets/images/gallery/g13-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Decorative detail",
    "thumb": "assets/images/gallery/g14-thumb.jpg",
    "full": "assets/images/gallery/g14-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Dining Breakfast Buffet",
    "thumb": "assets/images/gallery/g15-thumb.jpg",
    "full": "assets/images/gallery/g15-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Dining Main",
    "thumb": "assets/images/gallery/g16-thumb.jpg",
    "full": "assets/images/gallery/g16-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Dining Piano Detail",
    "thumb": "assets/images/gallery/g17-thumb.jpg",
    "full": "assets/images/gallery/g17-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Dining Chandelier",
    "thumb": "assets/images/gallery/g19-thumb.jpg",
    "full": "assets/images/gallery/g19-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Double King 3 Alt",
    "thumb": "assets/images/gallery/g20-thumb.jpg",
    "full": "assets/images/gallery/g20-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Double King 3",
    "thumb": "assets/images/gallery/g21-thumb.jpg",
    "full": "assets/images/gallery/g21-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Double King 7 Detail",
    "thumb": "assets/images/gallery/g22-thumb.jpg",
    "full": "assets/images/gallery/g22-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Full Pic Lounge",
    "thumb": "assets/images/gallery/g23-thumb.jpg",
    "full": "assets/images/gallery/g23-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Hallway Lounge",
    "thumb": "assets/images/gallery/g24-thumb.jpg",
    "full": "assets/images/gallery/g24-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Hotel Reception Lounge",
    "thumb": "assets/images/gallery/g25-thumb.jpg",
    "full": "assets/images/gallery/g25-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Lounge1",
    "thumb": "assets/images/gallery/g26-thumb.jpg",
    "full": "assets/images/gallery/g26-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Lounge Food",
    "thumb": "assets/images/gallery/g27-thumb.jpg",
    "full": "assets/images/gallery/g27-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Lounge Reception",
    "thumb": "assets/images/gallery/g28-thumb.jpg",
    "full": "assets/images/gallery/g28-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Lounge Resturant",
    "thumb": "assets/images/gallery/g29-thumb.jpg",
    "full": "assets/images/gallery/g29-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Reception sofa",
    "thumb": "assets/images/gallery/g30-thumb.jpg",
    "full": "assets/images/gallery/g30-full.jpg"
  },
  {
    "cat": "lounge",
    "cap": "Recpetion Lounge Radio",
    "thumb": "assets/images/gallery/g31-thumb.jpg",
    "full": "assets/images/gallery/g31-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "King Double Ensuite",
    "thumb": "assets/images/gallery/g32-thumb.jpg",
    "full": "assets/images/gallery/g32-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Room11",
    "thumb": "assets/images/gallery/g33-thumb.jpg",
    "full": "assets/images/gallery/g33-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Deluxe King Room",
    "thumb": "assets/images/gallery/g34-thumb.jpg",
    "full": "assets/images/gallery/g34-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "King Double Ensuite",
    "thumb": "assets/images/gallery/g35-thumb.jpg",
    "full": "assets/images/gallery/g35-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Tea coffee making facilities",
    "thumb": "assets/images/gallery/g36-thumb.jpg",
    "full": "assets/images/gallery/g36-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "King Double Ensuite chair",
    "thumb": "assets/images/gallery/g37-thumb.jpg",
    "full": "assets/images/gallery/g37-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "King Double Ensuite chair seating area",
    "thumb": "assets/images/gallery/g38-thumb.jpg",
    "full": "assets/images/gallery/g38-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Deluxe King Room",
    "thumb": "assets/images/gallery/g39-thumb.jpg",
    "full": "assets/images/gallery/g39-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Deluxe King Room view 1",
    "thumb": "assets/images/gallery/g40-thumb.jpg",
    "full": "assets/images/gallery/g40-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Superior double room",
    "thumb": "assets/images/gallery/g41-thumb.jpg",
    "full": "assets/images/gallery/g41-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Hairdryer and toiletries",
    "thumb": "assets/images/gallery/g42-thumb.jpg",
    "full": "assets/images/gallery/g42-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Superior double room en-suite",
    "thumb": "assets/images/gallery/g43-thumb.jpg",
    "full": "assets/images/gallery/g43-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Superior double room tv",
    "thumb": "assets/images/gallery/g44-thumb.jpg",
    "full": "assets/images/gallery/g44-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "King Double Ensuite whole room",
    "thumb": "assets/images/gallery/g45-thumb.jpg",
    "full": "assets/images/gallery/g45-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "En-suite bathroom",
    "thumb": "assets/images/gallery/g46-thumb.jpg",
    "full": "assets/images/gallery/g46-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "hairdryer and mirror",
    "thumb": "assets/images/gallery/g47-thumb.jpg",
    "full": "assets/images/gallery/g47-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "Superior double room view 2",
    "thumb": "assets/images/gallery/g48-thumb.jpg",
    "full": "assets/images/gallery/g48-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "en-suite",
    "thumb": "assets/images/gallery/g49-thumb.jpg",
    "full": "assets/images/gallery/g49-full.jpg"
  },
  {
    "cat": "rooms",
    "cap": "decorative detail in room",
    "thumb": "assets/images/gallery/g50-thumb.jpg",
    "full": "assets/images/gallery/g50-full.jpg"
  },
  {
    "cat": "all",
    "cap": "Hotel entrance",
    "thumb": "assets/images/gallery/g51-thumb.jpg",
    "full": "assets/images/gallery/g51-full.jpg"
  },
  {
    "cat": "all",
    "cap": "Redstone Guesthouse exterior",
    "thumb": "assets/images/gallery/g52-thumb.jpg",
    "full": "assets/images/gallery/g52-full.jpg"
  }
];

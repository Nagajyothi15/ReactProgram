import { configureStore, createSlice } from "@reduxjs/toolkit";

// Product Slice
const productSlice = createSlice({
  name: "product",
  initialState: {
    veg: [
      { id: 1001, name: "Tomato", price: 40, description: "Fresh red tomatoes, rich in vitamin C and antioxidants.", imageUrl: "/images/Tomato.jpeg" },
      { id: 1002, name: "Potato", price: 30, description: "Starchy tuber, widely used in curries, fries, and snacks.", imageUrl: "/images/Potato.jpeg" },
      { id: 1003, name: "Onion", price: 35, description: "Essential kitchen vegetable, used for flavor and base in cooking.", imageUrl: "/images/Onion.jpeg" },
      { id: 1004, name: "Carrot", price: 50, description: "Crunchy and sweet, rich in beta-carotene and good for eyesight.", imageUrl: "/images/Carrot.jpeg" },
      { id: 1005, name: "Cabbage", price: 25, description: "Leafy vegetable, used in salads, curries, and stir-fries.", imageUrl: "/images/Cabbage.jpeg" },
      { id: 1006, name: "Cauliflower", price: 60, description: "White florets, used in curries, pakoras, and stir-fries.", imageUrl: "/images/Cauliflower.jpeg" },
      { id: 1007, name: "Spinach", price: 40, description: "Green leafy vegetable, full of iron and vitamins.", imageUrl: "/images/Spinach.jpeg" },
      { id: 1008, name: "Capsicum", price: 70, description: "Bell peppers available in green, red, and yellow, used in salads and curries.", imageUrl: "/images/Capsicum.jpeg" },
      { id: 1009, name: "Brinjal", price: 45, description: "Also called eggplant, used in curries, fry, and stuffed dishes.", imageUrl: "/images/Brinjal.jpeg" },
      { id: 1010, name: "Ladyfinger", price: 55, description: "Also called okra/bhindi, used in dry curries and fries.", imageUrl: "/images/Lady'sfinger.jpeg" }
    ],
    nonVeg: [
      { id: 101, name: "Chicken", price: 200.0, imageUrl: "/images/chicken.jpeg", description: "Chicken is lean and rich in high-quality protein..." },
      { id: 102, name: "Mutton", price: 1500.0, imageUrl: "/images/mutton.jpeg", description: "Richer in fats and calories compared to lean meats..." },
      { id: 103, name: "Prawns", price: 700.0, imageUrl: "/images/prawns.jpeg", description: "Prawns are packed with protein, vitamins, and minerals.." },
      { id: 104, name: "Egg", price: 150.0, imageUrl: "/images/egg.jpeg", description: "Eggs deliver protein, while the gravy provides vitamins.." },
      { id: 105, name: "Egg Bhurji", price: 170.0, imageUrl: "/images/egg bhurji.jpeg", description: "Dry, spiced scrambled eggs with onions, tomatoes, and chilies.." },
      { id: 106, name: "Fish Fry", price: 850.0, imageUrl: "/images/fish fry.jpeg", description: "Crispy and aromatic, served as a snack or side..." },
      { id: 107, name: "Chicken Fry", price: 900.0, imageUrl: "/images/chicken fry.jpeg", description: "Spicy, fried chicken pieces .." },
      { id: 108, name: "Egg Biryani", price: 550.0, imageUrl: "/images/egg biryani.jpeg", description: "Rich, fragrant, and satisfying..." },
      { id: 109, name: "Chicken Tikka", price: 450.0, imageUrl: "/images/chicken tikka.jpeg", description: "Rich and indulgent—portion control advised..." },
      { id: 110, name: "Mutton Seekh Kebab", price: 800.0, imageUrl: "/images/mutton seekh kebab.jpeg", description: "Spiced minced mutton grilled on skewers..." }
    ],
    milk: [
      { id: 1, name: "milk", price: 80, imageUrl: "/images/Milk.jpeg", description: "Fresh cow’s milk, rich in calcium, protein, and essential nutrients for strong bones and health." },
      { id: 2, name: "curd", price: 50, imageUrl: "/images/curd.jpeg", description: "Creamy and tangy, packed with probiotics for gut health and digestion." },
      { id: 3, name: "ghee", price: 200, imageUrl: "/images/ghee.jpeg", description: "Traditional clarified butter, aromatic and healthy, used in cooking and Ayurvedic remedies." },
      { id: 4, name: "lassi", price: 30, imageUrl: "/images/lassi.jpeg", description: "Refreshing yogurt-based drink, slightly sweet or salty, perfect for summer." },
      { id: 5, name: "buttermilk", price: 40, imageUrl: "/images/Buttermilk.jpeg", description: "Light and refreshing yogurt-based drink, spiced with herbs, aids digestion." },
      { id: 6, name: "roseMilk", price: 30, imageUrl: "/images/Rosemilk.jpeg", description: "Sweet and fragrant milk drink flavored with natural rose essence." }
    ],
    drink: [
      { id: 1, name: "sapota", price: 80, imageUrl: "/images/sapota.jpeg", description: "Refreshing sapota (chikoo) juice, naturally sweet and packed with fiber and vitamins." },
      { id: 2, name: "papaya", price: 50, imageUrl: "/images/papaya.jpeg", description: "Delicious papaya juice, rich in antioxidants and enzymes for better digestion." },
      { id: 3, name: "muskmelon", price: 50, imageUrl: "/images/muskmelon.jpeg", description: "Cooling muskmelon drink, naturally hydrating and a perfect summer refreshment." },
      { id: 4, name: "strawberry", price: 30, imageUrl: "/images/strawberry.jpeg", description: "Creamy strawberry milkshake, a fruity delight loved by kids and adults alike." },
      { id: 5, name: "pineapple", price: 40, imageUrl: "/images/pineapple.jpeg", description: "Tangy pineapple juice, full of vitamin C and tropical flavor." },
      { id: 6, name: "vanilla", price: 30, imageUrl: "/images/vanilla.jpeg", description: "Classic vanilla milkshake, smooth and creamy with a rich vanilla flavor." }
    ],
    chocolate: [
      { id: 1, name: "dairyMilk", price: 80, imageUrl: "/images/dairymilk.jpg", description: "Smooth and creamy milk chocolate, loved by all age groups." },
      { id: 2, name: "kitKat", price: 50, imageUrl: "/images/Kitkat.jpeg", description: "Crispy wafer fingers coated with rich milk chocolate." },
      { id: 3, name: "munch", price: 50, imageUrl: "/images/Munch.jpeg", description: "Light crunchy wafer bar covered with a thin layer of chocolate." },
      { id: 4, name: "perk", price: 40, imageUrl: "/images/Perk.jpeg", description: "Delicious layered wafer bar with a smooth chocolate coating." },
      { id: 5, name: "5star", price: 40, imageUrl: "/images/5star.jpeg", description: "Chewy caramel and nougat center wrapped in chocolate." },
      { id: 6, name: "snickers", price: 30, imageUrl: "/images/Snickers.jpeg", description: "Packed with peanuts, caramel, and nougat covered in milk chocolate." }
    ]
  },
  reducers: {}
});

// Cart Slice
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        return state.filter((i) => i.id !== action.payload.id);
      }
    },
    clearCart: () => []
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

// Orders Slice
const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addOrder } = ordersSlice.actions;

// User Authentication Slice
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: { users: [], isAuthenticated: false, currentUser: null },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      state.isAuthenticated = true;
      state.currentUser = action.payload;
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    }
  }
});

export const { registerUser, loginUser, logoutUser } = userAuthSlice.actions;
const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: [],
  reducers: {
    addRecentlyViewed: (state, action) => {
      const item = action.payload;
      if (!state.find((i) => i.name === item.name)) {
        state.push(item);
      }
    },
    clearRecentlyViewed: () => [],
  },
});

export const { addRecentlyViewed, clearRecentlyViewed } = recentlyViewedSlice.actions;

// Configure Store
const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    orders: ordersSlice.reducer,
    userAuth: userAuthSlice.reducer,
    recentlyViewed: recentlyViewedSlice.reducer,
  }
});

// Save cart to localStorage
store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;

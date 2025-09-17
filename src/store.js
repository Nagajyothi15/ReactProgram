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
      { id: 1010, name: "Ladyfinger", price: 55, description: "Also called okra/bhindi, used in dry curries and fries.", imageUrl: "/images/Lady'sfinger.jpeg" },
      { id: 1011, name: "Apple", price: 120, description: "Fresh and crisp apples, rich in fiber and vitamin C.", imageUrl: "/images/Apple.jpeg" },
      { id: 1012, name: "Banana", price: 40, description: "Sweet bananas, full of potassium and energy.", imageUrl: "/images/Banana.jpeg" },
      { id: 1013, name: "Mango", price: 150, description: "Juicy mangoes, the king of fruits, rich in vitamins and flavor.", imageUrl: "/images/Mangoes.jpeg" },
      { id: 1014, name: "Orange", price: 60, description: "Fresh oranges, rich in vitamin C and refreshing juice.", imageUrl: "/images/Oranges.jpeg" },
      { id: 1015, name: "Papaya", price: 70, description: "Sweet papaya, rich in enzymes for digestion and antioxidants.", imageUrl: "/images/Papayas.jpeg" },
      { id: 1016, name: "Grapes", price: 90, description: "Fresh green or black grapes, juicy and full of natural sweetness.", imageUrl: "/images/purple grapes.jpeg" },
      { id: 1017, name: "Pineapple", price: 80, description: "Tropical pineapple, tangy, juicy, and rich in vitamin C.", imageUrl: "/images/Pineapples.jpeg" },
      { id: 1018, name: "Strawberry", price: 120, description: "Fresh red strawberries, sweet and rich in antioxidants.", imageUrl: "/images/Strawberrys.jpeg" }
    ],
    nonVeg: [
      { id: 101, name: "Chicken", price: 200.0, imageUrl: "/images/chicken.jpeg", description: "Chicken is lean and rich in high-quality protein..." },
      { id: 102, name: "Mutton", price: 1500.0, imageUrl: "/images/mutton.jpeg", description: "Richer in fats and calories compared to lean meats..." },
      { id: 103, name: "Prawns", price: 700.0, imageUrl: "/images/prawns.jpeg", description: "Prawns are packed with protein, vitamins, and minerals.." },
      { id: 104, name: "Egg", price: 150.0, imageUrl: "/images/egg.jpeg", description: "Eggs deliver protein, while the gravy provides vitamins.." },
      { id: 105, name: "Fish Fry", price: 850.0, imageUrl: "/images/fish fry.jpeg", description: "Crispy and aromatic, served as a snack or side..." },
      { id: 106, name: "Chicken Fry", price: 900.0, imageUrl: "/images/chicken fry.jpeg", description: "Spicy, fried chicken pieces .." },
      { id: 107, name: "Tandoori Prawns", price: 500.0, imageUrl: "/images/tandoori_prawns.jpeg", description: "Succulent prawns marinated in yogurt and spices, grilled to smoky perfection.", category: "Starters" },
      { id: 108, name: "Chicken Tikka", price: 450.0, imageUrl: "/images/chicken tikka.jpeg", description: "Rich and indulgent—portion control advised..." },
      { id: 109, name: "Mutton Seekh Kebab", price: 800.0, imageUrl: "/images/mutton seekh kebab.jpeg", description: "Spiced minced mutton grilled on skewers..." },
      { id: 110, name: "Chicken Wings", price: 250.0, imageUrl: "/images/chicken_wings.jpeg", description: "Spicy and crispy chicken wings, perfect as a starter.", category: "Starters" },
      { id: 111, name: "Fish Fingers", price: 300.0, imageUrl: "/images/fish_fingers.jpeg", description: "Crispy breaded fish fingers, lightly spiced and fried.", category: "Starters" },
      { id: 112, name: "Prawn Tempura", price: 550.0, imageUrl: "/images/prawn_tempura.jpeg", description: "Lightly battered prawns, deep fried and served with dip.", category: "Starters" },
      { id: 113, name: "Mutton Chops", price: 650.0, imageUrl: "/images/mutton_chops.jpeg", description: "Juicy mutton chops marinated and grilled, aromatic and rich.", category: "Starters" },
      { id: 114, name: "Grilled Fish", price: 600.0, imageUrl: "/images/grilled_fish.jpeg", description: "Fresh fish fillets grilled with spices and herbs.", category: "Starters" },
      { id: 115, name: "Chicken Lollipop", price: 300.0, imageUrl: "/images/chicken_lollipop.jpeg", description: "Crispy fried chicken drumettes, coated with spicy sauce.", category: "Starters" }
    ],
    milk: [
      { id: 1, name: "milk", price: 80, imageUrl: "/images/Milk.jpeg", description: "Fresh cow’s milk, rich in calcium, protein, and essential nutrients for strong bones and health." },
      { id: 2, name: "curd", price: 50, imageUrl: "/images/curd.jpeg", description: "Creamy and tangy, packed with probiotics for gut health and digestion." },
      { id: 3, name: "ghee", price: 200, imageUrl: "/images/ghee.jpeg", description: "Traditional clarified butter, aromatic and healthy, used in cooking and Ayurvedic remedies." },
      { id: 4, name: "lassi", price: 30, imageUrl: "/images/lassi.jpeg", description: "Refreshing yogurt-based drink, slightly sweet or salty, perfect for summer." },
      { id: 5, name: "buttermilk", price: 40, imageUrl: "/images/Buttermilk.jpeg", description: "Light and refreshing yogurt-based drink, spiced with herbs, aids digestion." },
      { id: 6, name: "roseMilk", price: 30, imageUrl: "/images/Rosemilk.jpeg", description: "Sweet and fragrant milk drink flavored with natural rose essence." },
      { id: 7, name: "chocolateMilk", price: 50, imageUrl: "/images/ChocolateMilk.jpeg", description: "Creamy chocolate milk, perfect for kids and chocolate lovers." },
      { id: 8, name: "badamMilk", price: 70, imageUrl: "/images/BadamMilk.jpeg", description: "Nutty and aromatic almond milk, rich in protein and vitamins." },
      { id: 9, name: "saffronMilk", price: 80, imageUrl: "/images/SaffronMilk.jpeg", description: "Luxurious milk flavored with saffron, rich, aromatic, and healthy." },
      { id: 10, name: "hotCoffee", price: 60, imageUrl: "/images/HotCoffee.jpeg", description: "Freshly brewed hot coffee, rich and aromatic to start your day." },
      { id: 11, name: "coldCoffee", price: 70, imageUrl: "/images/ColdCoffee.jpeg", description: "Chilled coffee blended with milk and ice, perfect for refreshment." },
      { id: 12, name: "cappuccino", price: 80, imageUrl: "/images/Cappuccino.jpeg", description: "Espresso with steamed milk foam, creamy and flavorful." },
      { id: 13, name: "latte", price: 90, imageUrl: "/images/Latte.jpeg", description: "Smooth espresso with steamed milk, lightly sweet and aromatic." }
    ],
    drink: [
      { id: 1, name: "sapota", price: 80, imageUrl: "/images/sapota.jpeg", description: "Refreshing sapota (chikoo) juice, naturally sweet and packed with fiber and vitamins." },
      { id: 2, name: "papaya", price: 50, imageUrl: "/images/papaya.jpeg", description: "Delicious papaya juice, rich in antioxidants and enzymes for better digestion." },
      { id: 3, name: "muskmelon", price: 50, imageUrl: "/images/muskmelon.jpeg", description: "Cooling muskmelon drink, naturally hydrating and a perfect summer refreshment." },
      { id: 4, name: "strawberry", price: 30, imageUrl: "/images/strawberry.jpeg", description: "Creamy strawberry milkshake, a fruity delight loved by kids and adults alike." },
      { id: 5, name: "pineapple", price: 40, imageUrl: "/images/pineapple.jpeg", description: "Tangy pineapple juice, full of vitamin C and tropical flavor." },
      { id: 6, name: "vanilla", price: 30, imageUrl: "/images/vanilla.jpeg", description: "Classic vanilla milkshake, smooth and creamy with a rich vanilla flavor." },
      { id: 7, name: "mango", price: 60, imageUrl: "/images/mango.jpeg", description: "Sweet and pulpy mango shake, a tropical favorite for all ages." },
      { id: 8, name: "orange", price: 40, imageUrl: "/images/orange.jpeg", description: "Freshly squeezed orange juice, packed with vitamin C and natural sweetness." },
      { id: 9, name: "mixedFruit", price: 70, imageUrl: "/images/mixedFruit.jpeg", description: "Blend of seasonal fruits for a refreshing and healthy drink." },
      { id: 10, name: "BlackForest IceCream", price: 50, imageUrl: "/images/BlackForestIceCream.jpeg", description: "Classic vanilla ice cream, smooth, creamy, and loved by all." },
      { id: 11, name: "chocolate IceCream", price: 60, imageUrl: "/images/chocolateIceCream.jpeg", description: "Rich chocolate ice cream, perfect for chocolate lovers." },
      { id: 12, name: "strawberry IceCream", price: 55, imageUrl: "/images/strawberryIceCream.jpeg", description: "Fresh strawberry ice cream with a fruity and creamy taste." },
      { id: 13, name: "mango IceCream", price: 65, imageUrl: "/images/mangoIceCream.jpeg", description: "Tropical mango ice cream, smooth and sweet, perfect for summer." },
      { id: 14, name: "butterscotch IceCream", price: 60, imageUrl: "/images/butterscotchIceCream.jpeg", description: "Crunchy butterscotch chips in creamy ice cream for a delightful treat." },
      { id: 15, name: "coffee IceCream", price: 70, imageUrl: "/images/coffeeIceCream.jpeg", description: "Coffee flavored ice cream with a rich and smooth taste." }
    ],
    chocolate: [
      { id: 1, name: "dairyMilk", price: 80, imageUrl: "/images/dairymilk.jpg", description: "Smooth and creamy milk chocolate, loved by all age groups." },
      { id: 2, name: "kitKat", price: 50, imageUrl: "/images/Kitkat.jpeg", description: "Crispy wafer fingers coated with rich milk chocolate." },
      { id: 3, name: "munch", price: 50, imageUrl: "/images/Munch.jpeg", description: "Light crunchy wafer bar covered with a thin layer of chocolate." },
      { id: 4, name: "perk", price: 40, imageUrl: "/images/Perk.jpeg", description: "Delicious layered wafer bar with a smooth chocolate coating." },
      { id: 5, name: "5star", price: 40, imageUrl: "/images/5star.jpeg", description: "Chewy caramel and nougat center wrapped in chocolate." },
      { id: 6, name: "snickers", price: 30, imageUrl: "/images/Snickers.jpeg", description: "Packed with peanuts, caramel, and nougat covered in milk chocolate." },
      { id: 7, name: "bounty", price: 35, imageUrl: "/images/Bounty.jpeg", description: "Sweet coconut filling covered with milk chocolate." },
      { id: 8, name: "twix", price: 45, imageUrl: "/images/Twix.jpeg", description: "Crunchy biscuit topped with caramel and coated in chocolate." },
      { id: 9, name: "ferreroRocher", price: 120, imageUrl: "/images/FerreroRocher.jpeg", description: "Hazelnut encased in creamy chocolate and a crisp wafer shell." },
      { id: 10, name: "FudgeDelight", price: 50, imageUrl: "/images/FudgeDelight.jpeg", description: "Rich and creamy fudge chocolate with a smooth, melt-in-your-mouth center." },
      { id: 11, name: "mars", price: 50, imageUrl: "/images/Mars.jpeg", description: "Chewy caramel and nougat covered in milk chocolate." },
      { id: 12, name: "galaxy", price: 90, imageUrl: "/images/Galaxy.jpeg", description: "Smooth and creamy chocolate with a rich melt-in-mouth texture." }
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
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload.id),
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

// Orders Slice (unchanged)
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

// ✅ User Authentication Slice (FIXED)
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    users: JSON.parse(localStorage.getItem("users")) || [],
    isAuthenticated: false,
    currentUser: null,
    loginError: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      state.loginError = null;
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(
        (user) =>
          (user.username === username || user.email === username) &&
          user.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
        state.loginError = null;
      } else {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.loginError = "Invalid username/email or password";
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
      state.loginError = null;
    },
  },
});
export const { registerUser, loginUser, logoutUser } = userAuthSlice.actions;

// Recently Viewed Slice (unchanged)
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
# CvSU Mini Store (Product Catalog)

Laboratory Exercise 3: React Props and Component Communication
DCIT26: Application Development and Emerging Technologies

**Name:** Dulutan, Dan Marko T.
**Section:** BSIT 3-6


## About the Project

Mini product catalog 

**Difference bterween PROPS and STATE**
Props are the data that is passed from parent to child and are read-only. The State is the component itself you can change via setter function. In simple terms, props are a read-only like title, price, onAddtoCart and the State is changeable like cartCount and lastAdded, when the state changes, the screen changes.

**Simple Analogy** 
Props are like a gift someone gave you. You can use it, but it isn't yours to change.
State is like your own notebook. You can write in it and change it whenever you want.

**Why can a child component not modify the props it receives?**
The data belongs to the parent, not the child. The child only borrows it.

In my data ProductCard gets price and inStock from App. It can show them, but it can't change them. If the card could change price, other parts of the app might show the wrong price, and you wouldn't know who changed it.

**How does the onAddToCart callback allow data to flow from child to parent even though props only flow downward?**
The parent gives the child a function. The child calls that function and puts the data inside it. The function runs in the parent, so the data reaches the parent.

**Why is key required in .map()?**

React uses the key to tell the list items apart. It's like a name tag on each item.

**What does children allow that a normal prop does not?**
It lets you put anything inside the component's tags, like a box you can fill however you want.

## Lab 4: Live Search and Filter (Guide Questions)

**1. Why do we use two separate states, searchText and debouncedSearch, instead of only one?**
searchText updates on every keystroke so the input feels normal. debouncedSearch updates only after the user stops typing for 300ms, and it is the value used for filtering. With only one state, the list would re-filter on every keystroke.

**2. What would happen if the debounce effect did not return a cleanup function?**
The old timers would not be cancelled. Every keystroke would still trigger its own update after 300ms, so the list would update many times instead of once after the user stops typing, and the debounce would not work.

**3. What is the purpose of the dependency array? What happens if it is empty ([])? What happens if it is left out completely?**
The dependency array tells React when to run the effect again: only when one of the listed values changes. If it is empty ([]), the effect runs only once, when the component first appears. If it is left out, the effect runs after every render.

**4. Why should we avoid sorting the original products array directly?**
sort() changes the array it is called on. Changing the original data can cause bugs, because other parts of the app depend on it, and "Default" order could not be restored. We sort a copy ([...array]) instead.

**5. Is the filtered product list better stored in its own state, or calculated from existing state during rendering? Explain your choice.**
It is better to calculate it during rendering. The filtered list can always be worked out from searchText, category, and sortOrder, so storing it in a separate state would duplicate data and could get out of sync. Calculating it keeps one source of truth.
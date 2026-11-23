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
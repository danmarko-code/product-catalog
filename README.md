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
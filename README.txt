# Yash Salunkhe Portfolio — Button Fix

## Fixed issues

1. Desktop/laptop:
   - VIEW WORK and CONTACT are separate.
   - 16px gap between the buttons.
   - Buttons cannot overlap/merge.

2. Mobile:
   - VIEW WORK is no longer positioned on the right side of the Yash Salunkhe heading.
   - VIEW WORK and CONTACT appear horizontally in one row below the description.
   - Responsive sizing is included for small phones.

## Run in VS Code

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html`.
4. Use Live Server, or simply open `index.html` in a browser.

## Important for your existing React/Vite project

The key CSS is in `style.css`. If you already have your portfolio project, copy the `.hero-actions`, `.hero-btn`, and mobile `@media (max-width: 768px)` rules into your existing CSS.

Also remove any old `position: absolute`, `right: 0`, `top: ...`, or transform rules that were specifically positioning VIEW WORK on the right side.

# Development Challenges & Fixes
 
1. **HTML & CSS Issues**  
   HTML and CSS were a pain in the ass. We resolved the issue by using AI and researching solutions online.
 
2. **Unwanted Scroll Bars**  
   The left and right scroll bars were showing up when characters moved to the left.  
   We fixed this by adding the following CSS to hide the scroll bars:
 
   ```css
   body {
     overflow: hidden;
   }
   
3. **Teacher Game-Over Spam**  
   Teachers would nonstop spam you with a game-over screen.  
   We fixed it by adding an `if` statement to check if you already died.

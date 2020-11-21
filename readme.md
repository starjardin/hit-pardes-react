# Hit parade project

<a href="https://hit-parades-react-tantely.netlify.app/">Demo</a>

Instructions : 
Code this hit parade with react, react-router and context!
Set up your own repo and project structure from scratch. 
Each screen here represents a route. Take some time to decide how the data structure of a song will look like. 

Routes  : 

- / : Hit parade route, where you’re showing a list of songs, sorted by their popularity. You can inscrease or decrease the votes by clicking the icons. You can also favorite a song by clicking the heart icon. There is also a possibility to add a song to the cart. If you click on the three dots, you’ll be redirected to the song’s page, with the lyrics.

- /styles : It’s a page that shows the list of possible styles a song can have. Those styles of music are hardcoded, you don’t need to generate them dynamically.

- /styles/:styleName : it’s a page that lists all the songs from a specific style. If you click on a song, it will take you to the specific song page.

- /song/:songId : it’s a page that shows a specific song, and also the lyrics of a song

- /add : page with a form to add a song to the song catalog

- /cart: page where all the songs you added to your cart, appears. You can delete one from the list if you changed your mind. You can see the total of your cart value, and you can submit the order once you’re ready! (it should just show the complete price on the console)

You need to create your own songs for this project. Once your functionality is working, make the data persist in localStorage.

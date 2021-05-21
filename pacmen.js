// let pos = 0;
// const pacArray = [
//   ['./images/PacMan1.png', './images/PacMan2.png'],
//   ['./images/PacMan3.png', './images/PacMan4.png'],
// ];
// let direction = 0;
const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
//takes in 2 properties, an x and y and sets them to a random # using given scale
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
// x and y velocity are between 0 and 10 - x and y position are between 0 and 200
  let velocity = setToRandom(10); 
  let position = setToRandom(200);

  // Add image to div id = game
  //DOM manipulation starting
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute'; 
  // allows us to have a top and left setting to position it exactly where we want it
  newimg.src = 'images/PacMan1.png'; //file tree must be included
  newimg.width = 100;

  // TODO: set position here
  // Take the newimg DOM element and set the top and left positions
  newimg.style.top = position.y;
  newimg.style.left = position.x;
  // position the top of the image this many px from the top of the container
  // position the left of image, this many px from the left of container
  // and these are both randomly generated from velocity and position variables


  // TODO add new Child image to game
  game.appendChild(newimg);
  // add newimg that we just created to the DOM

  // return details in an object
  // macPac returns an object that has reference to position, velocity and the html element the img is linked to
  return {
    position,
    velocity,
    newimg,
  };
}



function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x; // direction and velocity are both stored here
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20); // every 20 seconds, their position is updated according to their velocity
}



function checkCollisions(item) { // log out what these items are first to see what they are
  // TODO: detect collision with all walls and make pacman bounce
  // if it hits the left or right of screen, reverse it's x velocity
  // if it hits the top or bottom of the screen, reverse it's y velocity
  // first we need to get a handle on the positions 
  const posX = item.position.x;
  const posY = item.position.y;

  if (posX <= 0 || posX >= window.innerWidth - item.newimg.width) // -100 because the pacman image is 100px wide
    item.velocity.x *= -1; //this is shorthand for item.velocity.x * -1, so reverse velocity
      // if it exceeds the edge of the innerWidth, reverse velocity

        if (posY <= 0 || posY >= window.innerHeight - item.newimg.height) // do the same thing for the hieght
    item.velocity.y *= -1;
}




function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}

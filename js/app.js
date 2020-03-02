var imgsArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var firstImg = document.querySelector('#firstImg');
var secondImg = document.querySelector('#secondImg');
var thirdImg = document.querySelector('#thirdImg');
var imageSection = document.querySelector('#imagesSection')


firstImg.src = `/images/${imgsArray[0]}`;
firstImg.alt = imgsArray[0];
firstImg.title = imgsArray[0];

secondImg.src = `/images/${imgsArray[1]}`;
secondImg.alt = imgsArray[1];
secondImg.title = imgsArray[1];

thirdImg.src = `/images/${imgsArray[2]}`;
thirdImg.alt = imgsArray[2];
thirdImg.title = imgsArray[2];

function Bus(name) {
  this.name = name;
  this.imgPath = `/images/${this.name}`;

  this.clicks = 0;
  this.views = 0;
  Bus.all.push(this);
}
Bus.all = [];

for (i = 0; i < imgsArray.length; i++) {
 var obj1 =  new Bus(imgsArray[i]);
}

var firstImage, secondImage, thirdImage;
function render() {
  firstImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(firstImage);

  secondImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(secondImage);
  
  thirdImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(thirdImage);
  while (firstImage === secondImage  || firstImage === thirdImage || secondImage === thirdImage){
    render();
  }
  
  firstImg.setAttribute('src', firstImage.imgPath);
  firstImg.setAttribute('alt', firstImage.name);
  firstImg.setAttribute('title', firstImage.name);
  
  
  secondImg .setAttribute('src', secondImage.imgPath);
  secondImg.setAttribute('alt', secondImage.name);
  secondImg.setAttribute('title', secondImage.name);
  

  thirdImg .setAttribute('src', thirdImage.imgPath);
  thirdImg.setAttribute('alt', thirdImage.name);
  thirdImg.setAttribute('title', thirdImage.name);

}



render();

imageSection.addEventListener('click', handleClickOnBus);
var clickOnBus = 0;
function handleClickOnBus(event) {
  if (clickOnBus < 25) {
    if (event.target.id !== 'imagesSection') {
      if (event.target.id === 'firstImg') {
        firstImage.clicks++;
      } else if (event.target.id === 'secondImg') {
        secondImg.clicks++;
      } else if (event.target.id === 'thirdImg') {
        thirdImage.clicks++;
      }
      clickOnBus++;
      firstImage.views++;
      secondImage.views++;
      thirdImage.views++;
      render();
    }
  } else {
    console.log('more than 25 clicks');
    //imageSection.removeEventListener('click', handleclickOnBus);
    render2();
  }
}


function render2() {
  var ulE1 = document.getElementById('result');
  for (var i = 0; i < Bus.all.length; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Bus.all[i].name} has ${Bus.all[i].clicks} clicks and ${Bus.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





// var imgsArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

// var firstImg = document.querySelector('#firstImg');
// var secondImg = document.querySelector('#secondImg');
// var thirdImg = document.querySelector('#thirdImg');
// var imageSection = document.querySelector('#imagesSection')


// firstImg.src = `/images/${imgsArray[0]}`;
// firstImg.alt = imgsArray[0];
// firstImg.title = imgsArray[0];

// secondImg.src = `/images/${imgsArray[1]}`;
// secondImg.alt = imgsArray[1];
// secondImg.title = imgsArray[1];

// thirdImg.src = `/images/${imgsArray[2]}`;
// thirdImg.alt = imgsArray[2];
// thirdImg.title = imgsArray[2];

// function Bus(name) {
//   this.name = name;
//   this.imgPath = `/images/${this.name}`;

//   this.clicks = 0;
//   this.views = 0;
//   Bus.all.push(this);
// }
// Bus.all = [];

// for (i = 0; i < imgsArray.length; i++) {
//   new Bus(imgsArray[i]);
// }

// var firstImage, secondImage, thirdImage;
// function render() {
//   firstImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
//   console.log(firstImage);
//   secondImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
//   console.log(secondImage);
//   thirdImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
//   console.log(thirdImage);

//   firstImg.setAttribute('src', firstImage.imgPath);
//   firstImg.setAttribute('alt', firstImage.name);
//   firstImg.setAttribute('title', firstImage.name);

//   secondImg .setAttribute('src', secondImage.imgPath);
//   secondImg.setAttribute('alt', secondImage.name);
//   secondImg.setAttribute('title', secondImage.name);

//   thirdImg .setAttribute('src', thirdImage.imgPath);
//   thirdImg.setAttribute('alt', thirdImage.name);
//   thirdImg.setAttribute('title', thirdImage.name);
// }
// render();

// imageSection.addEventListener('click', handleclickOnBus);
// var clickOnBus = 0;

// function handleclickOnBus(event) {

//   if (clickOnBus < 25) {
//     if (event.target.id !== 'imagesSection') {
//       // while (firstImg !== secondImg && firstImg !== thirdImg && secondImg !== thirdImg){
//       if (event.target.id === 'firstImg') {
//         firstImage.clicks++;
//       } else if (event.target.id === 'secondImg') {
//         secondImg.clicks++;
//       } else if (event.target.id === 'thirdImg') {
//         thirdImage.clicks++;
//       }
//       clickOnBus++;
//       firstImage.views++;
//       secondImage.views++;
//       thirdImage.views++;
//       render();
//     }
//   }
//   else {
//     console.log('more than 5 clicks');
//     //imageSection.removeEventListener('click', handleclickOnBus);
//     render2();
//   }
// }
// //}


// function render2() {
//   var ulE1 = document.getElementById('result');
//   for (var i = 0; i < Bus.all.length; i++) {
//     var liE1 = document.createElement('li');
//     liE1.textContent = `${Bus.all[i].name} has ${Bus.all[i].clicks} clicks and ${Bus.all[i].views} views`;
//     ulE1.appendChild(liE1);
//   }
// }


// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
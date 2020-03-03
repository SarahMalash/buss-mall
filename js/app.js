var imgsArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
var imgs = [];
var clicks1 = [];
var views1 = [];
var img2 = [];
var arrClick = [];
var firstImg = document.querySelector('#firstImg');
var secondImg = document.querySelector('#secondImg');
var thirdImg = document.querySelector('#thirdImg');
var imageSection = document.querySelector('#imagesSection')

// firstImg.src = `/images/${imgsArray[0]}`;
// firstImg.alt = imgsArray[0];
// firstImg.title = imgsArray[0];

// secondImg.src = `/images/${imgsArray[1]}`;
// secondImg.alt = imgsArray[1];
// secondImg.title = imgsArray[1];

// thirdImg.src = `/images/${imgsArray[2]}`;
// thirdImg.alt = imgsArray[2];
// thirdImg.title = imgsArray[2];

function Bus(name) {
  this.name = name.split('.')[0];
  this.imgPath = `images/${name}`;
  this.clicks = 0;
  this.views = 0;
  Bus.all.push(this);
  //imgs.all.push (this);
}
Bus.all = [];

for (var i = 0; i < imgsArray.length; i++) {
  new Bus(imgsArray[i]);
}
for (var i = 0; i < Bus.all.length; i++) {
  imgs[i] = Bus.all[i].name;

}
//console.log(imgs);

// console.log(Bus.all);
var firstImage, secondImage, thirdImage;
function render() {
  firstImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(firstImage);

  secondImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(secondImage);

  thirdImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(thirdImage);
  while ((firstImage === secondImage) || (firstImage === thirdImage) || (secondImage === thirdImage)||arrClick.includes(firstImage.imgPath) || arrClick.includes(thirdImage.imgPath) ||arrClick.includes(secondImage.imgPath) ){
    firstImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(firstImage);

  secondImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(secondImage);

  thirdImage = Bus.all[randomNumber(0, Bus.all.length - 1)];
  console.log(thirdImage);
  }

  firstImg.setAttribute('src', firstImage.imgPath);
  firstImg.setAttribute('alt', firstImage.name);
  firstImg.setAttribute('title', firstImage.name);


  secondImg.setAttribute('src', secondImage.imgPath);
  secondImg.setAttribute('alt', secondImage.name);
  secondImg.setAttribute('title', secondImage.name);


  thirdImg.setAttribute('src', thirdImage.imgPath);
  thirdImg.setAttribute('alt', thirdImage.name);
  thirdImg.setAttribute('title', thirdImage.name);

arrClick[0]=firstImage.imgPath;
arrClick[1]=thirdImage.imgPath;
arrClick[2]=secondImage.imgPath;



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
    // render2();
    render3();
  }
}


function calculateClick() {
  for (var i = 0; i < Bus.all.length; i++) {
    img2.push(Bus.all[i].name);
    clicks1.push(Bus.all[i].clicks);
    views1.push(Bus.all[i].views);
    
  }
}






var ctx = document.getElementById('myChart').getContext('2d');
function render3() {
  calculateClick();
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {

      labels: imgs,
      datasets: [{
        label: '# of Votes',
        data: clicks1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
          





        ],
        borderWidth: 1
      },{
        label: '# of views',
        data: views1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(2, 159, 64, 0.2)',
          'rgba(265, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(295, 206, 86, 0.2)',
          'rgba(24, 192, 192, 0.2)',
          'rgba(15, 102, 255, 0.2)',
          'rgba(235, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(63, 102, 255, 0.2)',
          'rgba(95, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(55, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)'
          





        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


}




// function render2() {
//   var ulE1 = document.getElementById('result');
//   for (var i = 0; i < Bus.all.length; i++) {
//     var liE1 = document.createElement('li');
//     liE1.textContent = `${Bus.all[i].name} has ${Bus.all[i].clicks} clicks and ${Bus.all[i].views} views`;
//     ulE1.appendChild(liE1);
//   }
// }


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
//        while ((firstImage !== secondImage) && (firstImage !== thirdImage) && (secondImage !== thirdImage)){
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
// }
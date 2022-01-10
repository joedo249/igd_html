// const date = new Date();
// const month = date.getMonth();

let month = 1;

switch (month) {
  case 1:
    season = 'snowman';
    changeImage();
    break;  
  case 2:
  case 3:
    season = 'skiing';
    changeImage();
    break;
  case 4:
  case 5:
  case 6:
    season = 'spring';
    changeImage();
    break;
  case 7:
  case 8:
  case 9:
    season = 'summer';
    changeImage();
    break;
  case 10:
  case 11:
  case 12:
    season = 'automn';
    changeImage();
    break;
  default:
    text = 'What a month!';

    function changeImage() {
      let imgSource = './img/' + season + '.jpg';
      let img = document.createElement('img');
      img.setAttribute('src', imgSource);
      img.setAttribute('width', '100%');
      img.setAttribute('height', 'auto');
      img.setAttribute('alt', 'the current season');
      let imgNode = document.getElementById('image');
      imgNode.appendChild(img);
    }
}

var to ="a!";
var to = 'Yêu em!';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'https://scontent.xx.fbcdn.net/v/t1.15752-9/274721005_479429307069002_8279427960998133557_n.jpg?stp=dst-jpg_p206x206&_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=JwZsaK1mNdUAX_GnFx7&_nc_oc=AQnd42mY8mZlaNWVtO1FB5M6QCiHjcQ-v9yY_-9qBAZK3YqzuJ01uhMEgyF0bNjRZAruqfn3GxLvgKUp9JcrIf6d&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIoashMfvJG0AO4vrXdngz-U5qhXSxqvYNsD00UGuBGQA&oe=624A119A';

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
    
  }, false);
  
  
  
  nametag.innerText = to;
}

init();


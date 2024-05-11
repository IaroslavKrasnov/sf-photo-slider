let dataSlider = [{
    url: "images/Slider_img/image_1.png",
    title: "Rostov-on-Don, Admiral",
    desc: "Only a small part of the work performed by our company is presented on the site. For 14 years on in the construction market we have made happy more than 1000 families",
    city: "Rostov-on-Don, LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
  }, {
    url: "images/Slider_img/image_2.png",
    title: "Sochi Thieves",
    desc: "State-of-the-art amenities, including a rooftop terrace, fitness center, and concierge service. These apartments offer easy access to vibrant urban amenities and tranquil green spaces",
    city: "Sochi, Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
  }, {
    url: "images/Slider_img/image_3.png",
    title: "Rostov-on-Don Patriotic",
    desc: "Modern apartments offer panoramic views, a fully equipped kitchen, and a luxurious living space designed for ultimate comfort and convenience. Escape the hustle and bustle while enjoying the vibrant city",
    city: "Rostov-on-Don, Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
}];

// Проверяем, что массив возвращает объекты
function initSlider(options) {
    if (!dataSlider || !dataSlider.length) return;


options = options || {
    titles: true,
    dots: true,
  };

  let sliderImages = document.querySelector(".section-second__apartments-photo-area"),
      sliderArrows = document.querySelector(".section-second__slider"),
      sliderDots = document.querySelector(".section-second__slider_dots"),
      sliderTitles = document.querySelector(".section-second__app-name"),
      sliderDescription = document.querySelector(".section-second__description"),
      sliderCity = document.querySelector(".section-second__property_city").querySelector(".section-second__property-value"),
      sliderArea = document.querySelector(".section-second__property_apartment-area").querySelector(".section-second__property-value"),
      sliderTime = document.querySelector(".section-second__property_repair-time").querySelector(".section-second__property-value"),
      sliderCost = document.querySelector(".section-second__property_repair-cost").querySelector(".section-second__property-value");
  

  initImages();
  initArrows();
  
  if (options.dots) {
    initDots();
  }
  
  if (options.titles) {
    initTitles();
  }

  initDescription();
  initCity();
  initArea();
  initTime();
  initCost();
  
  function initImages() {
    dataSlider.forEach((image, index) => {
      let imageDiv = `<img class="section-second__apartments-photo n${index} ${index === 0? "active" : ""}" src="${dataSlider[index].url}" data-index="${index}" alt="Фото квартиры">`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  
  function initArrows() {
    sliderArrows.querySelectorAll(".section-second__slider_arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? dataSlider.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === dataSlider.length - 1? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }
  
  function initDots() {
    dataSlider.forEach((image, index) => {
      let dot = `<div class="section-second__slider_dots_dot n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".section-second__slider_dots_dot").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    if (options.dots) {
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
    }
    if (options.titles) {
      sliderTitles.querySelector(".active").classList.remove("active");
      sliderTitles.querySelector(".n" + num).classList.add("active");  
    }

    changeDescription(num);
    changeCity(num);
    changeArea(num);
    changeTime(num);
    changeCost(num);
  }
  
  function initTitles() {
    dataSlider.forEach((image, index) => {
      let title = `<div class="section-second__app-name_item n${index} ${index === 0? "active" : ""}" data-index="${index}">${dataSlider[index].title}</div>`;
      sliderTitles.innerHTML += title;
    });
    sliderTitles.querySelectorAll(".section-second__app-name_item").forEach(title => {
      title.addEventListener("click", function() {
        moveSlider(this.dataset.index);
      })
    })
  }

  function initDescription() {
    sliderDescription.innerText = dataSlider[0].desc;
  }

  function changeDescription(num) {
    sliderDescription.innerText = dataSlider[num].desc;
  }


  function initCity() {
    sliderCity.innerText = dataSlider[0].city;
  }

  function changeCity(num) {
    sliderCity.innerText = dataSlider[num].city;
  }


  function initArea() {
    sliderArea.innerText = dataSlider[0].area;
  }

  function changeArea(num) {
    sliderArea.innerText = dataSlider[num].area;
  }


  function initTime() {
    sliderTime.innerText = dataSlider[0].time;
  }

  function changeTime(num) {
    sliderTime.innerText = dataSlider[num].time;
  }


  function initCost() {
    sliderCost.innerText = dataSlider[0].cost;
  }

  function changeCost(num) {
    sliderCost.innerText = dataSlider[num].cost;
  }

}

let sliderOptions = {
  dots: true,
  titles: true,
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});
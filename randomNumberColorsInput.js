
 const rainBow = [
      'rgb(255, 255, 255)',
      'rgb(247, 212, 15)',
      'rgb(89, 247, 15)',
      'rgb(255, 5, 86)',
      'rgb(15, 247, 170)',
      'rgb(15, 135, 247)',
      'rgb(50, 15, 247)',
      'rgb(181, 15, 247)',
      'rgb(247, 15, 65)'
    ]

   
    class  Squares {
      constructor (_container, _rainBow) {
        this.addClickHandler(_container, _rainBow);
      }

     changeNumber(i, _container) {
        for(let k = i; k >= 0; k--) {
          const n = parseInt(_container[k].innerText) + 1;
          _container[k].innerText = (n > 9)? 1 : n;
        }
      }

     changeColor (i, _container, _rainBow) {
        console.log("Runnig function changeColor");
        for(let k = i; k >= 0; k--) {
          let style = window.getComputedStyle(_container[k]);
          let index = _rainBow.indexOf(style.backgroundColor);
          _container[k].style.backgroundColor = (index > 7)? _rainBow[0] : _rainBow[index + 1];
          console.log(style.backgroundColor, index);
        }
      }

     addClickHandler (_container, _rainBow) {
      _container.forEach((box, i) => {
          box.addEventListener('click', evt => {
            this.changeNumber(i, _container);
            this.changeColor(i, _container, _rainBow);
          })
        })
      }
    }

   
    const container = document.querySelectorAll('.box1st,#one');
    const polygon = new Squares(container, rainBow);

   
    polygon.forEach((el, i) => {
      el.innerText = i + 1;
      el.style.backgroundColor = rainBow[i];
      
      
    });
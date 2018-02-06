$(function(){
  // Model
  var model = {
      currentCat : null,
      cats : [
        {
          name : 'Bella',
          imgSrc : 'img/cat1.jpg',
          count :0
        },
        {
          name : 'Charlie',
          imgSrc : 'img/cat2.jpg',
          count :0
        },
        {
          name : 'Sam',
          imgSrc : 'img/cat3.jpg',
          count :0
        },
        {
          name : 'Molly',
          imgSrc : 'img/cat4.jpg',
          count :0
        },
        {
          name : 'Oscar',
          imgSrc : 'img/cat5.jpg',
          count :0
        },
        {
          name : 'Lucy',
          imgSrc : 'img/cat6.jpg',
          count :0
        }
      ]
  };

  // Octopus
  var octopus = {
      init : function(){
        model.currentCat = model.cats[0];
        catListView.render();
        catView.init();
      },
      setCurrentCat : function(cat){
        model.currentCat = cat;
      },
      getCurrentCat : function(){
        return model.currentCat;
      },
      getAllCats : function(){
        return model.cats;
      },
      addClickCount : function(){
        model.currentCat.count++;
        //alert("Add click count");
        catView.render();
      }
  };

  // View for list of cats
  var catListView = {
      render : function(){
          //variables
          var cat, elem;
          //getting cat list area
          this.catListElem = document.getElementById('cat-list');
          //getting list of cats
          var catList = octopus.getAllCats();
          //adding list item for each cat
          for(var i=0; i<catList.length; i++){
              cat = catList[i];
              elem = document.createElement('li');
              elem.textContent = cat.name;
              // function on click for cat list item
              elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
              this.catListElem.appendChild(elem);
          }
      }
  };

  // View for clicked cat
  var catView = {
      init : function(){
          // initializing cat display area
          this.catNameElem = document.getElementById('cat-name');
          this.catCountElem = document.getElementById('cat-count');
          this.catImageElem = document.getElementById('cat-image');
          // adding on click funtion
          this.catImageElem.addEventListener('click',function(){
              octopus.addClickCount();
          });
          // calling render function for set cat
          this.render();
      },
      render : function(){
          var currentCat = octopus.getCurrentCat();
          //alert(currentCat);
          this.catNameElem.textContent = currentCat.name;
          this.catCountElem.textContent = currentCat.count;
          this.catImageElem.src = currentCat.imgSrc;
      }
  };

  // start
  octopus.init();

});

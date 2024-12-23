class Slider{
    constructor(){
        this.images=[];
        this.images[0]= "images/met1.png";
        this.images[1]= "images/met2.jpg";
        this.images[2]= "images/met3.jpg";
        this.images[3]= "images/met4.jpg";
        this.images[4]= "images/met5.jpg";
  
      this.links=[];
      this.links[0]= "#";
      this.links[1] = "#";
      this.links[2] = "#";
      this.links[3]= "#";
      this.links[4]= "#"
      this.counter = 0;
  
      this.playSlider();
  
      setInterval(()=>{
        this.playSlider();
      },3000);
  
    }
    playSlider(){
      if(this.counter< this.images.length - 1){
        this.counter++;
      }
      else{
        this.counter = 0;
      }
  
      document.slider_show.src = this.images[this.counter];
      document.getElementById("LinkImg").href= this.links[this.counter];
  
   
    }
  }
  onload = new Slider();
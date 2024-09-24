class RegularUpdates {
    
    construtor (){
        this.next = document.getElementsByClassName("next")[0];
        this.previous = document.getElementsByClassName("previous")[0];
        this.slides = document.getElementsByClassName("updates-carousel-item");
        this.n = 0;
        this.events();
    }

    events(){
        this.next.addEventListener("click", () => this.nextSlide(1));
        this.previous.addEventListener("click", () => this.previousSlide(-1));
    }

    visibleSlide(x){
        this.slides[x].classList.add("is-visible");
    }

    
    nextSlide(x){
        if(this.n<this.slides.length-1){
            this.visibleSlide(n+1);
            this.slides[this.n].classList.remove("is-visible");
            this.n++;
        }else{
            this.slides[this.n].classList.remove("is-visible");
            this.n=0;
            this.visibleSlide(this.n);
        }
    }

    previousSlide(x){
        if(n>0){
            this.visibleSlide(n-1);
            this.slides[this.n].classList.remove("is-visible");
            this.n--;
        }else{
            this.slides[this.n].classList.remove("is-visible");
            this.n = this.slides.length-1;
            this.visibleSlide(this.n);
        }
    }
}

export default RegularUpdates
let sliders = document.querySelectorAll('.slider');
let prism = document.querySelector('.prism');
sliders.forEach((slider) => {
    console.log(slider.id);
    slider.oninput = () => {
        console.log(slider.id, slider.value)
        prism.style['transform'] = `rotate${sliders[0].id}(${sliders[0].value}deg) 
                                    rotate${sliders[1].id}(${sliders[1].value}deg)
                                    rotate${sliders[2].id}(${sliders[2].value}deg)`;
    }
});

/*
prism.style.transform = `rotate${this.id}(${this.value})`
* */
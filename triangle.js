let sliders = document.querySelectorAll('.slider');
let prism = document.querySelector('.prism');
sliders.forEach((slider) => {
    console.log(slider.id);
    slider.oninput = () => {
        console.log(slider.id, slider.value)
        prism.style['transform'] = `rotate${slider.id}(${slider.value}deg)`;
    }
});

/*
prism.style.transform = `rotate${this.id}(${this.value})`
* */
let sliders = document.querySelectorAll('.slider');
let prism = document.querySelector('.prism');
sliders.forEach((slider) => {
    console.log(slider.id);
    slider.oninput = () => {
        prism.style['transform'] = `rotate${sliders[0].id}(${sliders[0].value}deg) 
                                    rotate${sliders[1].id}(${sliders[1].value}deg)
                                    rotate${sliders[2].id}(${sliders[2].value}deg)`;
    }
});

function changeSize() {
    let root = document.querySelector(':root');
    let a = Number(getComputedStyle(root).getPropertyValue('--a').replace('vmin', ''));
    let b = Number(getComputedStyle(root).getPropertyValue('--b').replace('vmin', ''));
    let c = Number(getComputedStyle(root).getPropertyValue('--c').replace('vmin', ''));

    let variables = [a, b, c];
    a = Math.max(...variables);
    c = Math.min(...variables);
    b =  variables.reduce((a, b) => a+b) - a - c;
    root.style.setProperty('--a', `${a}vmin`);
    root.style.setProperty('--b', `${b}vmin`);
    root.style.setProperty('--c', `${c}vmin`);


    let right = (a**2 + b**2 - c**2) / 2 / a;
    let left = a - right;
    let bottom = Math.sqrt(b**2 - right**2);
    root.style.setProperty('--right', `${right}vmin`);
    root.style.setProperty('--left', `${left}vmin`);
    root.style.setProperty('--bottom', `${bottom}vmin`);

    root.style.setProperty('--c-angle', `${Math.asin(bottom/b)}rad`);
    root.style.setProperty('--b-angle', `${Math.asin(bottom/c)}rad`);
    console.log(a, b, c, bottom, bottom/c);

    root.style.setProperty('--height', `${Math.sqrt(b**2 - right**2)}vmin`);
    prism.style.display = 'none';
    prism.style.display = 'block';
}

window.onload = () => {
    changeSize();
}
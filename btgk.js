let cube = document.getElementById('cube');
let angle = 0;
let spinning = true;

// Quay đèn tự động
function rotateCube() {
    if(spinning){
        angle += 1; // tốc độ quay
        cube.style.transform = `rotateX(-20deg) rotateY(${angle}deg)`;
    }
    requestAnimationFrame(rotateCube);
}

rotateCube();

// Dừng quay khi hover
cube.addEventListener('mouseenter', () => spinning = false);
cube.addEventListener('mouseleave', () => spinning = true);

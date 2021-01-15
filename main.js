canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_width = 125;
car_height = 75;

car2_width = 125;
car2_height = 75;

background_image = "racing.jpg";

car_image = "car1.png";
car2_image= "car2.png";

car_x = 10;
car_y = 10;

car2_x = 10;
car2_y = 125;
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        car_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40') {
        car_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37') {
        car_left();
        console.log("left arrow key");
    }
    if(keyPressed == '39') {
        car_right();
        console.log("right arrow key");

        }
        if(keyPressed == '87') {
            car2_up();
            console.log("key w");
        }
        if(keyPressed == '83') {
            car2_down();
            console.log("key s");
        }
        if(keyPressed == '65') {
            car2_left();
            console.log("key a");
        }
        if(keyPressed == '68') {
            car2_right();
            console.log("key d");
        } 
}

function car_up() {
    if(car_y >=0) {
        car_y = car_y - 10;
        console.log("when up arrow in pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car_down() {
    if(car_y <=500) {
        car_y = car_y + 10;
        console.log("when down arrow in pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car_left() {
    if(car_x >=0) {
        car_x = car_x - 10;
        console.log("when left arrow in pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car_right() {
    if(car_x <=700) {
        car_x = car_x + 10;
        console.log("when up arrow in pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car2_up() {
    if(car2_y >=0) {
        car2_y = car2_y - 10;
        console.log("when w key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar();
        uploadcar2();
    }
}

function car2_down() {
    if(car2_y <=500) {
        car2_y = car2_y + 10;
        console.log("when s key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}

function car2_left() {
    if(car2_x >=0) {
        car2_x = car2_x - 10;
        console.log("when a key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}

function car2_right() {
    if(car2_x <=700) {
        car2_x = car2_x + 10;
        console.log("when d key is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
        uploadcar();
    }
}


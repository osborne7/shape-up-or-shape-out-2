let drawingContainer = document.getElementById('drawing-container');
console.log(drawingContainer);

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = document.createElement('div');
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.classList.add('shape');
        //this will eventually move to the randomLocation method:
        drawingContainer.appendChild(this.div);
        // this.randomLocation();
        console.log(this);
        // this.div.addEventListener('click', this.describe());
        this.div.addEventListener('dblclick', (e) => {
            e.preventDefault();
            //this needs to be reworked
            // let thisShape = this;
            this.div.classList.add('hide');
        })
    }
    describe = () => {
        //shape name:
        let classes = this.div.classList;
        let getShapeName = classes[1];
        console.log(`get shape name: ${getShapeName}`);
        let sideShape = document.getElementById('side-shape');
        // console.log(`shape name: ${getShapeName}`);
        let shapeText = document.createTextNode(getShapeName);
        sideShape.appendChild(shapeText);

        //width:
        let sideWidth = document.getElementById('side-width');
        let widthText = document.createTextNode(`${this.width}px`);
        sideWidth.appendChild(widthText);

        //height:
        let sideHeight = document.getElementById('side-height');
        let heightText = document.createTextNode(`${this.height}px`);
        sideHeight.appendChild(heightText);

    }
    // randomLocation = () => {
    //     //add logic for placing in a random location within the drawing-container
    // }
        
    }

    // new Shape(5, 10);


class Circle extends Shape {
    constructor(width, height) {
        super(width, height);
        // this.radius = radius;
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.classList.add('circle');
        this.div.addEventListener('click', this.describe());
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.height = height;
        this.width = width;
        this.div.style.borderBottom = `${this.width}px solid red`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.div.classList.add('triangle');
        this.div.addEventListener('click', this.describe());


        // this.div.style.borderLeft = `${this.height}px solid transparent`;
        
            /* border-bottom: 100px solid red;
    border-right: 100px solid transparent; */
        // this.base = height;
    //     this.area = this.triArea();
    //     this.perimeter = this.triPerimeter();
    }
    // triArea = () => 0.5 * this.base * this.height;
    // triPerimeter = () => 2 * this.height + (Math.sqrt(2)) * height;
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.classList.add('rectangle');
        this.div.addEventListener('click', this.describe());

        //need to use the width and height to draw the rect
    }
}

class Square extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.classList.add('square');
        this.div.addEventListener('click', this.describe());

        // this.sideLength = sideLength;
    }
}

// new Square(5, 10);


// when any of these are clicked, first remove the values from the sidepanel
//add shapes when their buttons are clicked:
let rectangleButton = document.getElementById('rect-button');
rectangleButton.addEventListener('click', (e) => {
    e.preventDefault();
    let userWidth = document.getElementById('rect-width');
    let rectWidth = userWidth.value;
    let userHeight = document.getElementById('rect-height');
    let rectHeight = userHeight.value;
    new Rectangle(rectHeight, rectWidth);
})

let squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('square button was clicked');
    let userLength = document.getElementById('square-length');
    console.log(userLength);
    let squareLength = userLength.value;
    console.log('square length: ' + squareLength);

    new Square(squareLength, squareLength);
})

let circleButton = document.getElementById('circle-button');
circleButton.addEventListener('click', (e) => {
    e.preventDefault();
    let userRadius = document.getElementById('circle-radius');
    let circleRadius = userRadius.value;
    new Circle(circleRadius, circleRadius);
})

let triangleButton = document.getElementById('triangle-button');
triangleButton.addEventListener('click', (e) => {
    e.preventDefault();
    let userTriHeight = document.getElementById('tri-height');
    let triHeight = userTriHeight.value;
    console.log(triHeight);
    new Triangle(triHeight, triHeight);
})
let drawingContainer = document.getElementById('drawing-container');

class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = document.createElement('div');
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.classList.add('shape');
        drawingContainer.appendChild(this.div);
        this.div.addEventListener('dblclick', (e) => {
            e.preventDefault();
            this.div.classList.add('hide');
        })
        this.div.addEventListener('click', () => {
            this.describe();
        })
    }
    describe = () => {
        //get all side-panel categories:
        let sideShape = document.getElementById('side-shape');
        let sideWidth = document.getElementById('side-width');
        let sideHeight = document.getElementById('side-height');
        let radius = document.getElementById('side-radius');
        let perimeter = document.getElementById('side-perimeter');
        let area = document.getElementById('side-area');
        sideShape.innerHTML = 'Shape Name: '
        sideWidth.innerHTML = 'Width: '
        sideHeight.innerHTML = 'Height: '
        radius.innerHTML = 'Radius: '
        perimeter.innerHTML = 'Perimeter: '
        area.innerHTML = 'Area: '

        //shape name:
        let classes = this.div.classList;
        let getShapeName = classes[1];
        let shapeText = document.createTextNode(getShapeName);
        sideShape.appendChild(shapeText);

        //width:
        let widthText = document.createTextNode(`${this.width}px`);
        sideWidth.appendChild(widthText);

        //height:
        let heightText = document.createTextNode(`${this.height}px`);
        sideHeight.appendChild(heightText);

        if (this.div.classList.contains('circle')) {
            let radiusText = document.createTextNode(`${this.width / 2}px`);
            radius.appendChild(radiusText);

            let perimeterText = document.createTextNode(`${Math.floor(2 * Math.PI * this.height)}px`);
            perimeter.appendChild(perimeterText);

            let areaText = document.createTextNode(`${Math.floor(Math.PI * (this.height * this.height))}px`);
            area.appendChild(areaText);
            } else if (this.div.classList.contains('triangle')) {
                let areaText = document.createTextNode(`${Math.floor(0.5 * this.height * this.height)}px`);
                area.appendChild(areaText);

                let perimeterText = document.createTextNode(`${Math.floor(2 * (this.height * this.height) + Math.sqrt(2) * this.height)}px`);
                perimeter.appendChild(perimeterText);
            }
    }
    randomVal = (min, max) => {
                return Math.floor(Math.random() * (max - min) + min);
            }
    }

class Circle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.classList.add('circle');
        this.div.addEventListener('click', this.describe());
        this.div.style.top = `${this.randomVal(this.height, 600)}px`;
        this.div.style.left = `${this.randomVal(this.width, 600)}px`;        
    }
}

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.height = height;
        this.width = width;
        // note to self: triangle drawing needs to be re-worked:
        this.div.style.borderBottomWidth = `${this.height}px`;
        this.div.style.borderRightWidth = `${this.height}px`;
        this.div.classList.add('triangle');
        this.div.addEventListener('click', this.describe());
        this.div.style.top = `${this.randomVal(this.height, 600)}px`;
        this.div.style.left = `${this.randomVal(this.width, 600)}px`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.classList.add('rectangle');
        this.div.addEventListener('click', this.describe());
        this.div.style.top = `${this.randomVal(this.height, 600)}px`;
        this.div.style.left = `${this.randomVal(this.width, 600)}px`;
    }
}

class Square extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.classList.add('square');
        this.div.addEventListener('click', this.describe());
        this.div.style.top = `${this.randomVal(this.height, 600)}px`;
        this.div.style.left = `${this.randomVal(this.width, 600)}px`;
    }
}

//add shapes when their submit buttons are clicked:
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
    let userLength = document.getElementById('square-length');
    let squareLength = userLength.value;
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
    new Triangle(triHeight, triHeight);
})
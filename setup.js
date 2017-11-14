let box = document.querySelectorAll('.box1st')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let six = document.querySelector('#six')
let seven = document.querySelector('#seven')
let eight = document.querySelector('#eight')
let nine = document.querySelector('#nine')

const boxes = [
    rgb = '255,255,255',
    rgb = '255,0,0',
    rgb = '0,255,0',
    rgb = '0,0,255',
    rgb = '80,150,30'
    
]

const num =[
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
]

class Square{
    constructor (_boxes){
        this.boxes = this.boxes
        this.changeNumber = this.changeNumber(this.i,this.boxes)
        this.changeColor = this.changeColor(this.i,this.boxes) 
        this.addClickHander = (this.changeColor,this.changeNumber)
    }

    changeNumber(i,_boxes){
        console.log('Running Function changeNumber....')
            for(k = 0; num[k] < num[k].length; k++){

            }

    }

    changeColor(i,_boxes){
        console.log('Running Function changeColor')

    }

    addClickHander(){
        boxes.forEach(function(box){
            box.addEventLister('click',function(e){
                changeNumber();
                changeColor();
            })
        }
    }
}


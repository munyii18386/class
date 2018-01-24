// Functions to draw lines
// An attempt to replicate http://vallandingham.me/sentence_drawings/
'use strict';

// Constants / global variables
const height = 500;
const width = 500;

// Get canvas, set width/height/strokeStyle
let canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = 2;

// Set event listener (onkeydown)
let input = document.getElementById('textInput');
input.onkeydown = drawLines;

// Function to return an array of lengths from the text
function getLinesFromText() {
    let text = document.getElementById('textInput').value;
    let textArr = text.split(' ');
    return textArr.map(function (d) {
        return d.length;
    });
}


// Function to draw lines
function drawLines() {
    // Clear rectangle and begin path
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    // Set initial position (we'll update this each turn)
    let position = {
        x: width / 2,
        y: height / 2
    };

    // Put the pen at the starting position
    ctx.moveTo(position.x, position.y);


    // Get array of lengths from text input
    let lines = getLinesFromText();

    // Iterate through lines, keeping track of position
    // Turn 90 degrees each turn
    lines.forEach(function (d, i) {
        let dir = i % 4; // direction
        let x,
            y;

        // Add different x or y amount based on direction
        switch (dir) {
            case (0):
                x = d * 10;
                y = 0;
                break;
            case (1):
                x = 0;
                y = d * 10;
                break;
            case (2):
                x = -d * 10;
                y = 0;
                break;
            default:
                x = 0;
                y = -d * 10;
                break;
        }
        // Update the position by adding x and y
        position.x += x;
        position.y += y;

        // Draw a line to the new position
        ctx.lineTo(position.x, position.y);
    });
    ctx.stroke();
}



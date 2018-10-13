
// Le multiplicateur de hauteur
var h = 0.75

// L'angle des deux branche de départ (+angle & -angle)
var angle = 6

// La hauteur du tronc au départ
var startHeight = 100

// La largeur du tronc au départ
var startWidth = 5

// La limite de l'itération
var limit = 6

// La nuance de gris maximum (0 à 255)
var maxGrayscale = 180

function setup() {
    noLoop();
}

function draw() {

    // Regardez la doc de p5.js
    createCanvas(windowWidth, windowHeight)

    // if(keyIsDown(LEFT_ARROW)) { h -= 0.001 }
    // if (keyIsDown(RIGHT_ARROW)) { h += 0.001 }
    // if (keyIsDown(UP_ARROW)) { angle += 0.01 }
    // if (keyIsDown(DOWN_ARROW)) { angle -= 0.01 }

    // La couleur du fond
    background('#F4F4F4')

    // Le point de départ
    translate( (windowWidth / 2) + 190, windowHeight )
    
    // Appelle la fonction Tree()
    Tree(startHeight)

}

/**
 * Crée un arbre fractale
 * @param {number} height La hauteur du tronc principale.
 */
function Tree(height) {
    // Normalise la hauteur (0.0 à 1.0)
    let nHeight = height / startHeight

    // Récupère la nuance de gris en fonction de la hauteur normalisé
    let gray = (nHeight * 255)

    // La nuance de gris ne dépasse pas la valeur max de nuance de gris définis au dessus
    let color = maxGrayscale - gray

    // applique la nuance de gris
    stroke(color - 100, color, color - 100)

    // Assigne l'épaisseur du tronc/branches en fonction de la hauteur normalisé
    strokeWeight(startWidth * nHeight)

    // Trace une ligne (ici le tronc ou la branche)
    line(0, 0, 0, -height)

    // Se place au bout de la ligne tracé
    translate(0, -height)

    // Récursivité
    if(height > limit) {
        push()

        // tourne de PI / angle
        rotate(PI / angle)

        // Appelle la fonction Tree() avec une hauteur réduit (height * h)
        Tree(height * h)

        pop()

        // Tourne de PI / -angle
        rotate(PI / -angle)

        // Appelle la fonction Tree() avec une hauteur réduit (height * h)
        Tree(height * h)
    }
}
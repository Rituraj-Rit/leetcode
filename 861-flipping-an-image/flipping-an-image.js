/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++){

        // Flip the row
        image[i].reverse();

        // Invert every bit
        for(let j = 0; j < image[i].length; j++){
            image[i][j] = image[i][j] === 0 ? 1 : 0;
        }
    }

    return image;
};
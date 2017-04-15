const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifCycle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');
const fs = require('fs');
const path = require('path');

const imagedir = './content/assets/';

const directories = fs.readdirSync(imagedir)
                        .filter(file => fs.statSync(path.join(imagedir, file)).isDirectory());


directories.forEach(directory => {
    imagemin([`./content/assets/${directory}/*.{jpg,png,svg,gif}`],`./content/assets/${directory}`, {
        plugins: [
            imageminJpegtran(),
            imageminPngquant({quality: '65-80'}),
            imageminGifCycle(),
            imageminSvgo()
        ]
    });
});


imagemin([`./content/assets/*.{jpg,png,svg,gif}`],`./content/assets/`, {
    plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: '65-80'}),
        imageminGifCycle(),
        imageminSvgo()
    ]
});
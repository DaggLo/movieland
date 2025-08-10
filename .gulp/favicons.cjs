const clean = require("gulp-clean");
const { favicons } = require("favicons");
const fs = require("node:fs");
const fsAsync = require("node:fs/promises");
const imagemin = require('gulp-imagemin');
const gulp = require("gulp");
const path = require("node:path");

const createFaviconsSrc = "./src/shared/assets/favicons/favicon.svg"; // Icon source file path.
const createFaviconsDest = "./public/favicons"; // Output favicons path.
const createFilesDest = "./public"; // Output files path.
const htmlBaseName = "index.html"; // HTML file basename.

// Configuration (https://github.com/itgalaxy/favicons).
const createFaviconsConfig = {
  path: "/favicons",
  appName: "Movieland",
  appShortName: "Movieland",
  appDescription: "A great application to pick a movie.",
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: false,
  },
  version: "1.0.0",
};

const cleanFavicons = (gulpInst) => (done) => {
  if (fs.existsSync('./public/favicons/')) {
    return gulpInst
      .src('./public/favicons/', { read: false })
      .pipe(clean({ force: true }));
  }
  done();
};

const createFavicons = (gulpInst) => async (done) => {
  // Below is the processing.
  const response = await favicons(createFaviconsSrc, createFaviconsConfig);
  await fsAsync.mkdir(createFaviconsDest, { recursive: true });

  // Writing images.
  await Promise.all(
    response.images.map(
      async (image) =>
        await fsAsync.writeFile(path.join(createFaviconsDest, image.name), image.contents),
    ),
  );

  // Writing files.
  await Promise.all(
    response.files.map(
      async (file) =>
        await fsAsync.writeFile(path.join(createFilesDest, file.name), file.contents),
    ),
  );

  // Writing html.
  // await fsAsync.writeFile(path.join(createFilesDest, htmlBaseName), response.html.join("\n"));

  return gulpInst
    .src('./src/shared/assets/favicons/*')
    .pipe(gulp.dest(createFaviconsDest));
};

const minifyFavicons = (gulpInst) => () => {
  return gulpInst
    // .src(['./public/favicons/**/*.png', './public/favicons/**/*.svg'])
    .src(['./public/favicons/**/*.svg'])
    .pipe(
      imagemin(
        [
          // imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [
              {
                name: 'removeViewBox',
                active: true
              },
              {
                name: 'cleanupIDs',
                active: false
              },
            ],
          }),
        ],
        { verbose: true }
      )
    )
    .pipe(gulp.dest('./public/favicons/'));
};

module.exports = {
  cleanFavicons,
  createFavicons,
  minifyFavicons,
};

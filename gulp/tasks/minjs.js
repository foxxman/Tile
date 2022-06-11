export const minjs = () => {
  return app.gulp
    .src(app.path.src.minjs)
    .pipe(app.gulp.dest(app.path.build.js));
};

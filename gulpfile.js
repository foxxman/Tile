import gulp from "gulp";
// импорт путей
import { path } from "./gulp/config/path.js";
// импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";
// импорт задач
import { copy } from "./gulp/tasks/copy.js"; //copy files to build from src
import { reset } from "./gulp/tasks/reset.js"; //delete files in build
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { css } from "./gulp/tasks/css.js";
import { minjs } from "./gulp/tasks/minjs.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";

// передаем значения в глобальную переменную
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// наблюдатель за изменениями в файлах
function watcher() {
  // смотреть за path.watch. ...
  // при изменении выполнить ...
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

// parallel выполняет задачи параллельно
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, css, js, minjs, images)
);

// сценарии выполнения задач
// series выполняет задачи последовательно
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);

// вып. сценария по умолчанию
gulp.task("default", dev);

export { svgSprive, dev, build };

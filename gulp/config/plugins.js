import replace from "gulp-replace"; //замена в строке
import notify from "gulp-notify"; //сообщения
import plumber from "gulp-plumber"; //ошибки
import browsersync from "browser-sync"; //локал сервер
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};

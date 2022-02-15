// обработка ошибок
import  plumber  from "gulp-plumber"; 
import  notify  from "gulp-notify";
import browsersync from 'browser-sync'

// экспортируемый обьект
export const plugins = {
    plumber,
    notify,
    browsersync
}
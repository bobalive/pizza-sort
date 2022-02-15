
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css' 
import rename from 'gulp-rename'
const sass = gulpSass(dartSass);

import groupClassMediaQueries from 'gulp-group-css-media-queries'



export const style = ()=>{
    return app.gulp.src(app.path.src.style, {sourcemaps: true})
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title:"CSS",
        message:'Error: <%= error.message %>'
        
    })))
    
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(groupClassMediaQueries())
    .pipe(autoPrefixer({
        grid:true,
        overrideBrowserlist:['last 3 versions'],
        cascade:true
    }))
    .pipe(cleanCss())
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browsersync.stream())
}
# Gulp-Settings
Gulp 4 settings to start work.

Check NODE:

    node -v

Gulp instalation:

    npm i gulp -g

Then let's initialize project:

    npm init

Copy package.json and gulpfile.js to your derictory, and type:

    npm install

Thet's it. After installation you'll have all nessecery gulp settings. 


If you want to add new task to galpfile.js

    gulp.task('task-name', function () {
        return gulp.src('source-files') // Original file
        .pipe(plugin()) // Call Gulp plugin
        .pipe(gulp.dest('your-folder')) // Result
    })
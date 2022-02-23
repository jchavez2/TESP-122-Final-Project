var gulp = require('gulp');

/*
    -- Top Level Functions --
    gulp.task   - define tasks
    gulp.src    - point to files to use
    glup.dest   - points to folder to output
    gulp.watch  - watch files and folders for changes
*/

// Logs Messages
gulp.task('message', function(){
    return console.log('Gulp is running...')
});

// Copy All HTML files
gulp.task('copyHTML', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('default', function(){
    return console.log('Gulp is running...')
});

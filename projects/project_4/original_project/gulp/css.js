const fs = require("fs");

exports.files_update_css = files_update_css;
async function files_update_css() {
    let pathCss = './src/css_dev';


    // запись сущетвующих страниц из папки css
    let foldersCss = fs.readdirSync(`${pathCss}/`);
    foldersCss = foldersCss.filter((page) => page != 'shared_file');


    // добавление отсутствующих файлов в созданные страницы
    foldersCss.forEach((page) => {
        if (fs.readdirSync(`${pathCss}/${page}/`).length == 0) {
            fs.writeFileSync(`${pathCss}/${page}/_css.scss`, '@use "../shared_file/mixin" as *;\n@use "../shared_file/fonts" as *;\n\n.body{\n    .wrapper{\n    }\n}', { encoding: 'utf-8', flag: 'w' });
            fs.writeFileSync(`${pathCss}/${page}/_scale.scss`, '@use "../shared_file/mixin" as *;\n@use "../shared_file/fonts" as *;\n\n', { encoding: 'utf-8', flag: 'w' });
            fs.writeFileSync(`${pathCss}/${page}/${page}.scss`, '@use "../shared_file/file";\n@use "./css";\n@use "./scale";\n\n', { encoding: 'utf-8', flag: 'w' });
        }
    });

}
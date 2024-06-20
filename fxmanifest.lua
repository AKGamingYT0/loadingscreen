fx_version 'cerulean'
game 'gta5'
author 'Slaviks Store Premium UIs'

loadscreen_manual_shutdown "yes"

loadscreen 'html/index.html'

client_scripts {
  'client.lua',
  "config.lua"
}
shared_scripts {
"config.lua"
}

files {
    'html/index.html',
    'html/src/images/*.*',
    'html/src/style/main.css',
    'html/src/scripts/*.js',
    'html/src/fonts/*.*'
 }

 loadscreen_cursor 'yes'
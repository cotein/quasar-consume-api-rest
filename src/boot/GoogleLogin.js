import { boot } from 'quasar/wrappers';

import vue3GoogleLogin from 'vue3-google-login'
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot( ( { app } ) => {

    app.use(vue3GoogleLogin, {
        clientId: '589168399862-iehsgach2sm3186mtd77n5f59ceajrbk.apps.googleusercontent.com'
      })

});

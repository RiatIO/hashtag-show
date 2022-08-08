export const initFacebookSdk = () => {
  return new Promise((resolve) => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "360469462931312",
        cookie: true,
        xfbml: true,
        version: "v14.0",
      });

      window.FB.AppEvents.logPageView();
      resolve(true);
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs!.parentNode!.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
};

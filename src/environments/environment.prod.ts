





export const environment = {
  production: true,
  authentication: {
    authority: 'https://accounts.google.com',
    client_id: '929544282709-8mkof7adolh13fnualb2f4f176mjd2ot.apps.googleusercontent.com',
    client_secret: '2F88K5gbFOUhUuhSl7Z-XbD9',
    redirect_uri: 'https://angular-pwa-seed.netlify.com/callback.html',
    post_logout_redirect_uri: 'https://angular-pwa-seed.netlify.com/',
    response_type: 'code id_token token',
    scope: 'openid profile',

    silent_redirect_uri: 'https://angular-pwa-seed.netlify.com/silentrefresh.html',
    automaticSilentRenew: true,
    //silentRequestTimeout:10000,

    filterProtocolClaims: true,
    loadUserInfo: true,

    metadata: {
      issuer: 'https://accounts.google.com',
      authorization_endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      token_endpoint: 'https://www.googleapis.com/oauth2/v4/token',
      userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
      revocation_endpoint: 'https://accounts.google.com/o/oauth2/revoke',
      jwks_uri: 'https://www.googleapis.com/oauth2/v3/certs',
    }

  },
  firebase: {
    apiKey: "AIzaSyD6KmBFYg79TvPmow-gJwtnQv6M-LaTDPc",
    authDomain: "newagent-9a87c.firebaseapp.com",
    databaseURL: "https://newagent-9a87c.firebaseio.com",
    projectId: "newagent-9a87c",
    storageBucket: "newagent-9a87c.appspot.com",
    messagingSenderId: "555549514252"
  }
};


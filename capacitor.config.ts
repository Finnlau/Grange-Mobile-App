import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'GrangeMobile',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "867242111049-ed74610scen9oosohtlnk9cjmfguv7k7.apps.googleusercontent.com",
      // IOS google login ID - 867242111049-3n0ligkc1luq7251l25kabottungpk0p.apps.googleusercontent.com
      // Web google login ID - 867242111049-ed74610scen9oosohtlnk9cjmfguv7k7.apps.googleusercontent.com
      forceCodeForRefreshToken: true,
    }
  } 
 
};

export default config;

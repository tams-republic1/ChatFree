import 'dotenv/config';
export default{
  "expo": {
    "name": "ChatFree",
    "slug": "ChatFree",
    "privacy": "public",
    "discription": "Filatei lord first app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "package": "com.ChatFree.ChatFree",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff",
        
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
    apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  storageBucket: process.env.STORAGE_BUCKET,
  "eas": {
    "projectId": "cf27e3f5-1889-46e5-890d-b99632721e1f"
  },
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
    },

    
  }
}

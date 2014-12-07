esp8266_IOT_mobile
==================
__Ionic based app for control of esp8266 IoT demo__

This app needs CORS support so you will need a patched version of IoT demo - https://github.com/vladkosarev/esp8266_IOT

###Installing.

You need to install ionic -  
*npm install -g ionic*

To run it as a web app on your desktop -  
*ionic serve*

To build and run this as an app on your mobile device you will want to read ionic documentation and set up your environment.
If you already have your mobile dev environment set up properly then all you need is the following -

For Android -  
*ionic platform android*  
*ionic run*

For iOS -  
*ionic platform ios*  
*ionic run*

###Using.
By default IoT app will start as Access Point with ip of 192.168.4.1
You will want to connect your desktop or mobile device to esp8266 AP to use this app.

Once connected to ESP AP you can run the app.

__Info screen__ will call different available endpoints and dump JSON results on the screen. Helpful for debugging.

__Setup screen__ is for setting up your IoT app. You have to provide your wifi ssid/password and your Master Device Key token from http://iot.espressif.cn/

Once you successfully submit WiFi/IoT configuration, your ESP will start sending data to iot.espressif.cn and you should see data points appearing there. At this point your ESP is running as a client and will stop being an access point. You will have to re-flash to return it back to original state.

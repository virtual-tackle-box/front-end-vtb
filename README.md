# Virtual Tackle Box (VTB) - Mobile Tackle and Catch Tracking App (iOS)

## Installation
These instructions will help you set up and run the VTB app on your iOS device or simulator.

**Choice 1:** Using your iOS device to visit our deployed site in its intended environment. Download [Expo Go](https://apps.apple.com/ca/app/expo-go/id982107779) and then scan this QR code after making an account.

![Expo QR Code](https://github.com/virtual-tackle-box/front-end-vtb/assets/100454651/9a11aa5b-1cf5-40b8-aabc-4c6f66d737dc)


**Choice 2:** Install VTB on your local machine. Before you begin, ensure you have the following tools and dependencies installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) 
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) for testing
- [Xcode](https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators) if you want to run the app on an iOS [simulator](https://developer.apple.com/documentation/safari-developer-tools/adding-additional-simulators)
- Download [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779) on your phone if you want to run the app on your iOS device

1. Run the following commands in order to clone the VTB repository to your local machine and install the dependencies:

   ```bash
   git clone git@github.com:virtual-tackle-box/front-end-vtb.git
   cd front-end-vtb
   npm install
   ```
2. To run the app on an iOS device: <br/>run `npm start` and use your iOS device to scan the QR code displayed in the terminal
3. To run the app on an iOS simulator: <br/>In `Xcode`, on menu located near the top left corner of the window, click `Xcode` > `Open Developer Tool` > `Simulator`. In `Simulator`, click `File` > `Open Simulator` and choose the device you want to use <br /><br/>
4. In your terminal, run `npm start` and then press `i`, the app should now be running on the simulator you selected. When necessary, press `r` or `cmd + d` to reload the app <br /><br/>
VTB uses Cypress for testing. To run the tests, use command `npx cypress open`


## Features
- **User Sign Up and Login**: Create a user profile or sign in as a guest.
- **Map Interface**: Interact with the map component by placing pins where you've caught fish.
- **Catch Log**: View and manage your catches.
- **Tackle Box**: Store and manage your lures and baits in a virtual tackle box.
- **Media Upload**: Upload images from your device's camera or photo gallery.
- **Upcoming Features**: Stay tuned for the ability to see other users shared catches and a weekly catch report sent to your mobile device!


## Contributors
- Josh Bennett [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joshua-bennett79) [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JoshBennett793)
- Banjamin Hatch [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/banjamin-hatch-14a134122/) [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/banjaminh)

## Acknowledgements
Thank you [Wil Fady](https://www.linkedin.com/in/wilfady/), and [Daniel Gallagher](https://www.linkedin.com/in/daniel-ryan-gallagher/) for building the [Back End for VTB](https://github.com/virtual-tackle-box/back-end-vtb). 

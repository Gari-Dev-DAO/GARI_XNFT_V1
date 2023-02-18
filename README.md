# Gaming-Xnft

## Home
![Screenshot (67)](https://user-images.githubusercontent.com/118275688/219864965-af0ada92-1bde-4116-a086-bae4664cd1d5.png)

In this screen video Nfts from nft.chingari.io are shown. User Can play and watch these short videos in the form of nfts to have fun. User Can filter out the videos based on their interest and language preference. Intially there be no any filter applied.
user can click on detail button to see video-nft Onchain information.

##NFT

![Screenshot (69)](https://user-images.githubusercontent.com/118275688/219865320-a26dd532-027e-45c1-9840-ac5258037035.png)

this screen will show Onchain details about the video-nft. User can see the nft details on solana-explorer and arweave.

![Screenshot (74)](https://user-images.githubusercontent.com/118275688/219865436-059002a0-8de3-4f99-9639-96a2a048ea9b.png)

##Game
Here is a Gamezone where User can play any game based on his interest. All Games are having two option: play for free and play to Earn.
If user want to earn by playing the games than he has to bet 0.2 SOL on that particular game and their betting is transfrred to gamePDA. He can play 3 times while the game duration and get rank in the leaderboard.
In Play for free user can play games without any betting but their scores will not be in the leaderboard and they also will not get any earnings/rewards.
Each Game exists for the duration of 24 hours and after this duration top 3 winners from each game are taken out and get 40% , 30% ,20% Sol of the total amount Betted on that game, rest 10% is transffered to Game-Admin Account. Amount destribution is done with the help pf onchain program to make transparency.

![Screenshot (71)](https://user-images.githubusercontent.com/118275688/219866347-5649034c-b37d-46ca-b5d1-0b823a2a4cf5.png)

![Screenshot (81)](https://user-images.githubusercontent.com/118275688/219866387-924c8e11-ffaa-48a5-b17f-216072cd512c.png)

![Screenshot (78)](https://user-images.githubusercontent.com/118275688/219866207-92c450a3-2011-4ced-b562-e3a057e08daf.png)

![Screenshot (80)](https://user-images.githubusercontent.com/118275688/219866457-a0d49661-226e-4ab9-9fec-4e7fd1df386c.png)

![Screenshot (79)](https://user-images.githubusercontent.com/118275688/219866250-d1431847-d70a-4f41-959f-16040c102c7e.png)

![Screenshot (77)](https://user-images.githubusercontent.com/118275688/219866482-cdbc6a19-4e97-45be-ae76-8f285a789e5c.png)

![Screenshot (76)](https://user-images.githubusercontent.com/118275688/219866517-0b43ad3f-4f21-49d5-9857-1b67d79a80f1.png)

## Developing

Once you've installed Backpack, get started building your xNFT with these steps. Note that the packages here will always use the latest, which correspond to the latest tagged build of Backpack. If you have unexepected issues, make sure your package versions match the app version.

### Install

First, install dependencies.

```
yarn
```

### Run the dev server

Then, run the dev server with hot reloading

```
yarn dev
```

### Open the Simulator in Backpack

Now that you have your xNFT dev server running, open it in the Backpack simulator to see it run.

That's it!


## Build & Publish

Once you're done and ready to publish, build your xNFT:

```
yarn build
```

Test the newly created build in `dist/index.html` in the simulator:

```
yarn start
```

Once everything looks good head over to [xnft.gg]() to publish your xNFT!

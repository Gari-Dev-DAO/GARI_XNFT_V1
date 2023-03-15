# GariZone

## Home Screen
Here video Nfts from [nft.chingari.io](https://nft.chingari.io/) are shown. User can watch those videos for fun. Filter based on the language and category is provided to ensure users to watch videos/nfts based on their interest.


![Screenshot (67)](https://user-images.githubusercontent.com/118275688/225210342-e5c91998-56a1-4334-ae5a-b540b4e59da4.png)

![Screenshot (68)](https://user-images.githubusercontent.com/118275688/225210405-3d9bc52c-6b97-4193-a135-c6a79cbff32f.png)

## NFT Screen
All the onchain data of a particular vNft is shown there. User can verify that data on arweave and solana explorer.

![Screenshot (69)](https://user-images.githubusercontent.com/118275688/225210787-d3ff3ed9-666e-4f10-9120-c24afc3da940.png)

![Screenshot (74)](https://user-images.githubusercontent.com/118275688/225210879-c392bc7c-dffb-4c8f-a5fa-2bb7879329b0.png)


## Game Screen
Here Users can play the games. Each game have two options- Play For Free and Play To Earn. If User select Play For Free option than he can play the game any number of time to make fun but his score will not be reflected in leaderboard and he can not earn any reward.
On the other hand if user select Play To Earn option than he will have to bet 0.2.SOL on the onchain solana program where Game PDA will store the betting amount.
once betted he can play game atmost 3 times while the game duration (24 hours). Out of all the 3 scores best score will be taken out for the leaderboard.
For each game top 3 winner will be selected and will be rewarded 40%,30%,20% of the total amount betted respectively rest 10% will be transferred to game-admin.

![Screenshot (82)](https://user-images.githubusercontent.com/118275688/225212257-4ce377c8-de5c-4516-ba15-d0917c94c9f1.png)

![Screenshot (81)](https://user-images.githubusercontent.com/118275688/225212379-d88b1465-f0a3-4035-9b7a-9a616bea7afe.png)

![Screenshot (79)](https://user-images.githubusercontent.com/118275688/225212465-15dd4f66-2861-4a4d-97b9-697c3f2e8c2f.png)

![Screenshot (78)](https://user-images.githubusercontent.com/118275688/225212524-179660e3-3e30-4004-bac6-20a7998e4a52.png)

![Screenshot (77)](https://user-images.githubusercontent.com/118275688/225212591-ab2ffa21-ee8a-409e-8963-5bd22bb4ad02.png)




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

![](https://i.imgur.com/7i3DGM4.gif)

## Cap-Images

This is the finished project. The most important criteria is to have the elements positioned correctly upon user interaction. There is a grand total of 8 state changes, this app handles all 8 of them perfectly.

## Specs

A backend image API server was built in Airtable and I used some free car images online, after running image compression / downsampling. So the site would not have a huge payload

For frontend, everything was built in React. Styling done in Scss files.

## Architecture

The component architecture looks like this:

* App.js - stateful
* components/Mesh.js - stateful
* components/Picture.js - stateless

App.js handles the inbound AXIOS call, so it can push it towards each of the two unique grids in app (call Mesh.js). Mesh.js handles all the business logic in calculating what each coordinate position is. Picture.js is stateless, it is essentially a grid item.

Folder structure

* components - where all the logic happens
* constants - any declarations and definitions the app needs to run properly
* tests - tests folder for testing mostly Mesh.js which houses the logic
* util - for small javascript functions to write DRY code.

## Grid Definition & Algorithm

![](https://i.imgur.com/noQB74T.png)

 We define thusly, two types of grid items

- small images
- large images

How this algorithm works is the following:

There's two unique grids, each having a 2x6 size. We define one coordinate grid system as follows, at the 0th index starting out

```
[g0 g2 g4 g6 g8 g10]
[g1 g3 g5 g7 g9 g11]
```

For larger images, we define a total of 5 unique values that occupy the same gridspace

```
[b0 b2 b4 b6 g8]
```

* b0 occupies grid spaces g0-g3
* b2 occupies grid spaces g2-g5
* b4 occupies grid spaces g4-g7
* b6 occupies grid spaces g6-g9
* b8 occupies grid spaces g8-g11

This makes the math easier to calculate, because for instance b0 and g0 occupy the same topleft grid item.

You can now represent every transition change.

We use these definitions for calculating where each element image should be. Those definitions are checked through from a constants dictionary called `gridPositions` which renders the appropiate CSS properties to `Picture.js`

We define our grid using this "g0" or "b0" system from top to bottom, in a zigzag like manner, because the math comes out easier

## State Definitions

![](https://i.imgur.com/h1dKTT5.png)

Now that we've define our coordinate grid system, we define each state transition change.

Basically, we define every interaction point that can happen when a Large Image is positioned somewhere.

A user can either

* Hover an element left of the LargeImage
* Hover an element right of the LargeImage

By doing thusly, there's 4 potential state changes each, equalling to 8.

We label these transitions by "A","B","C","D", where each respective letter refers to the nearest top adjacent grid-item. We label these letters going downward, in a zigzag pattern.

Each transition has a set of rules associated with it. 

```
Scenario 2, X=-1, C gets hovered on right\
  Test Case 1
    LargePos = 2
    A -> (B2) to G3, 
    B -> G6 to G2,
    C -> G7 to B4, 
  Rules
    LargePos = 2
    +1, convert G
    +0
    +2, convert B
```

See [TEST.md](/TEST.md) for all other scenarios

This describes, what an element is hovered, exactly what grid space positions change.

Sometimes elements are moved out of order, and an array swap method is used to properly ensure things work correctly.

## State Transitions

![](https://imgur.com/t2h0JH4.png)

Transitions were defined using the FLIP method

* First - define the original grid position
* Last - define the last grid position
* invert - Didn't get around to this yet
* play - Didn't get around to this yet

How it looks like, is basically me playing with pieces of paper to figure out how each transition happens

## Future improvements

* Animations / Transitions from one grid area to another
* Full unit test coverage
* onMouseEnter & onMouseLeave events instead of onClick

## Install

Run

```
npm install
```

And add your Airtable API Key under `.env`,

You can fork over my Airtable database as an example, and grab an API-key to use on it

airtable.com/shrjpYuKHeaIHwkwM

## Additional Notes

* [TEST.md](/TEST.md) - all 8 state changes documented and unit-tests
* [API.md](/API.md) - these are the API calls I made to Airtable for the image server, as well as the response samples.
* [My 16 pages of unformatted google doc notes](https://docs.google.com/document/d/1YZM7arTxHLjlbvBXDyKGIpE4vZ2kbHU542E48O4qdec/edit) - My unformatted notes on how I went about solving everything

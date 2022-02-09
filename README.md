# boom-js-emitter


[![NPM](https://img.shields.io/npm/v/boom-js-emitter.svg)](https://www.npmjs.com/package/boom-js-emitter)
[![github](https://badgen.net/github/stars/BoomTech-LLC/Boom-JS-Emitter)](https://github.com/BoomTech-LLC/Boom-JS-Emitter)
[![github](https://badgen.net/github/issues/BoomTech-LLC/Boom-JS-Emitter)](https://github.com/BoomTech-LLC/Boom-JS-Emitter)
[![NPM](https://badgen.net/npm/dt/boom-js-emitter)](https://www.npmjs.com/package/boom-js-emitter)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://form.boomform.com/">
    <img src="https://cdn.boomte.ch/images/Emiiter.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Boom JS Emitter</h3>

  <p align="center">
    The <b>Simplest</b> and the <b>lightest</b> event management tool.
    <br />
    <a href="https://github.com/BoomTech-LLC/Boom-JS-Emitter/issues">Report Bug</a>
    ·
    <a href="https://github.com/BoomTech-LLC/Boom-JS-Emitter/issues">Request Feature</a>
  </p>
</p>




## Getting Started
Hey and welcome. You have started the development with the <b>Simplest</b> and <b>lightest</b> event management tool

You don't need to read huge docs or watch videos for hours to start using this. 

<b> Just read a few sentences below </b>

## 1. Initialization 
Create a new file and name it Emitter<br />
Import <b>Emiiter</b> in new Emiiter File and declare it.<br />
Export the Emitter<br />

<i>Emiiter.js</i>
```jsx
import Emitter from 'boom-js-emitter'

const Emitter = new Emitter()

export default Emitter
```

## 2. Create an event
Import the Emitter you have declared wherever you want.<br />
Create a useEffect and declare an event in it using the subscribe function

```jsx
import React, { useEffect } from 'react'
import Emitter from './../Emitter' // The file you have created


const SomeComponent = () => {

  useEffect(() => {
    Emitter.subscribe("MY_EVENT_NAME", (payload) => {
      console.log("Doing something with my data", payload);
    })
  }, [])
  
  return (
    <>
      The component which I'm proud for
    </>
  )
}
export default SomeComponent
```
`subscribe` creates an event with this name if the event doesn't exist and starts listening to him

## 3. Remove an event
When the component is dead just call the unsubscribe function

```jsx
import React, { useEffect } from 'react'
import Emitter from './../Emitter' // The file you have created


const SomeComponent = () => {

  useEffect(() => {
    Emitter.subscribe("MY_EVENT_NAME", (payload) => {
      console.log("Doing something with my data", payload);
    })
    
    return () => Emitter.unsubscribe("MY_EVENT_NAME")
  }, [])
  
  return (
    <>
      The component which I'm proud for
    </>
  )
}
export default SomeComponent
```

## 4. Trigger the event
I have nothing to say just look at the codes

```jsx
import React from 'react'
import Emitter from './../Emitter' // The file you have craeted


const SomeOtherComponent = () => {
  
  const handleTriggerEvent = () => Emitter.emit("MY_EVENT_NAME", "data 1", "data 2", "and so on ...")
  
  return (
    <div onClick={handleTriggerEvent}>
      Trigger the event
    </div>
  )
}
export default SomeOtherComponent
```

## Yeah as simple as this
This is not a code this is just a<br />
![](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

## Made in BoomTech 

<img src="https://cdn.boomte.ch/images/boomtechdeveloper/logo.svg" height="100">

![This is an image](https://cdn.boomte.ch/images/TikoN.png?x=2) | ![This is an image](https://cdn.boomte.ch/images/AraratM.png?x=2) | ![This is an image](https://cdn.boomte.ch/images/SahakS.png?x=2) 
-- | -- | --
Tigran Nazaryan | Ararat Matinyan | Sahak Sahakyan

--- 

[Apache 2.0 License.](https://github.com/BoomTech-LLC/BoomForm-Package/blob/main/LICENSE)

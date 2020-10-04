# Dependency Chain
## Demo: https://akeamwoods.github.io/dependency-chain/

### Task:
Create a simple client application; it should render a button on the page which when clicked sequentially loads a series of javascript files – simulating the case of a chain of dependant libraries being loaded on demand, so the order and availability is important – each loaded file should render something on the screen to indicate it has loaded and executed.

### Notes:
There are five JS files, each with a setTimeout of different lengths. The files console log when the setTimeout is complete. I thought this was the best way to show the synchronous nature of the dependency chain. 

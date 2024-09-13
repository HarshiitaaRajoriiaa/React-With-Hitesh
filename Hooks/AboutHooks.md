# HOOKS?
* Hooks were added to React in version 16.8.

* Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

* Although Hooks generally replace class components, there are no plans to remove classes from React.

* Hooks simply the code, allow to split the logic into smaller, reusable functions., make it easier to understand and maintain.

* Allow you to reuse stateful logic without changing your component hierarchy. They make it possible to extract and share logic between components.

``` java script 
// you have to import hooks from react

import  {useState} from 'react';
// you can import other hooks too
import {useState , useEffect , useMemo...} from 'react';

```
## 1.  useEffect( ( )=>{ } , [ ] )
In simple terms, useEffect is a React hook that lets you run some code after your component renders.
* Running When Something Changes: If you want to run some code every time a certain piece of data changes (like when a user types something),(or button clicked) you can add that data to the  dependency array. This tells React to run the code whenever that data changes.
``` javascript
useEffect(() => {
    console.log("The value changed!");
}, [value]);
```
* a simple weather app in React. When the app loads, you want to fetch the current weather data from an API and display it on the screen. You'd use useEffect to make sure the API call happens right after the component first renders.
* Dynamic Updates: Whenever the city state changes, useEffect runs again to fetch the updated weather data.
* a chat application where you want to open a WebSocket connection to a server when the component mounts and close it when the component unmounts to avoid leaving an open connection.
## 2. useState ( ):
*  useState is used in React to track and store values within a component. This can include user inputs, form data, counters, and any other data that needs to be remembered or updated.
* Tracking User Input: For example, keeping track of what a user types into a form field.
* Managing Component State: For example, toggling visibility or handling UI changes based on user interactions.
* Storing Data: For example, storing data fetched from an API or calculating values based on user actions
* n general, useState is a fundamental hook for managing any type of mutable state in functional React components.
## 3. useRef( )
## 4. useCallback( )
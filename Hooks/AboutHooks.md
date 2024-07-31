## HOOKS?
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
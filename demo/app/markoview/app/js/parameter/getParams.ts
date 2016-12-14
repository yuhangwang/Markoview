import {dom} from "./dom/dom.js";
import {defaults}  from "./default/defaults.js";


export function
getParams()
{   return {
        dom: dom(),
        default: defaults()
    }
}

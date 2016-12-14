import {formIds} from "./form/formIds.js";
import {buttonIds} from "./button/buttonIds.js";
import {inputIds} from "./input/inputIds.js";
import {svgIds} from "./svg/svgIds.js";


export function
elementIds()
{   return {
        form: formIds(),
        button: buttonIds(),
        input: inputIds(),
        svg: svgIds()
    }
}
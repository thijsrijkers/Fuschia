/**
* Head class of the fString
*/

export class fstring
{
    value: string;
    constructor(value: string){this.value = value;}

    /**
     * Removes the first part and the last part of the fstring value
     */
    StringRemovalLastFirst() 
    {
        var result = this.value.substring(1, this.value.length-1);
        return result;
    }

    /**
     * Adds a new part to the fstring value
     */
    AddTo(addValue : string)
    {
        var result = this.value + addValue;
        return result;
    }

    /**
     * Checks if fstring contains character
     */
    Contains(value : string)
    {
        var result = false;

        if(this.value.includes(value))
        {
            result = true;
        }

        return result;
    }

    /**
     * Removes specific part of fstring
     */
    RemovePart(remove : string)
    {
        var result = this.value.replace(remove, "");
        return result;
    }

    /**
     * Returns fstring
     */
    Value()
    {
        return this.value;
    }
}
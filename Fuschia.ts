class farray
{
    value = new Array();

    /**
     * Adds any value to the farray
     */
    Add(addValue)
    {
        this.value[this.value.length] = addValue;
    }
}

class fstring 
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
     * Removes specific part of fstring
     */
    RemovePart(remove : string)
    {
        var result = this.value.replace(remove, "");
        return result;
    }
}

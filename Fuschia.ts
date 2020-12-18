/**
* Head file of Fuschia NPM
*/
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

    /**
     * Removes any value to the farray based on the value added
     */
    RemoveValue(removeValue)
    {
        const index = this.value.indexOf(removeValue);
        if (index > -1) 
        {
            this.value.splice(index, 1);
        }
    }
    /**
     * Removes first value
     */
    RemoveFirst()
    {
        this.value.shift();
    }

    /**
     * Find value in farray and returns it
     */
    Find(value)
    {
        var result = this.value.find(value);
        return result;
    }

    /**
     * Find value in farray and returns it
     */
    Contains(value)
    {
        var result = false;

        if(this.value.includes(value))
        {
            result = true;
        }
        return result;
    }
    
    /**
     * Removes last element and returns it
     */
    Pop()
    {
        var result = this.value.pop();
        return result;
    }

    /**
     * Sorts elements inside the farray
     */
    Sort()
    {
        this.value.sort();
    }
}

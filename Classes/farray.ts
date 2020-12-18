/**
* Head class of the fArray
*/

export class farray
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

class farray
{
    value = new Array();

    Add(addValue)
    {
        this.value[this.value.length] = addValue;
    }
}

class fstring 
{
    value: string;
    constructor(value: string){this.value = value;}

    StringRemovalLastFirst() 
    {
        var result = this.value.substring(1, this.value.length-1);
        return result;
    }

    AddTo(addValue : string)
    {
        var result = this.value + addValue;
        return result;
    }

    RemovePart(remove : string)
    {
        var result = this.value.replace(remove, "");
        return result;
    }
}

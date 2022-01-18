class Element
{
    constructor(value, priority)
    {
        this.value=value;
        this.priority=priority;
    }
}
class PriorityQueue
{
constructor()
{
    this.elements=[];
}
pushOnQueque(element)
{
    let contain=false;
    for(let i in this.elements)
    {
        if(this.elements[i].priority>element.priority)
        {
            this.elements.splice(i, 0, element);
            contain=true;
            break;
        }

    }
    if(!contain)
    {
        this.elements.push(element);
    }
}
display()
{
    for(let i in this.elements)
    {
        document.write(this.elements[i].value+'<br>');
    }
}
}
let priorityQueue=new PriorityQueue();
priorityQueue.pushOnQueque(new Element("Janek", 3));
priorityQueue.pushOnQueque(new Element("Maja", 1));
priorityQueue.pushOnQueque(new Element("Kasia", 3));
priorityQueue.pushOnQueque(new Element("Ola", 1));
priorityQueue.pushOnQueque(new Element("Marcin", 2));
priorityQueue.display();
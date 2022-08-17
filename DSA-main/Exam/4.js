const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var fillGaps = function (head) {
    let current=head;
    let prev=null
    while(current.next!==null)
    {
        prev=current
        let value=current.data
        while(current.next.data-value>=1)
        {
            let node=prev.data+1;
            prev.next=node;
            node.next=current;
            current.next=next;
            value++ 
        }
    }
   return head
};

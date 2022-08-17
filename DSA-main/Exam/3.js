const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMinimum = function (head) {
    let current=head;
    let min=head.data;
    let ans=head;
    let count=-1
    if(head.data===null)
    {
        head=-1
        return head;
    }
    while(current!=null)
    {
        current=current.next
        if(min>current.data)
        {
            count++
            min=current.data
        }
    }
    while(ans.next==null)
    {
        if(count===0)
        {
            head=head.next;
            return head;
        }
        else{
            let prev=null;
            let counter=-1;
            while(counter<count-1)
            {
                counter++;
                prev=ans;
                ans=ans.next
            }
            prev.next=ans.next;
            return head;
        }
    }
 
};
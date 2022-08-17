const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// var rotateRight = function(head, k) {
//     let p=head;
//     let newNode;
//     while(p!=null)
//     {
//         if(p.data===k){break;}
//         p=p.next
//     }
//     newNode=p.next;
//     p.next=null
//     q=newNode
//     while(q.next!=null)
//     {
//         q=q.next
//     }
//     q.next=head;
//     head=newNode
//     return head
// };
var rotateRight = function(head, k) {
    
    let current=head;
    let count=1;
    while(current.next)
    {
        count++;
        current=current.next;
    }
    k=k%count;
    let index=count-k;
    current.next=head;
    while(index)
    {
        index--;
        current=current.next;
    }
    head=current.next;
    current.next=null;
    return current;
};
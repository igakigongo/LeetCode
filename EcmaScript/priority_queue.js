function PriorityQueue() {
  const array = [];

  return {
    add: (node) => {
      // array is empty - insert at start
      // or element at start has a value greater than the node value
      if (array.length === 0) {
        array.unshift(node);
        return;
      }

      if (array[0].val > node.val){
        array.unshift(node);
        return;
      }

      if (array[array.length - 1].val < node.val){
        array.push(node);
        return;
      }

      let index;
      
      // find an index for insertion
      for (let i = 0; i < array.length;) {
        if (array[i].val > node.val) {
          index = i;
          break;
        }
        i += 1;
      }
      
      if (index) {
        array.splice(index, 0, node);
      }else{
        array.push(node);
      }
    },
    dequeue: () => array.shift(),
    first: () => array.length === 0 ? undefined : array[0],
    getAll: () => [...array],
    isEmpty: () => array.length === 0,
    size: () => array.length
  }
}

module.exports = {
  PriorityQueue
};

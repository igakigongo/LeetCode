// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr) {
  let head, tail;
  while (arr.length !== 0) {
    const node = new ListNode(arr.shift());
    if (head) {
      tail.next = node;
    } else {
      head = node;
    }
    tail = node;
  }
  return head;
}

function createMapOfLinkedLists(arr){
  const lists = arr.map(createLinkedList);
  const map = new Map();

  lists.forEach((list, index) => { map.set(index, list); });  
  return map;
}

const getMapKeyWithMinValue = (linkedListsMap) => {
  let minKey = Number.MAX_SAFE_INTEGER;
  let minValue = Number.MAX_SAFE_INTEGER;
  for(let [key, value] of linkedListsMap){
    if (value){
      if (value.val < minValue){
        minKey = key;
        minValue = value.val;
      }
    }else{
      linkedListsMap.delete(key);
    }
  }
  return minKey;
};

const removeHead = node => {
  if (!node) return null;
  return node.next;
};

const mergeLists = (listOfLinkedLists) => {
  const result = [];
  const map = createMapOfLinkedLists(listOfLinkedLists);
  
  while(map.size > 0){
    const minKey = getMapKeyWithMinValue(map);
    const node = map.get(minKey);
    if (node){
      result.push(node.val);
      map.set(minKey, removeHead(node));
    }
  }
  return createLinkedList(result);
};

module.exports = {
  createLinkedList,
  createMapOfLinkedLists,
  getMapKeyWithMinValue,
  ListNode,
  mergeLists,
  removeHead,
};

const createTreeNode = (value, left = null, right = null) => ({
    value,
    left,
    right
});

const root = createTreeNode(10);
const leftChild = createTreeNode(5);
const rightChild = createTreeNode(15);

root.left = leftChild;
root.right = rightChild;

// console.log('Root:', root.value);
// console.log('Left child:', root.left.value);
// console.log('Right child:', root.right.value);

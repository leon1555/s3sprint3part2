const treeify = require('treeify')

// function to check for duplicates in the numbers that the user enters.
function checkIfArrayIsUnique(numberArray) {
    return numberArray.length === new Set(numberArray).size
  }

// function to convert inputted numbers to array, feed the array into a tree, and display the tree
const numbersToTree = async (req, res) => {
    let numbers = await req.body.numbers
    numbers = numbers.split(',')
    if(checkIfArrayIsUnique(numbers) === false) {
        res.send('Error! The tree cannot handle duplicate numbers. Please enter a new series of numbers.')
    }
    else{
        let bst = new Tree()
        for (let count = 0; count < numbers.length; count++) {
            bst.insert(numbers[count])
        }
        res.send(`<pre>${treeify.asTree(bst, true)}</pre>`)
        console.log(treeify.asTree(bst, true))
    }
};

// base tree node *to implement tree)
class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}
// binary search tree
class Tree {
    constructor(root = null) {
        this.root = root
    }
    insert(value) {
        const recurse = (node) => {
            if(node === null) {
                return new Node(value)
            }else if(value < node.value) {
                node.left = recurse(node.left)
            }else {
                node.right = recurse(node.right)
            }
            
            if(nodeBalance(node) > 1) {
                return nodeRotateLeft(node)
            }else if(nodeBalance < -1) {
                return nodeRotateRight(node)
            }else{
                return node
            }
        }
        this.root = recurse(this.root)
        }
            search(value){
            const recurse = (node) => {
                if(node === null) {
                    return false;
                }else if(value < node.value){
                    return recurse(node.left)
                }else if (value > node.value){
                    return recurse(node.right)
                }else{
                    return true
                }
            }
            return recurse(this.root)
        }
    }
    function nodeHeight(node){
        if(node === null) {
            return -1
        }else if(node.left === null && node.right === null){
            return 0
        }else{
            return 1 + Math.max(nodeHeight(node.left), nodeHeight(node.right))
        }
        
    }
    function nodeBalance(node){
        return nodeHeight(node.right) - nodeHeight(node.left)
    }
    function nodeRotateLeft(node){
        if(node === null || node.right === null){
            return node;
        }
        const newRoot = node.right
        node.right = newRoot.left
        newRoot.left = node
        return newRoot
    }
    function nodeRotateRight(node){
        if(node === null || node.left === null){
            return node
        }
        const newRoot = node.left
        node.left = newRoot.right
        newRoot.right = node
        return newRoot
};

module.exports = {
    numbersToTree,
    Node,
    Tree
}
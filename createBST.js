// constructor for creating a node
var node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

// constructor for binary search tree
function binarySearchTree() {
  this.root = null;
}

//inserting node in the tree
binarySearchTree.prototype.addNode = function(nodeValue) {
  if (!this.root) {
    this.root = new node(nodeValue);
  }

  if (nodeValue < this.root.val) {
    insertNode(this.root, nodeValue);
  }

  if (nodeValue > this.root.val) {
    insertNode(this.root, nodeValue);
  }

  function insertNode(root, nodeValue) {
    if (root.val > nodeValue) {
      if (root.left == null) {
        root.left = new node(nodeValue);
      } else {
        insertNode(root.left, nodeValue);
      }
    } else {
      if (root.right == null) {
        root.right = new node(nodeValue);
      } else {
        insertNode(root.right, nodeValue);
      }
    }
  }
};

// traversing tree root-left-right
binarySearchTree.prototype.preOrderTraversal = function(tree) {
  //print the root node first
  console.log(tree.val);

  if (tree.left !== null) {
    BST.preOrderTraversal(tree.left);
  }

  if (tree.right !== null) {
    BST.preOrderTraversal(tree.right);
  }
};

// traversing tree left-root-right
binarySearchTree.prototype.InOrderTraversal = function(tree) {
  if (tree.left !== null) {
    BST.InOrderTraversal(tree.left);
  }

  console.log(tree.val);

  if (tree.right !== null) {
    BST.InOrderTraversal(tree.right);
  }
};

// traversing tree left-right-root
binarySearchTree.prototype.postOrderTraversal = function(tree) {
  if (tree.left !== null) {
    BST.postOrderTraversal(tree.left);
  }

  if (tree.right !== null) {
    BST.postOrderTraversal(tree.right);
  }

  console.log(tree.val);
};

var BST = new binarySearchTree();
BST.addNode(4);
BST.addNode(2);
BST.addNode(7);
BST.addNode(3);
BST.addNode(1);
BST.addNode(5);
BST.addNode(8);

console.log(BST); // creating the balanced binary tree
console.log(BST.preOrderTraversal(BST.root));
console.log(BST.InOrderTraversal(BST.root));
console.log(BST.postOrderTraversal(BST.root));

// prettier-ignore

class Node {
  constructor(val, left = null, right = null){
    this.val = val,
    this.left = left,
    this.right = right
  }
}

//     4
//    / \
//   2   7
//  / \
// 1   3

const root = new Node(4)
root.left = new Node(2)
root.right = new Node(7)
root.left.left = new Node(1)
root.left.right = new Node(3)

// console.log(root)

// Time Complexity: O(n)
// Space Complexity: O(1)

var searchBST = function (root, target) {
  if (!root) return null

  if (root.val === target) return root

  if (target < root.val) return searchBST(root.left, target)
  else return searchBST(root.right, target)
}

console.log(searchBST(root, 2)) //  [2, 1, 3]

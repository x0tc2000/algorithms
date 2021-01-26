// Time complexity: O(n)
// Space complexity: O(n)

// 1
//  \
//   2
//  /
// 3

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const root = new Node(1)
root.right = new Node(2)
root.right.left = new Node(3)

// console.log(root)

var preorderTraversal = function (root, stack = [], res = []) {
  if (!root) return []

  stack.push(root)
  res.push(root.val)

  if (root.left) preorderTraversal(root.left, stack, res)
  if (root.right) preorderTraversal(root.right, stack, res)

  return res
}

console.log(preorderTraversal(root)) //  [1, 2, 3]

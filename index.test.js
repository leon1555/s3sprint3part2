const treemaker = require('./treemaker');
const Tree = treemaker.Tree;

// Tests
describe('tests numbersToTree()', () => {
    it('works with two inputted numbers', () => {
        const leaves = new Tree();
        leaves.insert(1555);
        leaves.insert(1066);
        expect(leaves.root).not.toBe(null);
        expect(leaves.root.value).toBe(1555);
        expect(leaves.root.left).not.toBe(null);
        expect(leaves.root.left.value).toBe(1066);
    })
    it('works with three inputted numbers', () => {
        const leaves = new Tree();
        leaves.insert(2035);
        leaves.insert(1685);
        leaves.insert(1215);
        expect(leaves.root).not.toBe(null);
        expect(leaves.root.value).toBe(2035);
        expect(leaves.root.left).not.toBe(null);
        expect(leaves.root.left.value).toBe(1685);
        expect(leaves.root.left.left).not.toBe(null);
        expect(leaves.root.left.left.value).toBe(1215);
    });
    it("Works with 5 inserts with different order", () => {
        const leaves = new Tree();
        leaves.insert(1589);
        leaves.insert(1602);
        leaves.insert(1521);
        leaves.insert(1559);
        leaves.insert(1637);
        expect(leaves.root).not.toBe(null);
        expect(leaves.root.value).toBe(1589);
        expect(leaves.root.left).not.toBe(null);
        expect(leaves.root.left.value).toBe(1521);
        expect(leaves.root.left.right).not.toBe(null);
        expect(leaves.root.left.right.value).toBe(1559);
        expect(leaves.root.right).not.toBe(null);
        expect(leaves.root.right.value).toBe(1602);
        expect(leaves.root.right.right).not.toBe(null);
        expect(leaves.root.right.right.value).toBe(1637);    
    });
});
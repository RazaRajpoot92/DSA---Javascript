// Trie data structure used to store and retrive keys in a dataSets of strings
// efficient for prefix based operations like search

class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

// function trieNode(){
//     return {
//         children: {},
//         isEndOfWord: false,
//     }
// }

var Trie = function () {

    this.root = new TrieNode()
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this.root

    for(let char of word){

        if(!curr.children[char]){
            curr.children[char] = new TrieNode()
        }
        
        curr = curr.children[char]
    }

    curr.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root;

    for(let char of word){
        if(!curr.children[char]) return false;

        curr = curr.children[char]
    }

    return curr.isEndOfWord
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root;
    for(let char of prefix){
        if(!curr.children[char]) return false
        curr = curr.children[char]
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
class TrieNode {
    constructor(idx) {
        this.idx = idx;
        this.children = new Array(26).fill(null);
    }
}

var stringIndices = function(wordsContainer, wordsQuery) {

    function getNode(i) {
        return new TrieNode(i);
    }

    function insertTrie(pCrawl, i) {
        let word = wordsContainer[i];
        let n = word.length;

        for (let j = n - 1; j >= 0; j--) {
            let ch_idx = word.charCodeAt(j) - 97;

            if (pCrawl.children[ch_idx] === null) {
                pCrawl.children[ch_idx] = getNode(i);
            }

            pCrawl = pCrawl.children[ch_idx];

            if (wordsContainer[pCrawl.idx].length > n) {
                pCrawl.idx = i;
            }
        }
    }

    function search(pCrawl, word) {
        let result_idx = pCrawl.idx;
        let n = word.length;

        for (let i = n - 1; i >= 0; i--) {
            let ch_idx = word.charCodeAt(i) - 97;

            pCrawl = pCrawl.children[ch_idx];

            if (pCrawl === null) {
                return result_idx;
            }

            result_idx = pCrawl.idx;
        }

        return result_idx;
    }

    // Manual cleanup for JS (helps GC)
    function deleteTrie(node) {
        if (node === null) return;

        for (let i = 0; i < 26; i++) {
            deleteTrie(node.children[i]);
            node.children[i] = null;
        }
    }

    let m = wordsContainer.length;
    let n = wordsQuery.length;

    let result = new Array(n);

    let root = getNode(0);

    for (let i = 0; i < m; i++) {

        if (
            wordsContainer[root.idx].length >
            wordsContainer[i].length
        ) {
            root.idx = i;
        }

        insertTrie(root, i);
    }

    for (let i = 0; i < n; i++) {
        result[i] = search(root, wordsQuery[i]);
    }

    // Cleanup memory
    deleteTrie(root);
    root = null;

    return result;
};
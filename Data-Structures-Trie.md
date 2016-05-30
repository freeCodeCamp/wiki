# Trie

## Introduction to Trie

The word trie is an inflix of the word "re**trie**val", because the trie can find a single word in a dictionary with only a prefix of the word.
Trie is an efficient data retrieval data structure, using trie, search complexities can be brought to an optimal limit, i.e. length of the string.
It is a multi-way tree structure useful for storing strings over an alphabet.
It has been used to store large dictionaries (do not confuse this with the dictionaries of python) of any language, say English, words in spell-checking programs.
However, the penalty on tries is the storage requirement.

## What is a trie?

A trie is a tree like data structure which stores strings, and helps you find the data associated with that string using the prefix of the string. 
For example, say you plan on building a dictionary to store strings along with their meanings. You must be wondering why can't I simply use a hash table, to get the information. Yes, you obviously can get information using a hash table, but the worst time complexity for fetching data from a hash table is `O(n)`, where `n` is the number of strings stored. 
But when you use a trie for fetching data, the time complexity to get data is `O(w)`, where `w` is the length of the string.

## How to implement a trie?

A trie typically, looks something like this,

![Trie](https://community.topcoder.com/i/education/alg_tries.png)

The above image stores, assoc, algo, all, also, tree, trie.

Let's implement a trie in python, for storing words with their meanings from english dictionary.

```python
ALPHABET_SIZE = 26 # For English

class TrieNode:
	def __init__(self):
		self.edges = [None]*(ALPHABET_SIZE) # Each index respective to each character.
		self.meaning = None # Meaning of the word.
		self.ends_here = False # Tells us if the word ends here.
```
As you can see, edges are 26 in length, each index referring to each character in the alphabet. 'A' corresponding to 0, 'B' to 1, 'C' to 2 ... 'Z' to 25th index. If the character you are looking for is pointing to `None`, that implies the word is not there in the trie.

A typical Trie should implement at least these two functions:
	- add_word(word,meaning)
	- search_word(word)
Additionally, one can also add something like
	- get_all_words()
	- get_all_words_with_prefix(prefix)

#### Adding Word to the trie

```python
	def add_word(self,word,meaning):
		if len(word)==0:
			self.ends_here = True # Because we have reached the end of the word
			self.meaning = meaning # Adding the meaning to that node
			return 
		ch = word[0] # First character
		# ASCII value of the first character (minus) the ASCII value of 'a'-> the first character of our ALPHABET gives us the index of the edge we have to look up.
		index = ord(ch) - ord('a')
		if self.edges[index] == None:
			# This implies that there's no prefix with this character yet.
			new_node = TrieNode()
			self.edges[index] = new_node

		self.edges[index].add(word[1:],meaning) #Adding the remaining word

```

#### Retrieving data

```python
	def search_word(self,word):
		if len(word)==0 and self.ends_here:
			return True
		ch = word[0]
		index = ord(ch)-ord('a')
		if self.edge[index]== None:
			return False
		else:
			return self.edge[index].search_word(word[1:])

```

The `search_word` function will tell us if the word exists in the Trie or not. Since ours is a dictionary, we need to fetch the meaning as well, now lets declare a function to do that.

```python
	def get_meaning(self,word):
		if len(word)==0 and self.ends_here:
			return self.meaning
		ch = word[0]
		index = ord(ch) - ord('a')
		if self.edges[index] == None:
			return "Word doesn't exist in the Trie"
		else:
			return self.edges[index].get_meaning(word[1:])
```

## Resources

- For further reading, you can try this [topcoder](https://www.topcoder.com/community/data-science/data-science-tutorials/using-tries/) tutorial.
- Also, a tutorial from [geeksforgeeks](http://www.geeksforgeeks.org/trie-insert-and-search/)
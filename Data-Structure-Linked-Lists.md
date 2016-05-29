# Linked list

 Just like a garland is made with flowers, a linked list is made up of nodes. We call every flower on this particular garland to be a node. And each of the node points to the next node in this list as well as it has data (here it is type of flower).

**Types:**

1. Singly Linked List

    Singly linked lists contain nodes which have a `data` field as well as a `next` field, which points to the next node in the sequence. Operations that can be performed on singly linked lists are insertion, deletion and traversal.

    ```
     Singly Link List
    --------------

        head
         |
         |
       +-----+--+      +-----+--+      +-----+------+
       |  1  |o----->  |  2  |o----->  |  3  | NULL |
       +-----+--+      +-----+--+      +-----+------+

    ```

2. Doubly Linked List

    Doubly linked lists contain node which have `data` field, `next` field and another link field `prev` pointing to the previous node in the sequence.

    ```
    Doubly Linked List
    ----------------

               head
                |
                |
       +------+-----+--+    +--+-----+--+       +-----+------+
       |      |     |o------>  |     |o------>  |     |      |
       | NULL |  1  |          |  2  |          |  3  | NULL |
       |      |     |  <------o|     |  <------o|     |      |
       +------+-----+--+    +--+-----+--+       +-----+------+

    ```

3. Circular Linked List

    Circular linked lists is a singly linked list in which last node, `next` field points to first node in the sequence.

    ```
    Circular Linked List
     ------------------

          head
           |
           |
         +-----+--+      +-----+--+      +-----+--+
  -->  |  1  |o----->  |  2  |o----->  |  3  |o----
  |    +-----+--+      +-----+--+      +-----+--+  |
  |                                                |
   ------------------------------------------------
    ```

**Basic Operations**

1. Insertion

    To add a new element to the list.

    ```
    Insertion at the beginning
    ------------------------

    * Create a new node with given data.
    * Point new node's `next` to old `head`.
    * Point `head` to this new node.

    Insertion in the middle/end
    --------------------------
    Insertion after node X.

    * Create a new node with given data.
    * Point new node's `next` to old X's `next`.
    * Point X's `next` to this new node.
    ```
    Time Complexity: O(1)

2. Deletion

    To delete existing element from the list.

    ```
    Deletion at the beginning
    -----------------------

    * Get the node pointed by `head` as Temp.
    * Point `head` to Temp's `next`.
    * Free memory used by Temp node.

    Deletion in the middle/end
    -------------------------
    Deletion after node X.

    * Get the node pointed by `X` as Temp.
    * Point X's `next` to Temp's `next`.
    * Free memory used by Temp node.
    ```
    Time Complexity: O(1)

3. Traversing

    To travel acroos the list.

    ```
    Traversal
    --------

    * Get the node pointed by `head` as Current.
    * Check if Current is not null and display it.
    * Point Current to Current's `next` and move to above step.
    ```
    Time Complexity: O(n) // Here n is size of link-list

**Implementation:**

* C implementation of singly linked list

```c

    // Header files
    #include <stdio.h>
    #include <stdlib.h>

    struct node
    {
        int data;
        struct node *next;
    };

    // Head pointer always points to first element of the linked list
    struct node *head = NULL;

    // Display the list
    void printList()
    {
        struct node *ptr = head;

        // Start from the beginning
        while(ptr != NULL)
        {
            printf("%d ",ptr->data);
            ptr = ptr->next;
        }

        printf("\n");
    }

    // Insert link at the beginning
    void insertFirst(int data)
    {
        // Create a new node
        struct node *new_node = (struct node*)malloc(sizeof(struct node));

        new_node->data = data;

        // Point it to old head
        new_node->next = head;

        // Point head to new node
        head = new_node;

        printf("Inserted successfully\n");
    }

    // Delete first item
    void deleteFirst()
    {
        // Save reference to head
        struct node *temp = head;

        // Point head to head's next
        head = head->next;

        // Free memory used by temp
        free(temp);

        printf("Deleted successfully\n");
    }

    // Find no. of nodes in link list
    void size()
    {
        int length = 0;
        struct node *current;

        for(current = head; current != NULL; current = current->next)
        {
            length++;
        }

        printf("Size of Linked List is %d\n", length);
    }

    // Find node with given data
    void find(int data){

        // Start from the head
        struct node* current = head;

        // If list is empty
        if(head == NULL)
        {
            printf("List is empty\n");
            return;
        }

        // Traverse through list
        while(current->data != data){

            // If it is last node
            if(current->next == NULL){
                printf("Not Found\n");
                return;
            }
            else{
                // Go to next node
                current = current->next;
            }
        }

        // If data found
        printf("Found\n");
    }

    // Delete a node with given data
    void delete(int data){

        // Start from the first node
        struct node* current = head;
        struct node* previous = NULL;

        // If list is empty
        if(head == NULL){
            printf("List is empty\n");
            return ;
        }

        // Navigate through list
        while(current->data != data){

            // If it is last node
            if(current->next == NULL){
                printf("Element not found\n");
                return ;
            }
            else {
                // Store reference to current node
                previous = current;
                // Move to next node
                current = current->next;
            }

        }

        // Found a match, update the node
        if(current == head) {
            // Change head to point to next node
            head = head->next;
        }
        else {
            // Skip the current node
            previous->next = current->next;
        }

        // Free space used by deleted node
        free(current);
        printf("Deleted succesfully\n");
    }

    int main() {
        insertFirst(10); // prints Inserted successfully
        insertFirst(20); // prints Inserted successfully
        insertFirst(30); // prints Inserted successfully
        insertFirst(1); // prints Inserted successfully
        insertFirst(40); // prints Inserted successfully
        insertFirst(56); // prints Inserted successfully

        // print list
        printList(); // prints 56 40 1 30 20 10

        deleteFirst(); // prints Deleted successfully

        printList(); // prints 40 1 30 20 10

        find(4); // prints Not Found
        find(1); // prints Found

        delete(4); // prints Element not found
        delete(1); // prints Deleted succesfully

        printList(); // prints 40 30 20 10

        return 0;
    }
```
:rocket: [Run Code](https://repl.it/CVwG)

* Python Implementation of Singly Linked List

```python

class Node(object):
    # Constructor
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

    # Function to get data
    def get_data(self):
        return self.data

    # Function to get next node
    def get_next(self):
        return self.next

    # Function to set next field
    def set_next(self, new_next):
        self.next = new_next


class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    # Function to insert data
    def insert(self, data):
        # new_node is a object of class Node
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node
        print("Node with data " + str(data) + " is created succesfully")

    # Function to get size
    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.get_next()
        print("Size of link list is " + str(count))

    # Function to search a data
    def search(self, data):
        current = self.head
        found = False
        while current and found is False:
            if current.get_data() == data:
                found = True
            else:
                current = current.get_next()
        if current is None:
            print("Node with data " + str(data) + " is not present")
        else:
        	print("Node with data " + str(data) + " is found")


    # Function to delete a node with data
    def delete(self, data):
        current = self.head
        previous = None
        found = False
        while current and found is False:
            if current.get_data() == data:
                found = True
            else:
                previous = current
                current = current.get_next()
        if current is None:
            print("Node with data " + str(data) + " is not in list")
        elif previous is None:
            self.head = current.get_next()
            print("Node with data " + str(data) + " is deleted successfully")
        else:
            previous.set_next(current.get_next())
            print("Node with data " + str(data) + " is deleted successfully")

SLL = LinkedList() # Creates an object of class LinkedList
SLL.size() # prints 'Size of link list is 0'
data_elements = [5, 10, 2, 6, 8, 20]
# prints the entire list
for element in data_elements:
	SLL.insert(element)
SLL.size() # prints 'Size of link list is 6'
SLL.search(4) # prints 'Node with data 4 is not present'
SLL.search(5) # prints 'Node with data 5 is found'
SLL.delete(4) # prints 'Node with data 4 is not in list'
SLL.delete(5) # prints 'Node with data 5 is deleted successfully'
```
:rocket: [Run Code](https://repl.it/CVq3/2)


**Advantages**

1. Linked lists are a dynamic data structure, which can grow and shrink, allocating and deallocating memory while the program is running.
2. Insertion and deletion of node are easily implemented in a linked list at any position.

**Disadvantages**

1. They use more memory than arrays because of the memory used by their pointers (`next` and `prev`).
2. Random access is not possible in linked list. We have to access nodes sequentially.
3. It's more complex than array. If a language supports array bound check automatically, Arrays would serve you better.

#### Note

We have to use free() in c and cpp to free the space used by deleted node, whereas, in python java free space is collected automatically.

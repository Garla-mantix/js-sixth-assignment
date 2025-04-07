let running = true

function booktracker() {
    while (running) {
        const choice = prompt("Welcome to Booktracker!\n 1) Add book. 2) List books. 3) Mark book as read. 4) Exit.\n Enter your choice: ");
    
        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                listBooks();
                break;
            case "3":
                const title = prompt("Enter the title of the book to mark as read: ")
                markAsRead(title);
                break;
            case "4":
                running = false;
                alert("Goodbye!")
                break;
            default:
                alert("Invalid choice!")
        }
    }
}

function addBook() {
    const new_book = {};
    new_book.title = prompt("Enter title of the new book: ");
    new_book.author = prompt("Enter the author's name: ");
    let isReadInput;
    do {
        isReadInput = prompt("Have you read this book yet? y/n").toLowerCase();
        if (isReadInput !== 'y' && isReadInput !== 'n')
            alert("You need to enter 'y' for yes, or 'n' for no.");
    } while (isReadInput !== 'y' && isReadInput !== 'n')
    new_book.isRead = isReadInput === 'y';
    library.push(new_book);
    console.log(library);
} 

function listBooks() {
    for ( let i = 0; i < library.length; i++)
        console.log(library[i].title)
}

function markAsRead() {
    
}




const book1 = {
    title: "Don Quijote",
    author: "Miguel Cervantes",
    isRead: true,
}
const book2 = {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    isRead: true,
}
const book3 = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    isRead: false,
}
const book4 = {
    title: "Ulysses",
    author: "James Joyce",
    isRead: false,
}

const library = [book1, book2, book3, book4]



booktracker();




// -----------------------------  Show list of unread books
// let toRead = library.filter(isRead == false);
// console.log(toRead);
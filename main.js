let running = true

function booktracker() {
    while (running) {
        const choice = prompt("Welcome to Booktracker!\n\n 1) Add book. 2) Remove book.\n 3) List all books. 4) List only unread books.\n 5) Mark book as read. 6) Exit.\n\n Enter your choice: ");

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                removeBook();
                break;
            case "3":
                listBooks();
                break;
            case "4":
                listUnread();
                break;
            case "5":
                const title = prompt("Enter the title of the book you want to mark as read: ");
                markAsRead(title);
                break;
            case "6":
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
    do {
        new_book.title = prompt("Enter title of the new book: ");
        if (new_book.title == "") {
            alert("You need to enter a title.")
        }
    } while (new_book.title == "")
    
    do {
        new_book.author = prompt("Enter the author's name: ");
        if (new_book.author == "") {
            alert("You need to enter the author's name.")
        }
    } while (new_book.author == "")
    
    let isReadInput;
    do {
        isReadInput = prompt("Have you read this book yet? y/n").toLowerCase();
        if (isReadInput !== 'y' && isReadInput !== 'n')
            alert("You need to enter 'y' for yes, or 'n' for no.");
    } while (isReadInput !== 'y' && isReadInput !== 'n')
    new_book.isRead = isReadInput === 'y';
    library.push(new_book);
    alert(`${new_book.title} has been added!`);
} 

function listBooks() {
    console.log("All books in library:")
    for (let i = 0; i < library.length; i++) {
        console.log(`${library[i].title} by ${library[i].author}`)
    }   
}

function markAsRead(title) {
    let found = false;
    for (let i = 0; i < library.length; i++) {
        if (title.toLowerCase() == library[i].title.toLocaleLowerCase()) {
            library[i].isRead = true
            alert(`${library[i].title} has been marked as read!`);
            found = true;
            break;
        }
    }
    if (found == false) {
        alert("No book with that name was found in the library.")
    }
}

function removeBook() {
    let found = false;
    let remove = prompt("Enter the title of the book you want to remove from the library: ");
    for (let i = 0; i < library.length; i++) {
        if (remove.toLowerCase() == library[i].title.toLowerCase()) {
            alert(`${library[i].title} has been removed!`);
            library.splice(i, 1);
            found = true;
            break;
        }
    }
    if (found == false) {
        alert("No book with that name was found in the library.")
    }
}

function listUnread() {
    let found = false;
    console.log("Unread books in library:")
    for (let i = 0; i < library.length; i++) {
        if (library[i].isRead == false) {
            console.log(`${library[i].title} by ${library[i].author}`)
            found = true;
        }
    } 
    if (found == false) {
        alert("You have read all books in the library!")
    }
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

// --------------------- I feel I could have made the library cleaner by doing something similar to this...
// But I was uncertain of how I would refer to the books inside the functions. library.books.title ?
// const library = {
//     books: [
//         {title: "Don Quijote", author: "Miguel Cervantes", isRead: true},
//         {title: "The Sun Also Rises", author: "Ernest Hemingway", isRead: true},
//         {title:"The Hitchhiker's Guide to the Galaxy", author:"Douglas Adams", isRead: false},
//         {title: "Ulysses", author: "James Joyce", isRead: false}
//     ]
// 
//     addBooks() {
//     ...
 //    }
// }
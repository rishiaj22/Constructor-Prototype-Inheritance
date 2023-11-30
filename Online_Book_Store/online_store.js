function Author(name,birthYear,nationality){
    this.aName = name;
    this.aBirthYear = birthYear;
    this.aNationality = nationality;
};

function Book(title,author,genre,price){
    this.bTile = title;
    this.bAuthor = author;
    this.bGenre = genre;
    this.bPrice = price;
};

// Books Infomation

Book.prototype.getBookInfo = function(){
    console.log(`Title: ${this.bTile}`);
    console.log(`Author's Name: ${this.bAuthor.aName}`);
    console.log(`Genre: ${this.bTile}`);
    console.log(`Price: ${this.bPrice}`);
    console.log("****************************");
}

const author1 = new Author("J.K. Rowling", 1965, "British");
const author2 = new Author("George Orwell", 1903, "British");

const Book1 = new Book("Harry Potter",author1,"Factasy",200);
const Book2 = new Book("1984", author2, "Dystopian", 15);


Book1.getBookInfo();
Book2.getBookInfo();
 
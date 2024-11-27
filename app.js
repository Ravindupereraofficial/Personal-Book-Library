let booksRead = 0;
let addingpage=0;


let genreData = { "Fiction": 30, "Non-Fiction": 25, "Mystry fiction": 15, "Horror Fiction": 10, "Essay": 20 };




    function addingBooks() {
        booksRead++; 
        document.getElementById('booksReadCount').innerHTML = booksRead;  
    }



    function addingpages() {
        addingpage++; 
        document.getElementById('pagesCount').innerHTML = addingpage;  
    }
    




let ctx = document.getElementById('genreChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(genreData),
            datasets: [{
                data: Object.values(genreData),
                backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
            }]
        }
    });




    




  
        function addRating() {
            let bookname = prompt("Enter the book name:");
            let rating = prompt("Enter your rating (1 to 5):");

            
            document.getElementById("finalRating").innerHTML += "Book Name = " +bookname + " - Rating: " + rating + "/5";
        }
   



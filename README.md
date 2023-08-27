## Project Overview
### Task
    The goal of this project is to create a responsive online bookstore application. 
    This application fetches data from Google Books API, displays it in an elegant UI as per the provided Figma design, provides a search feature, and gives detailed information about each book.
#### Project Brief:
    Use the Google Books API to fetch and display data about books.
    Display a list of books obtained from the API requests in a visually appealing manner using the Figma design provided.
    Implement a search feature to find and display books based on user queries.
    Show a detailed information panel for each book when clicked, following the design in Figma.
#### APIs Used:
    We'll be hitting two APIs as soon as the user lands on the page:
    https://www.googleapis.com/books/v1/volumes?q=harry+potter
    https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes
    Change the q according to your query.

#### Project Setup Set up a new React application using create-react-app.

#### Fetching and Displaying
    Initial Book Data Use useEffect to fetch data from atleast two API calls (search for harry+potter and sherlock+holmes) when the app loads.
    Use useState to store this book data.
    Map through this data to display the books on the home screen as per the Figma design.

#### Book Detail View
    When a book is clicked, expand its banner to full width and show detailed information about the book.
    The "Read Now" button should redirect the user to the previewLink from the book data.
    The "More Info" button should redirect the user to the infoLink from the book data.

#### Search Feature
    Implement a search bar in the top navbar.
    When the search button is clicked, fetch data from the Google Books API     with the user's query and display the results. Make sure that whatever the user types becomes the q in the API endpoint.

Figma - https://www.figma.com/file/HmJl1YcejIXNc6Hr1ZQpjm/BookStore-UI?type=design&node-id=0%3A1&mode=design&t=DUj3MYs02a04qpfj-1


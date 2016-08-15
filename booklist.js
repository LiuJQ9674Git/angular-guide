var app = angular.module('myApp', []);

app.service( 'Book', [ '$rootScope', function( $rootScope ) {
    var service = {
        books: [
            { title: "Magician", author: "Raymond E. Feist" },
            { title: "The Hobbit", author: "J.R.R Tolkien" }
        ],
        addBook: function ( book ) {
            service.books.push( book );
            $rootScope.$broadcast( 'books.update' );
        }
    }
    return service;
}]);

var ctrl = [ '$scope', 'Book', function( scope, Book ) {
    scope.$on( 'books.update', function( event ) {
        scope.items = Book.books;
    })
    scope.add = function () {
        Book.addBook( { title: "Star Wars", author: "George Lucas" } );
    }
    scope.items = Book.books;
}];

app.controller( "Books.List", ctrl );

app.directive( "addBookButton", [ 'Book', function( Book ) {
    return {
        restrict: "A",
        link: function( scope, element, attrs ) {
            element.bind( "click", function() {
                Book.addBook( { title: "Star Wars", author: "George Lucas" } );
            });
        }
    }
}]);




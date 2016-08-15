var app = angular.module('myApp', []);
var book = {
    id: 1,
    name: 'Harry Potter',
    author: 'J. K. Rowling',
    hasStore: true,
    stores: [
        { id: 1, name: 'Barnes & Noble', quantity: 3},
        { id: 2, name: 'Waterstones', quantity: 2},
        { id: 3, name: 'Book Depository', quantity: 5}
    ]
};

/**
app.factory('Book', ['$http', function($http) {

    function Book(bookData) {
        if (bookData) {
            this.setData(bookData);
        }
        // Some other initializations related to book
    };
    Book.prototype = {
        setData: function(bookData) {
            angular.extend(this, bookData);
        },
        load: function(id) {
            var scope = this;
            //$http.get('ourserver/books/' + bookId).success(function(bookData) {
                scope.setData(book);
            //});
        },
        delete: function() {
            //$http.delete('ourserver/books/' + bookId);
            console.log('ourserver/books/' + this.id);
        },
        update: function() {
            //$http.put('ourserver/books/' + bookId, this);
            console.log('ourserver/books/' +  this.id, this);
        },
        getImageUrl: function(width, height) {
            //return 'our/image/service/' + this.book.id + '/width/height';
        },
        isAvailable: function() {
            if (!this.book.stores || this.book.stores.length === 0) {
                return false;
            }
            return this.book.stores.some(function(store) {
                return store.quantity > 0;
            });
        }
    };
    return Book;
}]);
**/

app.factory('Book', ['$http', function($http) {
    function Book(bookData) {
        if (bookData) {
            this.setData(bookData);
        }
    };
    Book.prototype = {
        setData: function(bookData) {
            angular.extend(this, bookData);
        },
        delete: function() {
            //$http.delete('ourserver/books/' + bookId);
            console.log('ourserver/books/' + this.id);
        },
        update: function() {
            //$http.put('ourserver/books/' + bookId, this);
            console.log('ourserver/books/' +  this.id, this);
        },
        getImageUrl: function(width, height) {
            //return 'our/image/service/' + this.book.id + '/width/height';
        },
        isAvailable: function() {
            if (!this.book.stores || this.book.stores.length === 0) {
                return false;
            }
            return this.book.stores.some(function(store) {
                return store.quantity > 0;
            });
        }
    };
    return Book;
}]);

app.factory('booksManager', ['$http', '$q', 'Book', function($http, $q, Book){
    var booksManager = {
        _pool: {},
        _retrieveInstance: function(bookId, bookData){
            var instance = this._pool[bookId];
            if(instance){
                instance.setData(bookData);
            } else {
                instance = new Book(bookData);
                this._pool[bookId] = instance;
            }
            return instance;
        },
        _search: function(bookId){
            return this._pool[bookId];
        },
        _load: function(bookId, deferred){
            var scope = this;
            $http.get('api/books/' + bookId)
                .success(function(bookData){
                var book = scope._retrieveInstance(bookData.id, bookData);
                deferred.resolve(book);
            })
            .error(function(){
                deferred.reject();

            })
        },
        getBook: function(bookId){
            var deferred = $q.defer();
            var book = this._search(bookId);
            if(book){
                deferred.resove(book);
            } else {
                this._load(bookId, deferred);
            }
            return deferred.promise;
        },
        loadAllBooks: function(){
            var deferred = $q.defer();
            var scope = this;
            $http.get('api/books')
                .success(function(booksArray){
                    var books = [];
                    booksArray.forEach(function(bookData){
                        var book = scope._retrieveInstance(bookData.id, bookData);
                        books.push(book);
                    });
                    deferred.resolve(books);
                })
                .error(function(){
                    deferred.reject();

                });
            return deferred.promise;
        },
        setBook: function(bookData){
            var scope = this;
            var book = this._search(bookData.id);
            if(book){
                book.setData(bookData);
            } else {
                book = scope._retrieveInstance(bookData);
            }
            return book;
        }
        };
    return booksManager;
}]);


app.controller('EditableBookController',['$scope', 'booksManager', function($scope, booksManager){
    booksManager.getBook(1).then(function(book){
        $scope.book = book;
    }, function(reason) {
        console.log('失败: ' + reason);
        booksManager.setBook(book);
    }, function(update) {
        console.log('收到通知: ' + update);
    });
}])
 .controller('BooksListController',['$scope', 'booksManager', function($scope, booksManager){
        booksManager.loadAllBooks().then(function(books){
            $scope.book = books;
        }, function(reason) {
            console.log('失败: ' + reason);
            booksManager.setBook(book);
            $scope.book = book;
        }, function(percentComplete) {
            console.log('收到通知: ' + update);
        });
        //$scope.books = book;
    }]);

/**
app.controller('BookController', ['$scope', 'Book', function($scope, Book) {
    $scope.book = new Book();
    $scope.book.load(1);
    $scope.deleteBook = function() {
        //$http.delete('ourserver/books/' + bookId);
        console.log("bookid:",$scope.book.id);
        $scope.book.delete();
    };
    $scope.updateBook = function() {
        //$http.put('ourserver/books/' + bookId, $scope.book);
        console.log("$scope.book:",$scope.book)
        $scope.book.update();
    };

    $scope.getBookImageUrl = function(width, height) {
        //return 'our/image/service/' + bookId + '/width/height';
        return $scope.book.getBookImageUrl();
    };

}]);


app.controller('BookController', ['$scope', function($scope) {
    $scope.book = {
        id: 1,
        name: 'Harry Potter',
        author: 'J. K. Rowling',
        hasStore: true,

        stores: [
            { id: 1, name: 'Barnes & Noble', quantity: 3},
            { id: 2, name: 'Waterstones', quantity: 2},
            { id: 3, name: 'Book Depository', quantity: 5}
        ]
    };
    $scope.deleteBook = function() {
        //$http.delete('ourserver/books/' + bookId);
        console.log("bookid:",$scope.book.id);
    };
    $scope.updateBook = function() {
        //$http.put('ourserver/books/' + bookId, $scope.book);
        console.log("$scope.book:",$scope.book)
    };

    $scope.getBookImageUrl = function(width, height) {
        //return 'our/image/service/' + bookId + '/width/height';
    };

    $scope.isAvailable = function() {
        if (!$scope.book.stores || $scope.book.stores.length === 0) {
            $scope.book.hasStore=false;
            return false;
        }
        return $scope.book.stores.some(function(store) {
            $scope.book.hasStore=store.quantity > 0;
            return store.quantity > 0;
        });
    };

}]);
**/
(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // DONE: What does this method do? What is it's execute path?
  // This method loads the articles by id in reference to the id in
  // the URL. It defines a callback called articleData, then gives it
  // to findWhere along with the SQL id 'id', and the id from the URL
  // the user navigated to. After findWhere finds the corresponding
  // article, it executes the function we defined, which sets the
  // articles field of the contect object to the found article and
  // calls `next`.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // DONE: What does this method do?  What is it's execution path?
  // This method loads the articles based on the author's name. It
  // proceeds with the article findWhere as in the above example, but
  // with here we also replaces +s with spaces in the authorName URL
  // parameter.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // DONE: What does this method do?  What is it's execution path?
  // This method loads the articles from the DB which match the category name given in the user's URL. After retrieving those articles, it sets the context's articles field to those found articles before calling next.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // DONE: What does this method do?  What is it's execution path?
  // This method loads all of the articles into the artice.all array. It then sets the context's article field equal to article.all, before calling next(). It retrieves the articles by first checking if they have been loaded into article.all. If they have been, it does not fetch them from the DB before calling next. Otherwise, it loads them from the DB using Article.fetchAll.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);

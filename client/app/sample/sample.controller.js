'use strict';

angular.module('azureApp')
  .controller('SampleCtrl', function ($scope) {

    var client = new WindowsAzure.MobileServiceClient(
      "https://albass.azure-mobile.net/",
      "EZNfvLQZgxJtikwBcolHMLdccLPPYj45"
	  );


    client.getTable("Item").read()
        .done(
            function (results) {
                var r = [];
                console.log("results: " + results) ;           
                try {
                    console.log("exists");
                    $scope.$apply(function () {
                      $scope.items = results;
                    });
                }
                catch(err) {
                    console.log("doesnt exist yet", err);  
                }            
            } 
        );

	// var item = { text: "すばらしいアイテム" };
	// client.getTable("Item").insert(item);

	// var item = { text: "それから" };
	// client.getTable("Item").insert(item);

	// var item = { text: "ほんでもって" };
	// client.getTable("Item").insert(item);

	// var item = { text: "なんでやねん" };
	// client.getTable("Item").insert(item);

	// var item = { text: "ほなそしましょかー" };
	// client.getTable("Item").insert(item);

	// var item = { text: "ほんまかいな" };
	// client.getTable("Item").insert(item);

  });

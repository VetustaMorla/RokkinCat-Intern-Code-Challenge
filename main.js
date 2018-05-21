document.getElementById('issueInputForm').addEventListener('submit', saveIssue);


function fetchRecipes () {
  var recipes = JSON.parse(localStorage.getItem('recipes'));
  var recipesList = document.getElementById('recipesList');
  
  recipesList.innerHTML = '';
  
  for (var i = 0; i < recipes.length; i++) {
    var id = recipes[i].id;
	var name = recipes[i].name;
    var desc = recipes[i].description;
    var ingredients = recipes[i].ingredients;
    var steps = recipes[i].steps;
    
    recipesList.innerHTML +=  '<div class="well">'+
                              '<h6>RecipeID: ' + id + '</h6>'+
                              '<p><span class="label label-info">' + name + '</span></p>'+
                              '<h3>' + desc + '</h3>'+
                              '<p><span class="glyphicon glyphicon-time"></span> ' + ingredients + ' '+
                              '<span class="glyphicon glyphicon-user"></span> ' + steps + '</p>'+
                              '<a href="#" class="btn btn-warning" onclick="editRecipe(\''+id+'\')">Edit</a> '+
                              '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
                              '</div>';
  }
}


function editRecipe (id) {
  var issues = JSON.parse(localStorage.getItem('recipes'));
  
  for(var i = 0; i < recipes.length; i++) {
    if (recipes[i].id == id) {
		
		<form id="recipeInputForm">
		
		<div class="form-group">
            <label for="recipeNameInput">Name</label>
             <input type="text" class="form-control" id="recipeNameInput" placeholder= recipes[i].name>
          </div>		
        
		<div class="form-group">
            <label for="recipeDescInput">Description</label>
            <input type="text" class="form-control" id="recipeDescInput" placeholder=recipes[i].desc>
          </div>
		  
        <div class="form-group">
            <label for="recipeIngInput">Ingredients</label>
             <input type="text" class="form-control" id="recipeIngInput" placeholder=recipes[i].ingredients>
          </div>
		  
          <div class="form-group">
            <label for="recipeStepInput">Steps</label>
            <input type="text" class="form-control" id="recipeStepInput" placeholder=steps>
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
		
      recipes[i].name = "Closed";
	  recipes[i].desc = "Closed";
	  recipes[i].ingredients = "Closed";
	  recipes[i].steps = "Closed";
    }
  }
    
  localStorage.setItem('issues', JSON.stringify(issues));
  
  fetchIssues();
}

function saveRecipe(e) {
  var recipeId = chance.guid();
  var recipeName = document.getElementById('recipeNameInput').value;
  var recipeDesc = document.getElementById('recipeDescInput').value;
  var recipeIng = document.getElementById('recipeIngInput').value;
  var recipeSteps = document.getElementById('recipeStepInput').value;
 
  var recipe = {
    id: recipeId,
	name: recipeName,
    description: recipeDesc,
    ingredients: recipeIng,
    steps: recipeSteps,
    
  }
  
  if (localStorage.getItem('recipes') === null) {
    var recipes = [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
  } else {
    var recipes = JSON.parse(localStorage.getItem('recipes'));
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  
  document.getElementById('recipeInputForm').reset();
 
  fetchRecipes();
  
  e.preventDefault(); 
}
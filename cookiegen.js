function cookieGen() {
    
    let ingredients = []
    let additives = ["chocolate chips", "vanilla extract", "white chocolate chips", "oregano", "lemon juice", "orange juice", "walnuts", "paprika", "red chili flakes", "thyme", "cinnamon", "rice", "beef stock", "lime juice", "honey", "olive oil", "vinegar", "garlic powder", "worcestershire sauce", "canned tuna", "oats", "feta cheese", "mozzarella cheese", "yogurt", "milk", "raisins", "sunflower seeds", "soy sauce", "sesame oil", "yeast", "sprinkles", "maple syrup", "corn syrup", "canned pumpkin", "onion powder", "bowtie pasta", "ranch dressing", "jeotgal", "garum", "honey mustard", "coconut milk", "coconut shavings", "chopped pecans", "confectioners' sugar", "ground juniper berries", "sriracha"]
    const measurements = ["teaspoon", "tablespoon", "pinch"]

    function butterGen(){
        let flip = Math.random();
        if (flip < 0.5) {
            var butterType = "salted butter"
        } else {
            var butterType = "unsalted butter"
        }
        let amount = Math.floor(Math.random() * 10)
        var butterAmount = amount.toString() + " tablespoon";

        if (amount != 1){
            var butterAmount = butterAmount + "s";
        }

        ingredients.push([butterAmount, butterType]);
    }
    
    function sugarGen(){
        let flip = Math.random();
        if (flip < 0.2) {
            var sugarType = "brown sugar"
        } else {
            var sugarType = "regular sugar"
        }
        let amount = Math.floor(Math.random() * 5)
        var sugarAmount = amount.toString() + " cup";

        if (amount != 1){
            var sugarAmount = sugarAmount + "s";
        }

        ingredients.push([sugarAmount, sugarType]);
    }

    function flourGen(){
        var flourType = "flour"
        let amount = Math.floor(Math.random() * 5)
        var flourAmount = amount.toString() + " cup";

        if (amount != 1){
            var flourAmount = flourAmount + "s";
        }

        ingredients.push([flourAmount, flourType]);
    }

    function bakingSodaGen(){
        var bakingSodaType = "baking soda"
        let amount = Math.floor(Math.random() * 2.5)
        var bakingSodaAmount = amount.toString() + " teaspoon";

        if (amount != 1){
            var bakingSodaAmount = bakingSodaAmount + "s";
        }

        ingredients.push([bakingSodaAmount, bakingSodaType]);
    }

    function eggsGen(){
        var eggsType ="egg"
        var eggsAmount = Math.floor(Math.random() * 5);

        if (eggsAmount != 1){
            var eggsType = "eggs";
        }

        ingredients.push([eggsAmount, eggsType]);
    }

    function additivesGen(){
        for (i = 0; i < 5; i++) {
            const additiveIndex = Math.floor(Math.random() * additives.length)
            let additiveType = additives[additiveIndex];
            additives.splice(additiveIndex, 1);
            let measurement = measurements[Math.floor(Math.random() * measurements.length)];
            if (measurement == "pinch") {
                var amount = "1 "
            } else {
                var amount = (Math.floor(Math.random() * 8)).toString() + " ";
                    while (amount == 0) {
                        var amount = (Math.floor(Math.random() * 8)).toString() + " ";
                    }
                if (amount != 1) {
                    measurement += "s";
                }
            }

            let additiveAmount = amount + measurement
            ingredients.push([additiveAmount, additiveType]);
        }
    }

    butterGen();
    sugarGen();
    flourGen();
    bakingSodaGen();
    eggsGen();
    additivesGen();

    const table = document.getElementById("recipe")
    const tableRef = table.getElementsByTagName('tbody')[0];
    for (i = 0; i < (ingredients.length); i++) {
        const row = tableRef.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `${ingredients[i][0]}`
        cell2.innerHTML = `${ingredients[i][1]}`
    }
}


// document.getElementById("init").addEventListener("click", cookieGen);
cookieGen();

document.getElementById("init").addEventListener("click", () => location.reload());
document.getElementById("init").style.display = "inline-block";
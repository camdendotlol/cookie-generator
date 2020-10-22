function cookieGen() {
    
    let ingredients = []
    let additives = ["chocolate chips", "vanilla extract", "white chocolate chips", "oregano", "lemon juice", "orange juice", "walnuts", "paprika", "red chili flakes", "thyme", "cinnamon", "rice", "beef stock", "lime juice", "honey", "olive oil", "vinegar", "garlic powder", "worcestershire sauce", "canned tuna", "oats", "feta cheese", "mozzarella cheese", "yogurt", "milk", "raisins", "sunflower seeds", "soy sauce", "sesame oil", "yeast", "sprinkles", "maple syrup", "corn syrup", "canned pumpkin", "onion powder", "bowtie pasta", "ranch dressing", "jeotgal", "garum", "honey mustard", "coconut milk", "coconut shavings", "chopped pecans", "confectioners' sugar", "ground juniper berries", "sriracha"]
    const measurements = ['teaspoon', 'tablespoon', 'pinch']

    function butterGen(){
        const flip = Math.random();
        const butterType = (flip < 0.5 ? 'salted butter' : 'unsalted butter')

        const amount = Math.floor(Math.random() * 10)
        const butterAmount = amount != 1
            ? `${amount} tablespoons`
            : `${amount} tablespoon`

        ingredients.push([butterAmount, butterType]);
    }
    
    function sugarGen(){
        const flip = Math.random();
        const sugarType = (flip < 0.2 ? 'brown sugar' : 'regular sugar')

        let amount = Math.floor(Math.random() * 5)
        const sugarAmount = amount != 1
            ? `${amount} cups`
            : `${amount} cups`

        ingredients.push([sugarAmount, sugarType]);
    }

    function flourGen(){
        const amount = Math.floor(Math.random() * 5)
        const flourAmount = amount != 1
            ? `${amount} cups`
            : `${amount} cup`

        ingredients.push([flourAmount, 'flour']);
    }

    function bakingSodaGen(){
        const amount = Math.floor(Math.random() * 2.5)

        const bakingSodaAmount = amount != 1
            ? `${amount} teaspoons`
            : `${amount} teaspoon`

        ingredients.push([bakingSodaAmount, 'baking soda']);
    }

    function eggsGen(){
        const amount = Math.floor(Math.random() * 5);

        const eggsType = amount != 1
            ? 'eggs'
            : 'egg'

        ingredients.push([amount, eggsType]);
    }

    function additivesGen(){
        for (i = 0; i < 5; i++) {
            const additiveIndex = Math.floor(Math.random() * additives.length)

            let additiveType = additives[additiveIndex];
            additives.splice(additiveIndex, 1); //remove from the list to avoid repeats

            let measurement = measurements[Math.floor(Math.random() * measurements.length)];

            let amount
            if (measurement === 'pinch') {
                amount = '1 '
            } else {
                amount = (Math.floor(Math.random() * 8)).toString() + ' ';
                    while (amount == 0) {
                        amount = (Math.floor(Math.random() * 8)).toString() + ' ';
                    }
                if (amount != 1) {
                    measurement += 's';
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

    const table = document.getElementById('recipe')
    const tableRef = table.getElementsByTagName('tbody')[0];
    for (i = 0; i < (ingredients.length); i++) {
        const row = tableRef.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `${ingredients[i][0]}`
        cell2.innerHTML = `${ingredients[i][1]}`
    }
}


cookieGen();

document.getElementById('init').addEventListener('click', () => location.reload());
document.getElementById('init').style.display = 'inline-block';
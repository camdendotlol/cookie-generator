with open("ingredients.txt") as f:
    ingredients = f.readlines() # TODO: strip newlines as list is brought in

print("[", end='')

# there is a newline character at the end of each ingredient
# use ingredient[:-1] to avoid newline

for i in ingredients[:-1]:
    print(f"\"{i[:-1]}\", ", end='')

print(f"\"{ingredients[-1][:-1]}\"", end='')

print("]")

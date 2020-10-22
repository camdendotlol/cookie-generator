with open("ingredients.txt") as f:
    ingredients = f.readlines()

print("[", end='')

for i in ingredients[:-1]:
    print(f"\"{i[:-1]}\", ", end='')

print(f"\"{ingredients[-1][:-1]}\"", end='')

print("]")

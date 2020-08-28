with open("ingredients.txt") as f:
    ingredients = f.readlines()

print("[", end='')
for i in ingredients:
    i = i[:-1]
    print(f"\"{i}\", ", end='')
print("]", end='')


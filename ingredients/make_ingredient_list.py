with open("ingredients.txt") as f:
    ingredients = f.readlines()

print("[", end='')
for i in ingredients:
    original = i
    i = i[:-1]
    if original == ingredients[-1]:
        print(f"\"{i}\"", end='')
    else:
        print(f"\"{i}\", ", end='')
print("]", end='')


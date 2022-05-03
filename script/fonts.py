import requests

data = [i.strip() for i in open("fonts.txt").readlines()]

def findFontType():
  for i in data:
    print("parsing {}".format(i))
    for t in ['.ttf', '.otf', '.woff', '.woff2', '-regular.woff']:
      if requests.get(i+t).status_code == 200:
        data[data.index(i)] += t
        break
    else:
      print(i)

  open("fonts.txt", "w").write("\n".join(data))
    
for i in data:
  open('../public/fonts/'+i.split('/')[-1], 'wb').write(requests.get(i).content)
  print(i)
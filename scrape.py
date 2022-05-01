import re
import requests
from bs4 import BeautifulSoup
import json
import os

data = json.load(open("nice.json"))
data = [i for i in data if re.match(r'^https://github.com/.*?/.*?$', i)]


def scrape():
    for index, i in enumerate(data):
        *_, user, repo = i.split('/')
        if not os.path.isfile(f"{user}-{repo}.json"):
            response = requests.get(
                f"https://raw.githubusercontent.com/{user}/{repo}/master/README.md")
            if (response.status_code == 200):
                open(f"{user}-{repo}.md", "w").write(response.text)
                print(f"{user}/{repo}")
        print(index)


def parse():
    images = [eval(i) for i in dict.fromkeys([str(i)
                                              for i in json.load(open("images.json"))])]

    patterns = [
        r'!\[.*?\]\((.*?)\)',
        r'<img.*?src=["\'](.*?)["\']',
    ]

    for i, repo in enumerate(data):
        *_, user, repo = repo.split('/')
        if os.path.isfile(f"./data/{user}-{repo}.md") and not len([i for i in images if i['repo'] == repo and i['user'] == user]):
            text = open(f"./data/{user}-{repo}.md").read()
            img = [i for p in patterns for i in re.findall(
                p, text, re.MULTILINE) if "shields.io" not in i]
            if img:
                images.append({
                    "user": user,
                    "repo": repo,
                    "img": img
                })
    json.dump(images, open("images.json", "w"), indent=4)


def cleanIMG():
    images = [eval(i) for i in dict.fromkeys([str(i)
                                              for i in json.load(open("images.json"))])]
    for i, repo in enumerate(data):
        *_, user, repo = repo.split('/')
        if os.path.isfile(f"./data/{user}-{repo}.md") and len([i for i in images if i['repo'] == repo and i['user'] == user]):
            os.remove(f"./data/{user}-{repo}.md")


def updateTask():
    images = [eval(i) for i in dict.fromkeys([str(i)
                                              for i in json.load(open("images.json"))])]
    task = open("task.md").read().split("\n")
    for i, t in enumerate(task):
        task[i] = t.split("] ")[-1]
        *_, user, repo = task[i].split('/')
        if len([i for i in images if i['repo'] == repo and i['user'] == user]):
            task[i] = f"- [x] {user}/{repo}"
        else:
            task[i] = f"- [ ] {user}/{repo}"


image_data = json.load(open("master.json"))


def firstDownload():
    for i, image, in enumerate(image_data):
        for img in image['img']:
            if not os.path.isfile(
                    f"image/{image['user']}.{image['repo']}/"+img.split("?")[0].split("/")[-1]):
                if img.startswith("https://raw.githubusercontent.com"):
                    print(img)
                    if not os.path.isdir(f"image/{image['user']}.{image['repo']}"):
                        os.mkdir(f"image/{image['user']}.{image['repo']}")
                    open(f"image/{image['user']}.{image['repo']}/"+img.split("?")[0].split(
                        "/")[-1], "wb").write(requests.get(img).content)

        image['img'] = [i for i in image['img'] if not os.path.isfile(
            f"image/{image['user']}.{image['repo']}/"+i.split("?")[0].split("/")[-1])]


def secondDownload():
    for i, image, in enumerate(image_data):
        for img in image['img']:
            _img = re.sub(
                r'^/', '', img.replace("?raw=true", "").replace("./", ""))
            if not _img.startswith("http"):
                url = f"https://raw.githubusercontent.com/{image['user']}/{image['repo']}/master/{_img}"
                print(url)
                if not os.path.isdir(f"image/{image['user']}.{image['repo']}"):
                    os.mkdir(f"image/{image['user']}.{image['repo']}")
                open(f"image/{image['user']}.{image['repo']}/"+img.split("?")
                     [0].split("/")[-1], "wb").write(requests.get(url).content)

        image['img'] = [i for i in image['img'] if not os.path.isfile(
            f"image/{image['user']}.{image['repo']}/"+i.split("?")[0].split("/")[-1])]


def thirdDownload():
    for i, image, in enumerate(image_data):
        for img in image['img']:
            print(img)
            if not os.path.isdir(f"image/{image['user']}.{image['repo']}"):
                os.mkdir(f"image/{image['user']}.{image['repo']}")
            open(f"image/{image['user']}.{image['repo']}/"+img.split("?")
                 [0].split("/")[-1], "wb").write(requests.get(img).content)

        image['img'] = [i for i in image['img'] if not os.path.isfile(
            f"image/{image['user']}.{image['repo']}/"+i.split("?")[0].split("/")[-1])]


secondDownload()
image_data = [i for i in image_data if len(i['img'])]
json.dump(image_data, open("master.json", "w"), indent=4)

import json


def convert(src: str, dest: str):
    data = []
    with open(src, "r") as f, open(dest, "w") as f2:
        for line in f:
            data.append(json.loads(line))
        json.dump(data, f2, indent=4)


if __name__ == '__main__':
    convert("ws.log", "onConnect.json")

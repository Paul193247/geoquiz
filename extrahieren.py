import json

def convert_to_path_format(input_file, output_file):
    with open(input_file, 'r') as f:
        data = json.load(f)[0]["rootTopic"]

    path = {
        "text": "Stellt euch vor ihr seid ein großes Logistik Unternehmen in den USA, genauer gesagt in Oklahoma City: </br> Ihr habt einen Auftrag von einem großen Elektronik Hersteller. Ihr sollt 10 Standart Container, innerhalb von 5 Wochen, von Oklahoma City nach Kairo zu bringen. Der Hersteller zahlt dafür das ihr euch um die komplette Zustellung kümmert insgesamt 500.000 Euro. </br> Wählt zuerst eine der 5 Städte aus von denen ihr eure Fracht weiter nach Kairo Transportieren wollt: ",
        "options": []
    }
    for topic in data["children"]["attached"]:
        option = {
            "text": topic["title"],
            "following": convert_child_to_path_format(topic)
        }
        path["options"].append(option)

    with open(output_file, 'w') as f:
        json.dump(path, f, indent=4)

def convert_child_to_path_format(topic):
    following = {
        "text": topic["notes"]["plain"]["content"].split("text:")[1],
        "options": []
    }

    if "children" in topic:
        for child in topic["children"]["attached"]:
            if "notes" in child.keys():
                notes = child["notes"]["plain"]["content"].split("text:")
                print(notes)
                if len(notes) == 2:
                    text = notes[0]
                    popup = notes[1]
                    option = {
                        "text": child["title"],
                        "popup": popup,
                        "following": convert_child_to_path_format(child)
                    }
                    following["options"].append(option)
                else:
                    text = notes[0]
                    option = {
                        "text": child["title"],
                        "popup": text,
                    }
            else:
                option = {
                    "text": child["title"],
                    "following": convert_child_to_path_format(child)
                }
                following["options"].append(option)

    return following

convert_to_path_format("content.json", "output.json")
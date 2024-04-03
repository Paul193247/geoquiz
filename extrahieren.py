import json

def convert_to_path_format(input_file, output_file):
    with open(input_file, 'r') as f:
        data = json.load(f)[0]["rootTopic"]

    path = {
        "text": data["title"],
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
        "text": topic["title"],
        "options": []
    }

    if "children" in topic:
        for child in topic["children"]["attached"]:
            if "notes" in child.keys():
                option = {
                    "text": child["title"],
                    "popup": child["notes"]["plain"]["content"],
                    "following": convert_child_to_path_format(child)
                }
                following["options"].append(option)
            else:
                option = {
                    "text": child["title"],
                    "following": convert_child_to_path_format(child)
                }
                following["options"].append(option)


    return following

convert_to_path_format("content.json", "output.json")
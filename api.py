import json

open_file = open("api.json")

data = {
    id: len(data),
    name: "Pajama",
    image:"https://www.nameit.com/dw/image/v2/BDTC_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw1ea230c1/pim-static/NI/13230374/13230374_DarkSapphire_003.jpg?sw=900&sh=1200&strip=false",
    price:"$72"
}

json_load = json.load(open_file)

new_data = json.dump(data, json_load);

print(new_data)
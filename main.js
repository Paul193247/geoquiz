const text_div = document.getElementById("text");
const options_div = document.getElementById("options");

const path = {
  text: "Stellt euch vor ihr seid ein großes Logistik Unternehmen in den USA, genauer gesagt in Oklahoma City: </br> Ihr habt einen Auftrag von einem großen Elektronik Hersteller. Ihr sollt 10 Standart Container, innerhalb von 5 Wochen, von Oklahoma City nach Kairo zu bringen. Der Hersteller zahlt dafür das ihr euch um die komplette Zustellung kümmert insgesamt 500.000 Euro. </br> Wählt Zuerst eine der 5 Städte aus von denen ihr eure Fracht weiter nach Kairo Transportieren wollt: ",
  options: [
    {
      text: "Seattle",
      following: {
        text: "Du hast dich dafür entschieden, die Fracht zuerst nach Seattle zu transportieren. </br> Entscheide dich nun, wie du die Fracht zum (Flug)Hafen bekommen möchtest: ",
        options: [
          {
            text: "Transport per Auto",
            following: {
              text: "Du hast dich dafür entschieden, die Fracht mit dem Auto zu transportieren. </br> Entscheide dich nun, welches Unternehmen du nehmen möchtest: ",
              options: [
                {
                  text: "TransAmerica Freight",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit TransAmerica Freight zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  text: "Eagle Express",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit Eagle Express zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  text: "Big Sky Transport",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit Big Sky Transport zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  text: "LibertyHaulers",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit LibertyHaulers zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            text: "Tansport per Zug",
            following: {
              text: "Du hast dich dafür entschieden, die Fracht mit dem Zug zu transportieren. </br> Entscheide dich nun, welches Unternehmen du nehmen möchtest: ",
              options: [
                {
                  text: "Union Pacific Logistics",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit Union Pacific Logistics zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  text: "Continental Express Rail",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit Continental Express Rail zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  text: "Continental Express Rail",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit Continental Express Rail zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  text: "Iron Horse Logistics",
                  following: {
                    text: "Du hast dich dafür entschieden, die Fracht mit Iron Horse Logistics zu transportieren. </br> Entscheide dich nun, ob du die Fracht per Luft- oder Seefracht weiter transportieren möchtest.: ",
                    options: [
                      {
                        text: "Luftfracht",
                        following: {
                          text: "Du hast dich dafür entschieden, die Fracht per Luftfracht zu transportieren. </br> Entscheide dich nun, von welchem Flughafen du die Fracht weiter transportieren möchtest.: ",
                          options: [
                            {
                              text: "Flughafen Everett Paine Field",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "King County International Airport",
                              following: {
                                test: "Von diesem Flughafen gibt es leider kein Direktflug nach Kairo. Du kommst leider nciht rechtzeitig an.",
                              },
                            },
                            {
                              text: "Seattle/Tacoma International Airport",
                              following: {
                                test: "Du hast dich dazu entschieden deine Fracht weiter nach Seattle/Tacoma International Airport zu transportieren. Entscheide dich nun wie du deine Fracht weiter nach kairo transportieren willst.",
                                options: [
                                  {
                                    text: "Boeing 747 non Stop nach Kairo",
                                  },
                                  {
                                    text: "Airbus Beluga XL non Stop nach Kairo",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        text: "Seefracht",
                        following: {
                          text: "du hast dich dafür entschieden deine Fracht per Seefracht zu transportieren. Entscheide dich nun von welchem Terminal du deine Fracht weiter transportieren möchtest.",
                          options: [
                            {
                              text: "Washington United Terminals",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Terminal 5",
                              following: {
                                text: "leider liegt hier kein Schiff. Du schaffst es nciht deine Fracht rechtzeitig nach Kairo zu bringen.",
                              },
                            },
                            {
                              text: "Container Terminal 18",
                              following: {
                                text: "Das einzige Schiff, dass hier anliegt ist die Laust Maersk. ",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      text: "Los Angeles/Long Beach",
      following: {},
    },
    {
      text: "Houston",
      following: {},
    },
    {
      text: "Florida",
      following: {},
    },
    {
      text: "New York",
      following: {},
    },
  ],
};

function getOnclick(path) {
  return () => {
    setUp(path);
  };
}

function setUp(path) {
  text_div.innerHTML = path.text;
  options_div.innerHTML = "";
  if (path.options != false) {
    for (option of path.options) {
      button = document.createElement("button");
      button.id = option.text;
      button.innerHTML = option.text;
      button.onclick = getOnclick(option.following);
      options_div.append(button);
    }
  }
}

setUp(path);

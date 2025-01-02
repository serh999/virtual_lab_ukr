var solutions = {
    "FILESYSTEM": {
        "DIRECTORY": [
            {
                "name": "stockroom",
                "SOLUTION": [
                    {
                        "name": "H<sub>2</sub>O",
                        "description": "Дистильована вода",
                        "volume": 1.0,
                        "vessel": "3LCarboy",
                        "species": [{ "id": 0 }]
                    },
                    {
                        "name": "CaCO<sub>3</sub>",
                        "description": "Кальцій карбонат",
                        "vessel": "SolidBottle",
                        "species": [
                            {
                            "id": 4,
                            "amount": 0.05
                            }
                        ]
                    },
                    {
                        "name": "HCl",
                        "description": "Хлоридна кислота",
                        "volume": "0.2",
                        "species": [
                          {
                            "id": 0
                          },
                          {
                            "id": 3,
                            "amount": 0.1
                          },
                          {
                            "id": 1,
                            "amount": 0.1
                          }
                        ]
                      },
                      {
                        "name": "Ca(OH)<sub>2</sub>",
                        "description": "Кальцій гідроксид",
                        "volume": "0.2",
                        "species": [
                          {
                            "id": 0
                          },
                          {
                            "id": 8,
                            "amount": 0.05
                          }
                        ]
                      }
                ]
            }
        ]
    }
}

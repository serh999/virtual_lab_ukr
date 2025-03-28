var configuration = {
    "title": "Добування карбон(IV) оксиду",
    "solutionModellers": { "specificHeat": "solvent2" },
    "solutionViewers": [
        {
            "id": "solutionProperties", "displayDefault": true,
            "args": { "honorSignificantFigures": false }
        },
        {
            "id": "aqueous", "displayDefault": true,
            "args": { "unitsToggleEnabled": true }
        },
        {
            "id": "solid", "displayDefault": true,
            "args": { "unitsToggleEnabled": true }
        },
        { "id": "spectrometer", "displayDefault": false },
        { "id": "particleView", "displayDefault": false },
        { "id": "thermometer", "displayDefault": true },
        { "id": "pH", "displayDefault": true },
        { "id": "vesselTrackingControl", "displayDefault": false }
    ],
    "transfer": ["precise", "significantFigures", "realistic"]
}

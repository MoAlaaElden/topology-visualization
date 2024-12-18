

var topologyData = {
    "links": [
        {
            "id": 0,
            "source": 2,
            "srcDevice": "EG-CAI001-SW1-vIOS-L2",
            "srcIfName": "Gi0/2",
            "target": 1,
            "tgtDevice": "EG-CAI002-SW2-vIOS-L2",
            "tgtIfName": "Gi0/1"
        },
        {
            "id": 1,
            "source": 2,
            "srcDevice": "EG-CAI001-SW1-vIOS-L2",
            "srcIfName": "Gi0/3",
            "target": 0,
            "tgtDevice": "EG-CAI003-SW3-vIOS-L2",
            "tgtIfName": "Gi0/1"
        },
        {
            "id": 2,
            "source": 1,
            "srcDevice": "EG-CAI002-SW2-vIOS-L2",
            "srcIfName": "Gi0/3",
            "target": 0,
            "tgtDevice": "EG-CAI003-SW3-vIOS-L2",
            "tgtIfName": "Gi0/2"
        }
    ],
    "nodes": [
        {
            "icon": "switch",
            "id": 0,
            "layerSortPreference": 11,
            "model": "IOSv",
            "name": "EG-CAI003-SW3-vIOS-L2",
            "primaryIP": "192.168.100.113",
            "serial_number": "9P1417XO612"
        },
        {
            "icon": "switch",
            "id": 1,
            "layerSortPreference": 11,
            "model": "IOSv",
            "name": "EG-CAI002-SW2-vIOS-L2",
            "primaryIP": "192.168.100.112",
            "serial_number": "96K8NIZQRSK"
        },
        {
            "icon": "switch",
            "id": 2,
            "layerSortPreference": 11,
            "model": "IOSv",
            "name": "EG-CAI001-SW1-vIOS-L2",
            "primaryIP": "192.168.100.111",
            "serial_number": "9DUSSR66QOK"
        }
    ]
};
export interface Airport {
    city: string
    cityCode: string
    airport: string
    airportCode: string
    country: string
    localName: string
    europeFlag: boolean
    airlines: string[]
    distance: number
    iata: string
}

export const airports: Airport[] = [
    {
        city: "Aberdeen",
        cityCode: "ABZ",
        airport: "Aberdeen",
        airportCode: "ABZ",
        country: "Storbritannia",
        localName: "Storbritannia,Skottland,Scotland,England,Britain,UK,Europa,Europe,Dyce",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "ABZ",
    },
    {
        city: "Ålesund",
        cityCode: "AES",
        airport: "Ålesund",
        airportCode: "AES",
        country: "Norge",
        localName: "Vigra,Alesund,Aalesund, Vestlandet",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "AES",
    },
    {
        city: "Alicante",
        cityCode: "ALC",
        airport: "Alicante",
        airportCode: "ALC",
        country: "Spania",
        localName: "Spania,Spain, Syden",
        europeFlag: true,
        airlines: ["SK", "WF", "DY"],
        distance: 0,
        iata: "ALC",
    },
    {
        city: "Alta",
        cityCode: "ALF",
        airport: "Alta",
        airportCode: "ALF",
        country: "Norge",
        localName: "Finnmark",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "ALF",
    },
    {
        city: "Andenes",
        cityCode: "ANX",
        airport: "Andenes",
        airportCode: "ANX",
        country: "Norge",
        localName: "Andøya,Andoya,Nordland",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "ANX",
    },
    {
        city: "Bergen",
        cityCode: "BGO",
        airport: "Bergen",
        airportCode: "BGO",
        country: "Norge",
        localName: "Flesland, Vestlandet",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "BGO",
    },
    {
        city: "Båtsfjord",
        cityCode: "BJF",
        airport: "Båtsfjord",
        airportCode: "BJF",
        country: "Norge",
        localName: "Baatsfjord, Batsfjord, Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "BJF",
    },
    {
        city: "Billund",
        cityCode: "BLL",
        airport: "Billund",
        airportCode: "BLL",
        country: "Danmark",
        localName: "Jylland,Danmark,Denmark,Skandinavia,Scandinavia",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "BLL",
    },
    {
        city: "Brønnøysund",
        cityCode: "BNN",
        airport: "Brønnøysund",
        airportCode: "BNN",
        country: "Norge",
        localName: "Brønnøy,Broennoeysund, Bronnoysund, Helgeland, Nordland",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "BNN",
    },
    {
        city: "Bodø",
        cityCode: "BOO",
        airport: "Bodø",
        airportCode: "BOO",
        country: "Norge",
        localName: "Bodoe,Bodo, Nordland",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "BOO",
    },
    {
        city: "Berlevåg",
        cityCode: "BVG",
        airport: "Berlevåg",
        airportCode: "BVG",
        country: "Norge",
        localName: "Berlevaag, Berlevag, Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "BVG",
    },
    {
        city: "København",
        cityCode: "CPH",
        airport: "København",
        airportCode: "CPH",
        country: "Danmark",
        localName: "Kastrup,Danmark,Denmark,Skandinavia,Scandinavia",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "CPH",
    },
    {
        city: "Dublin",
        cityCode: "DUB",
        airport: "Dublin",
        airportCode: "DUB",
        country: "Irland",
        localName: "Dublin, Ireland, Irland",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "DUB",
    },
    {
        city: "Harstad/Narvik",
        cityCode: "EVE",
        airport: "Harstad-Narvik, Evenes",
        airportCode: "EVE",
        country: "Norge",
        localName: "Evenes, Troms,Narvik",
        europeFlag: true,
        airlines: ["SK", "WF", "KL"],
        distance: 0,
        iata: "EVE",
    },
    {
        city: "Færøyene",
        cityCode: "FAE",
        airport: "Færøyene",
        airportCode: "FAE",
        country: "Danmark",
        localName: "Vagar",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "FAE",
    },
    {
        city: "Florø",
        cityCode: "FRO",
        airport: "Florø",
        airportCode: "FRO",
        country: "Norge",
        localName: "Floroe,Floro, Vestlandet",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "FRO",
    },
    {
        city: "Gøteborg",
        cityCode: "GOT",
        airport: "Gøteborg",
        airportCode: "GOT",
        country: "Sverige",
        localName: "Landvetter, Sweden, Sverige, Skandinavia, Scandinavia",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "GOT",
    },
    {
        city: "Hasvik",
        cityCode: "HAA",
        airport: "Hasvik",
        airportCode: "HAA",
        country: "Norge",
        localName: "Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "HAA",
    },
    {
        city: "Hamburg",
        cityCode: "HAM",
        airport: "Hamburg",
        airportCode: "HAM",
        country: "Tyskland",
        localName: "Tyskland,Germany,Europa,Europe",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "HAM",
    },
    {
        city: "Haugesund",
        cityCode: "HAU",
        airport: "Haugesund",
        airportCode: "HAU",
        country: "Norge",
        localName: "Karmøy, Helganes, Karmoy, Vestlandet",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "HAU",
    },
    {
        city: "Hammerfest",
        cityCode: "HFT",
        airport: "Hammerfest",
        airportCode: "HFT",
        country: "Norge",
        localName: "Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "HFT",
    },
    {
        city: "Ørsta-Volda",
        cityCode: "HOV",
        airport: "Ørsta-Volda, Hovden",
        airportCode: "HOV",
        country: "Norge",
        localName: "Hovden,Oersta,Orsta,Volda, Vestlandet",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "HOV",
    },
    {
        city: "Honningsvåg",
        cityCode: "HVG",
        airport: "Honningsvåg",
        airportCode: "HVG",
        country: "Norge",
        localName: "Valan,Honningsvaag, Honningsvag, Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "HVG",
    },
    {
        city: "Kirkenes",
        cityCode: "KKN",
        airport: "Kirkenes",
        airportCode: "KKN",
        country: "Norge",
        localName: "Høybuktmoen,Hoeybuktmoen,Hoybuktmoen, Finnmark",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "KKN",
    },
    {
        city: "Kristiansand",
        cityCode: "KRS",
        airport: "Kristiansand",
        airportCode: "KRS",
        country: "Norge",
        localName: "Kjevik, Sørlandet",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "KRS",
    },
    {
        city: "Kristiansund",
        cityCode: "KSU",
        airport: "Kristiansund",
        airportCode: "KSU",
        country: "Norge",
        localName: "Kvernberget, Vestlandet",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "KSU",
    },
    {
        city: "Lakselv",
        cityCode: "LKL",
        airport: "Lakselv",
        airportCode: "LKL",
        country: "Norge",
        localName: "Banak, Finnmark",
        europeFlag: true,
        airlines: ["DX", "WF"],
        distance: 0,
        iata: "LKL",
    },
    {
        city: "Leknes",
        cityCode: "LKN",
        airport: "Leknes",
        airportCode: "LKN",
        country: "Norge",
        localName: "Lofoten, Nordland",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "LKN",
    },
    {
        city: "Mehamn",
        cityCode: "MEH",
        airport: "Mehamn",
        airportCode: "MEH",
        country: "Norge",
        localName: "Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "MEH",
    },
    {
        city: "Mosjøen",
        cityCode: "MJF",
        airport: "Mosjøen",
        airportCode: "MJF",
        country: "Norge",
        localName: "Kjærstad,Kjarstad,Kjaerstad, Helgeland, Nordland",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "MJF",
    },
    {
        city: "Molde",
        cityCode: "MOL",
        airport: "Molde",
        airportCode: "MOL",
        country: "Norge",
        localName: "Årø,Aaroe,Aro, Vestlandet",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "MOL",
    },
    {
        city: "Mo i Rana",
        cityCode: "MQN",
        airport: "Mo i Rana",
        airportCode: "MQN",
        country: "Norge",
        localName: "Røssvoll,Roessvoll,Rossvoll, Helgeland, Nordland",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "MQN",
    },
    {
        city: "München",
        cityCode: "MUC",
        airport: "München",
        airportCode: "MUC",
        country: "Tyskland",
        localName: "Munchen,Tyskland,Germany,Europa,Europe",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "MUC",
    },
    {
        city: "Nice",
        cityCode: "NCE",
        airport: "Nice",
        airportCode: "NCE",
        country: "Frankrike",
        localName: "Nice, Frankrike, France, Syden",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "NCE",
    },
    {
        city: "Oslo",
        cityCode: "OSL",
        airport: "Oslo, Gardermoen",
        airportCode: "OSL+",
        country: "Norge",
        localName: "Gardermoen",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "OSL+",
    },
    {
        city: "Namsos",
        cityCode: "OSY",
        airport: "Namsos",
        airportCode: "OSY",
        country: "Norge",
        localName: "Trøndelag,Trondelag",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "OSY",
    },
    {
        city: "Røst",
        cityCode: "RET",
        airport: "Røst",
        airportCode: "RET",
        country: "Norge",
        localName: "Lofoten,Roest, Rost, Nordland",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "RET",
    },
    {
        city: "Røros",
        cityCode: "RRS",
        airport: "Røros",
        airportCode: "RRS",
        country: "Norge",
        localName: "Roros, Roeros,Trøndelag,Trondelag",
        europeFlag: true,
        airlines: ["WF", "SK"],
        distance: 0,
        iata: "RRS",
    },
    {
        city: "Rørvik",
        cityCode: "RVK",
        airport: "Rørvik",
        airportCode: "RVK",
        country: "Norge",
        localName: "Ryum, Roervik,Rorvik ,Trøndelag, Trondelag",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "RVK",
    },
    {
        city: "Sandane",
        cityCode: "SDN",
        airport: "Sandane",
        airportCode: "SDN",
        country: "Norge",
        localName: "Anda, Vestlandet",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "SDN",
    },
    {
        city: "Stokmarknes",
        cityCode: "SKN",
        airport: "Stokmarknes",
        airportCode: "SKN",
        country: "Norge",
        localName: "Skagen,Nordland",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "SKN",
    },
    {
        city: "Sogndal",
        cityCode: "SOG",
        airport: "Sogndal",
        airportCode: "SOG",
        country: "Norge",
        localName: "Haukåsen,Haukaasen, Vestlandet",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "SOG",
    },
    {
        city: "Sørkjosen",
        cityCode: "SOJ",
        airport: "Sørkjosen",
        airportCode: "SOJ",
        country: "Norge",
        localName: "Sorkjosen,Soerkjosen, Troms",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "SOJ",
    },
    {
        city: "Sandnessjøen",
        cityCode: "SSJ",
        airport: "Sandnessjøen",
        airportCode: "SSJ",
        country: "Norge",
        localName: "Stokka,Sandnessjoen, Helgeland, Nordland",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "SSJ",
    },
    {
        city: "London",
        cityCode: "LON",
        airport: "London, Stansted",
        airportCode: "STN",
        country: "Storbritannia",
        localName: "Stansted,Storbritannia,England,Britain,UK,Europa,Europe",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "STN",
    },
    {
        city: "Stavanger",
        cityCode: "SVG",
        airport: "Stavanger",
        airportCode: "SVG",
        country: "Norge",
        localName: "Sola, Vestlandet",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "SVG",
    },
    {
        city: "Svolvær",
        cityCode: "SVJ",
        airport: "Svolvær",
        airportCode: "SVJ",
        country: "Norge",
        localName: "Helle,Svolvær, Lofoten,Svolvaer,Svolvar",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "SVJ",
    },
    {
        city: "Tromsø",
        cityCode: "TOS",
        airport: "Tromsø",
        airportCode: "TOS",
        country: "Norge",
        localName: "Langnes,Tromsoe, Tromso, Troms",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "TOS",
    },
    {
        city: "Trondheim",
        cityCode: "TRD",
        airport: "Trondheim",
        airportCode: "TRD",
        country: "Norge",
        localName: "Værnes,Vaernes, Trøndelag,Trondelag",
        europeFlag: true,
        airlines: ["SK", "WF", "KL", "AF"],
        distance: 0,
        iata: "TRD",
    },
    {
        city: "Sandefjord",
        cityCode: "OSL",
        airport: "Sandefjord, Torp",
        airportCode: "TRF",
        country: "Norge",
        localName: "Torp,Oslo",
        europeFlag: true,
        airlines: ["WF", "KL", "AF"],
        distance: 0,
        iata: "TRF",
    },
    {
        city: "Vardø",
        cityCode: "VAW",
        airport: "Vardø",
        airportCode: "VAW",
        country: "Norge",
        localName: "Vardoe, Vardo, Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "VAW",
    },
    {
        city: "Vadsø",
        cityCode: "VDS",
        airport: "Vadsø",
        airportCode: "VDS",
        country: "Norge",
        localName: "Vadsoe, Vadsoe, Finnmark",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "VDS",
    },
    {
        city: "Førde",
        cityCode: "FDE",
        airport: "Førde",
        airportCode: "FDE",
        country: "Norge",
        localName: "Bringeland,Foerde,Forde, Vestlandet",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "FDE",
    },
    {
        city: "Liverpool",
        cityCode: "LPL",
        airport: "Liverpool",
        airportCode: "LPL",
        country: "Storbritannia",
        localName: "Storbritannia,England,Britain,UK,Europa,Europe,John Lennon",
        europeFlag: true,
        airlines: ["WF"],
        distance: 0,
        iata: "LPL",
    },
    {
        city: "Oslo",
        cityCode: "OSL",
        airport: "Oslo, Alle flyplasser",
        airportCode: "OSL",
        country: "Norge",
        localName: "Oslo, All Airports",
        europeFlag: true,
        airlines: ["SK", "WF"],
        distance: 0,
        iata: "OSL",
    },
    {
        city: "Firenze",
        cityCode: "FLR",
        airport: "Firenze",
        airportCode: "FLR",
        country: "Italia",
        localName: "Florence,Firenze,Peretola,Italia,Italy, Syden",
        europeFlag: true,
        airlines: ["KL", "AF", "SK", "WF"],
        distance: 0,
        iata: "FLR",
    },
]

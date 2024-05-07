const express = require("express");
const app = express();
const fs = require("fs");

app.use((req, res, next) => {
  console.log(`Recebida solicitação: ${req.method} ${req.url}`);
  next();
});

const port = process.env.PORT || 3000;


let carrosData = [
    {
        "marca": "abarth",
        "modelo": "pulse",
        "anofabricacao": "2022",
        "anotermino": "presente"
    },
    {
        "marca": "adamo",
        "modelo": "ac2000",
        "anofabricacao": "1988",
        "anotermino": "1990"
    },
    {
        "marca": "adamo",
        "modelo": "crx",
        "anofabricacao": "1981",
        "anotermino": "1990"
    },
    {
        "marca": "adamo",
        "modelo": "gt",
        "anofabricacao": "1970",
        "anotermino": "1990"
    },
    {
        "marca": "adamo",
        "modelo": "gt-2",
        "anofabricacao": "1974",
        "anotermino": "1990"
    },
    {
        "marca": "adamo",
        "modelo": "gtl",
        "anofabricacao": "1978",
        "anotermino": "1990"
    },
    {
        "marca": "adamo",
        "modelo": "gtm",
        "anofabricacao": "1978",
        "anotermino": "1990"
    },
    {
        "marca": "adamo",
        "modelo": "gtm c2",
        "anofabricacao": "1981",
        "anotermino": "1990"
    },
    {
        "marca": "agrale",
        "modelo": "marruá",
        "anofabricacao": "2004",
        "anotermino": "presente"
    },
    {
        "marca": "aldee",
        "modelo": "gt 1.8 street",
        "anofabricacao": "1987",
        "anotermino": "1988"
    },
    {
        "marca": "aldee",
        "modelo": "spyder",
        "anofabricacao": "1996",
        "anotermino": "presente"
    },
    {
        "marca": "aldee",
        "modelo": "gt 2.0 street",
        "anofabricacao": "1988",
        "anotermino": "1990"
    },
    {
        "marca": "aldee",
        "modelo": "street/racing",
        "anofabricacao": "1990",
        "anotermino": "1990"
    },
    {
        "marca": "aldee",
        "modelo": "racing coupé",
        "anofabricacao": "1990",
        "anotermino": "1993"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2000",
        "anofabricacao": "1960",
        "anotermino": "1968"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300",
        "anofabricacao": "1974",
        "anotermino": "1976"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 ex",
        "anofabricacao": "1974",
        "anotermino": "1976"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 b",
        "anofabricacao": "1976",
        "anotermino": "1980"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 ti",
        "anofabricacao": "1976",
        "anotermino": "1980"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 rio",
        "anofabricacao": "1974",
        "anotermino": "1978"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 sl",
        "anofabricacao": "1980",
        "anotermino": "1984"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 ti 4",
        "anofabricacao": "1980",
        "anotermino": "1986"
    },
    {
        "marca": "alfa romeo",
        "modelo": "2300 álcool ti",
        "anofabricacao": "1981",
        "anotermino": "1986"
    },
    {
        "marca": "alfa romeo",
        "modelo": "145",
        "anofabricacao": "1994",
        "anotermino": "2001"
    },
    {
        "marca": "alfa romeo",
        "modelo": "155",
        "anofabricacao": "1992",
        "anotermino": "1998"
    },
    {
        "marca": "alfa romeo",
        "modelo": "164",
        "anofabricacao": "1987",
        "anotermino": "1997"
    },
    {
        "marca": "alfa romeo",
        "modelo": "156",
        "anofabricacao": "1997",
        "anotermino": "2007"
    },
    {
        "marca": "alfa romeo",
        "modelo": "147",
        "anofabricacao": "2000",
        "anotermino": "2010"
    },
    {
        "marca": "alfa romeo",
        "modelo": "166",
        "anofabricacao": "1998",
        "anotermino": "2007"
    },
    {
        "marca": "alfa romeo",
        "modelo": "gtv",
        "anofabricacao": "1995",
        "anotermino": "2006"
    },
    {
        "marca": "alfa romeo",
        "modelo": "gtv spider",
        "anofabricacao": "1995",
        "anotermino": "2006"
    },
    {
        "marca": "americar",
        "modelo": "xk coupe",
        "anofabricacao": "2009",
        "anotermino": "presente"
    },
    {
        "marca": "americar",
        "modelo": "xk120 classic",
        "anofabricacao": "2003",
        "anotermino": "presente"
    },
    {
        "marca": "americar",
        "modelo": "cobra",
        "anofabricacao": "2000",
        "anotermino": "presente"
    },
    {
        "marca": "americar",
        "modelo": "gta 40",
        "anofabricacao": "2007",
        "anotermino": "presente"
    },
    {
        "marca": "americar",
        "modelo": "hot rod willys",
        "anofabricacao": "1941",
        "anotermino": "1996"
    },
    {
        "marca": "americar",
        "modelo": "thunder classic",
        "anofabricacao": "2002",
        "anotermino": "2016"
    },
    {
        "marca": "audi",
        "modelo": "a3  (8l)",
        "anofabricacao": "1999",
        "anotermino": "2006"
    },
    {
        "marca": "audi",
        "modelo": "a3 sedan",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "q3 (primeira geração)",
        "anofabricacao": "2011",
        "anotermino": "2018"
    },
    {
        "marca": "audi",
        "modelo": "tt (fv/8s)",
        "anofabricacao": "2014",
        "anotermino": "2023"
    },
    {
        "marca": "audi",
        "modelo": "a1 (primeira geração)",
        "anofabricacao": "2010",
        "anotermino": "2018"
    },
    {
        "marca": "audi",
        "modelo": "r8 (primeira geração)",
        "anofabricacao": "2006",
        "anotermino": "2012"
    },
    {
        "marca": "audi",
        "modelo": "a4 (b5)",
        "anofabricacao": "1993",
        "anotermino": "2000"
    },
    {
        "marca": "audi",
        "modelo": "a5 (primeira geração)",
        "anofabricacao": "2007",
        "anotermino": "2019"
    },
    {
        "marca": "audi",
        "modelo": "a6  (primeira geração)",
        "anofabricacao": "1994",
        "anotermino": "1997"
    },
    {
        "marca": "audi",
        "modelo": "a7 (primeira geração)",
        "anofabricacao": "2010",
        "anotermino": "2019"
    },
    {
        "marca": "audi",
        "modelo": "q5",
        "anofabricacao": "2008",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "q7 (primeira geração)",
        "anofabricacao": "2005",
        "anotermino": "2015"
    },
    {
        "marca": "audi",
        "modelo": "q7 v12 tdi",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "s3 (tipo 8p)",
        "anofabricacao": "2003",
        "anotermino": "2012"
    },
    {
        "marca": "audi",
        "modelo": "s3 (terceira geração)",
        "anofabricacao": "2012",
        "anotermino": "2020"
    },
    {
        "marca": "audi",
        "modelo": "tt  (8n)",
        "anofabricacao": "1998",
        "anotermino": "2006"
    },
    {
        "marca": "audi",
        "modelo": "tt (8j)",
        "anofabricacao": "2006",
        "anotermino": "2014"
    },
    {
        "marca": "audi",
        "modelo": "a4 (b6)",
        "anofabricacao": "2001",
        "anotermino": "2006"
    },
    {
        "marca": "audi",
        "modelo": "a4 (b7)",
        "anofabricacao": "2004",
        "anotermino": "2008"
    },
    {
        "marca": "audi",
        "modelo": "a4 (b8)",
        "anofabricacao": "2008",
        "anotermino": "2016"
    },
    {
        "marca": "audi",
        "modelo": "a4 (b9)",
        "anofabricacao": "2016",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "q3 (segunda geração)",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "a1 (segunda geração)",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "r8 (segunda geração)",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "a5 (segunda geração)",
        "anofabricacao": "2016",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "a6 (segunda geração)",
        "anofabricacao": "1997",
        "anotermino": "2004"
    },
    {
        "marca": "audi",
        "modelo": "a6 (terceira geração)",
        "anofabricacao": "2004",
        "anotermino": "2011"
    },
    {
        "marca": "audi",
        "modelo": "a6 (quarta geração)",
        "anofabricacao": "2011",
        "anotermino": "2018"
    },
    {
        "marca": "audi",
        "modelo": "a6 (quinta geração)",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "a7 (segunda geração)",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "audi",
        "modelo": "q7 (segunda geração)",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "aurora",
        "modelo": "122 c",
        "anofabricacao": "1989",
        "anotermino": "1993"
    },
    {
        "marca": "avallone",
        "modelo": "a 11",
        "anofabricacao": "1971",
        "anotermino": "1988"
    },
    {
        "marca": "avallone",
        "modelo": "tf 6r",
        "anofabricacao": "1976",
        "anotermino": "1988"
    },
    {
        "marca": "avallone",
        "modelo": "fusca cabriolet",
        "anofabricacao": "1982",
        "anotermino": "1988"
    },
    {
        "marca": "avallone",
        "modelo": "limosine monza",
        "anofabricacao": "1984",
        "anotermino": "1988"
    },
    {
        "marca": "avallone",
        "modelo": "a 52",
        "anofabricacao": "1985",
        "anotermino": "1988"
    },
    {
        "marca": "avallone",
        "modelo": "avallone presidencial",
        "anofabricacao": "1988",
        "anotermino": "1988"
    },
    {
        "marca": "bianco",
        "modelo": "bianco s",
        "anofabricacao": "1976",
        "anotermino": "1979"
    },
    {
        "marca": "bianco",
        "modelo": "bianco série 2",
        "anofabricacao": "1978",
        "anotermino": "1979"
    },
    {
        "marca": "bianco",
        "modelo": "bianco tarpan ",
        "anofabricacao": "1978",
        "anotermino": "1979"
    },
    {
        "marca": "bianco",
        "modelo": "bianco tarpan ts",
        "anofabricacao": "1981",
        "anotermino": "1983"
    },
    {
        "marca": "bmw",
        "modelo": "série 1 e8x",
        "anofabricacao": "2004",
        "anotermino": "2013"
    },
    {
        "marca": "bmw",
        "modelo": "série 1 f20",
        "anofabricacao": "2011",
        "anotermino": "2019"
    },
    {
        "marca": "bmw",
        "modelo": "série 1 f40",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 1 f52",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 3 e21",
        "anofabricacao": "1975",
        "anotermino": "1983"
    },
    {
        "marca": "bmw",
        "modelo": "série 3 e30",
        "anofabricacao": "1982",
        "anotermino": "1994"
    },
    {
        "marca": "bmw",
        "modelo": "série 3 e36",
        "anofabricacao": "1990",
        "anotermino": "2000"
    },
    {
        "marca": "bmw",
        "modelo": "série 3 e46",
        "anofabricacao": "1998",
        "anotermino": "2007"
    },
    {
        "marca": "bmw",
        "modelo": "série 3 e9x",
        "anofabricacao": "2005",
        "anotermino": "2013"
    },
    {
        "marca": "bmw",
        "modelo": "série 3 f3x",
        "anofabricacao": "2011",
        "anotermino": "2019"
    },
    {
        "marca": "bmw",
        "modelo": "x1",
        "anofabricacao": "2014",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x3",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x4",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "z3",
        "anofabricacao": "1995",
        "anotermino": "2002"
    },
    {
        "marca": "bmw",
        "modelo": "z4 e85",
        "anofabricacao": "2002",
        "anotermino": "2008"
    },
    {
        "marca": "bmw",
        "modelo": "z4 e86",
        "anofabricacao": "2002",
        "anotermino": "2008"
    },
    {
        "marca": "bmw",
        "modelo": "z4 e89",
        "anofabricacao": "2009",
        "anotermino": "2016"
    },
    {
        "marca": "bmw",
        "modelo": "z4 g29",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 2 f22",
        "anofabricacao": "2014",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 2 f23",
        "anofabricacao": "2014",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 2 g42",
        "anofabricacao": "2021",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 4 f32",
        "anofabricacao": "2014",
        "anotermino": "2020"
    },
    {
        "marca": "bmw",
        "modelo": "série 4 f33",
        "anofabricacao": "2014",
        "anotermino": "2020"
    },
    {
        "marca": "bmw",
        "modelo": "série 4 f36",
        "anofabricacao": "2014",
        "anotermino": "2020"
    },
    {
        "marca": "bmw",
        "modelo": "série 4  g22",
        "anofabricacao": "2020",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 4 g23",
        "anofabricacao": "2020",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 4 g26",
        "anofabricacao": "2020",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 e12",
        "anofabricacao": "1972",
        "anotermino": "1981"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 e28",
        "anofabricacao": "1981",
        "anotermino": "1988"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 e34",
        "anofabricacao": "1988",
        "anotermino": "1996"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 e39",
        "anofabricacao": "1995",
        "anotermino": "2004"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 e60",
        "anofabricacao": "2003",
        "anotermino": "2010"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 e61",
        "anofabricacao": "2003",
        "anotermino": "2010"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 f10",
        "anofabricacao": "2010",
        "anotermino": "2017"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 f11",
        "anofabricacao": "2010",
        "anotermino": "2017"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 f07",
        "anofabricacao": "2010",
        "anotermino": "2017"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 f18",
        "anofabricacao": "2010",
        "anotermino": "2017"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 g30",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 g31",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 g38",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 g60",
        "anofabricacao": "2024",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 g61",
        "anofabricacao": "2024",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 5 g68",
        "anofabricacao": "2024",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e23",
        "anofabricacao": "1977",
        "anotermino": "1987"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e32",
        "anofabricacao": "1986",
        "anotermino": "1994"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e38",
        "anofabricacao": "1994",
        "anotermino": "2001"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e65",
        "anofabricacao": "2001",
        "anotermino": "2008"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e66",
        "anofabricacao": "2001",
        "anotermino": "2008"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e67",
        "anofabricacao": "2001",
        "anotermino": "2008"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 e68",
        "anofabricacao": "2001",
        "anotermino": "2008"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 f01",
        "anofabricacao": "2008",
        "anotermino": "2015"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 f02",
        "anofabricacao": "2008",
        "anotermino": "2015"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 f03",
        "anofabricacao": "2008",
        "anotermino": "2015"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 f04",
        "anofabricacao": "2008",
        "anotermino": "2015"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 g11",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 g12",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 7 g70",
        "anofabricacao": "2022",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 8 e31",
        "anofabricacao": "1990",
        "anotermino": "1999"
    },
    {
        "marca": "bmw",
        "modelo": "série 8 g14",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 8 g15",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "série 8 g16",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x2",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x5 e53",
        "anofabricacao": "1999",
        "anotermino": "2006"
    },
    {
        "marca": "bmw",
        "modelo": "x5 e70",
        "anofabricacao": "2006",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x5 f15",
        "anofabricacao": "2013",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x5 f85",
        "anofabricacao": "2013",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x5 g05",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x5 g18",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x6 e71",
        "anofabricacao": "2008",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x6 e72",
        "anofabricacao": "2008",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x6 f16",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x6 g06",
        "anofabricacao": "2020",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "m2 competition",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "m3 sedan",
        "anofabricacao": "2016",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "m4 coupé",
        "anofabricacao": "2013",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "m5 e28",
        "anofabricacao": "1985",
        "anotermino": "1988"
    },
    {
        "marca": "bmw",
        "modelo": "m5 e34",
        "anofabricacao": "1989",
        "anotermino": "1995"
    },
    {
        "marca": "bmw",
        "modelo": "m5 e39",
        "anofabricacao": "1998",
        "anotermino": "2003"
    },
    {
        "marca": "bmw",
        "modelo": "m5 e60",
        "anofabricacao": "2005",
        "anotermino": "2010"
    },
    {
        "marca": "bmw",
        "modelo": "m5 f10",
        "anofabricacao": "2011",
        "anotermino": "2017"
    },
    {
        "marca": "bmw",
        "modelo": "m5 f90",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "x6 m",
        "anofabricacao": "2010",
        "anotermino": "presente"
    },
    {
        "marca": "bmw",
        "modelo": "i3",
        "anofabricacao": "2013",
        "anotermino": "presente"
    },
    {
        "marca": "bola",
        "modelo": "fera xk",
        "anofabricacao": "1981",
        "anotermino": "1983"
    },
    {
        "marca": "brasinca",
        "modelo": "4200 gt",
        "anofabricacao": "1965",
        "anotermino": "1966"
    },
    {
        "marca": "brasinca",
        "modelo": "4200 gts",
        "anofabricacao": "1966",
        "anotermino": "1967"
    },
    {
        "marca": "cbp",
        "modelo": "super 90",
        "anofabricacao": "1984",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "spyder 550",
        "anofabricacao": "1985",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "911 carrera",
        "anofabricacao": "1986",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "911 carrera 2/4",
        "anofabricacao": "1986",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "911 carrera conversível",
        "anofabricacao": "1986",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "mg mga",
        "anofabricacao": "1987",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "ej 1",
        "anofabricacao": "1987",
        "anotermino": "1990"
    },
    {
        "marca": "cbp",
        "modelo": "formigão",
        "anofabricacao": "1987",
        "anotermino": "1990"
    },
    {
        "marca": "cbt",
        "modelo": "cbt javali 4x2",
        "anofabricacao": "1989",
        "anotermino": "1994"
    },
    {
        "marca": "cbt",
        "modelo": "cbt javali 4x4 ",
        "anofabricacao": "1989",
        "anotermino": "1994"
    },
    {
        "marca": "cbt",
        "modelo": "cbt javali 4x4 (turbo)",
        "anofabricacao": "1991",
        "anotermino": "1994"
    },
    {
        "marca": "chamonix",
        "modelo": "roadster 356",
        "anofabricacao": "2011",
        "anotermino": "presente"
    },
    {
        "marca": "chamonix",
        "modelo": "speedster 356",
        "anofabricacao": "1994",
        "anotermino": "presente"
    },
    {
        "marca": "chamonix",
        "modelo": "spyder 550 r",
        "anofabricacao": "2001",
        "anotermino": "2004"
    },
    {
        "marca": "chamonix",
        "modelo": "spyder 550 s",
        "anofabricacao": "1995",
        "anotermino": "presente"
    },
    {
        "marca": "chamonix",
        "modelo": "spyder 550 s l.m.",
        "anofabricacao": "2010",
        "anotermino": "presente"
    },
    {
        "marca": "chamonix",
        "modelo": "super 90",
        "anofabricacao": "1990",
        "anotermino": "2006"
    },
    {
        "marca": "chery",
        "modelo": "arrizzo 5",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "chery",
        "modelo": "celer",
        "anofabricacao": "2015",
        "anotermino": "2017"
    },
    {
        "marca": "chery",
        "modelo": "qq",
        "anofabricacao": "2016",
        "anotermino": "2020"
    },
    {
        "marca": "chery",
        "modelo": "tiggo 2 ",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "chery",
        "modelo": "tiggo 7",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "chery",
        "modelo": "face",
        "anofabricacao": "2010",
        "anotermino": "2018"
    },
    {
        "marca": "chery",
        "modelo": "cielo ",
        "anofabricacao": "2013",
        "anotermino": "2018"
    },
    {
        "marca": "chery",
        "modelo": "arrizo 5e",
        "anofabricacao": "2018",
        "anotermino": "2021"
    },
    {
        "marca": "chery",
        "modelo": "tiggo 3x",
        "anofabricacao": "2021",
        "anotermino": "2022"
    },
    {
        "marca": "chery",
        "modelo": "tiggo 8",
        "anofabricacao": "2020",
        "anotermino": "presente"
    },
    {
        "marca": "chery",
        "modelo": "arrizo 6",
        "anofabricacao": "2021",
        "anotermino": "presente"
    },
    {
        "marca": "chery",
        "modelo": "tiggo 5x ",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "chery",
        "modelo": "icar ",
        "anofabricacao": "2022",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "3100/brasil",
        "anofabricacao": "1958",
        "anotermino": "1963"
    },
    {
        "marca": "chevrolet",
        "modelo": "a-10 (primeira geração)",
        "anofabricacao": "1964",
        "anotermino": "1984"
    },
    {
        "marca": "chevrolet",
        "modelo": "a-10 (segunda geração)",
        "anofabricacao": "1985",
        "anotermino": "1997"
    },
    {
        "marca": "chevrolet",
        "modelo": "a-20",
        "anofabricacao": "1985",
        "anotermino": "1995"
    },
    {
        "marca": "chevrolet",
        "modelo": "alvorada",
        "anofabricacao": "1961",
        "anotermino": "1963"
    },
    {
        "marca": "chevrolet",
        "modelo": "amazona",
        "anofabricacao": "1959",
        "anotermino": "1963"
    },
    {
        "marca": "chevrolet",
        "modelo": "astra",
        "anofabricacao": "1998",
        "anotermino": "2011"
    },
    {
        "marca": "chevrolet",
        "modelo": "beretta",
        "anofabricacao": "1987",
        "anotermino": "1996"
    },
    {
        "marca": "chevrolet",
        "modelo": "blazer",
        "anofabricacao": "1995",
        "anotermino": "2011"
    },
    {
        "marca": "chevrolet",
        "modelo": "bonanza",
        "anofabricacao": "1989",
        "anotermino": "1994"
    },
    {
        "marca": "chevrolet",
        "modelo": "bolt",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "c-10",
        "anofabricacao": "1974",
        "anotermino": "1988"
    },
    {
        "marca": "chevrolet",
        "modelo": "c-14",
        "anofabricacao": "1964",
        "anotermino": "1973"
    },
    {
        "marca": "chevrolet",
        "modelo": "c-1416",
        "anofabricacao": "1964",
        "anotermino": "1994"
    },
    {
        "marca": "chevrolet",
        "modelo": "c-15",
        "anofabricacao": "1964",
        "anotermino": "1973"
    },
    {
        "marca": "chevrolet",
        "modelo": "c-20",
        "anofabricacao": "1985",
        "anotermino": "1995"
    },
    {
        "marca": "chevrolet",
        "modelo": "camaro",
        "anofabricacao": "2010",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "caravan",
        "anofabricacao": "1975",
        "anotermino": "1992"
    },
    {
        "marca": "chevrolet",
        "modelo": "celta",
        "anofabricacao": "2000",
        "anotermino": "2015"
    },
    {
        "marca": "chevrolet",
        "modelo": "chevette hatch",
        "anofabricacao": "1980",
        "anotermino": "1988"
    },
    {
        "marca": "chevrolet",
        "modelo": "chevette",
        "anofabricacao": "1973",
        "anotermino": "1993"
    },
    {
        "marca": "chevrolet",
        "modelo": "chevette junior",
        "anofabricacao": "1992",
        "anotermino": "1993"
    },
    {
        "marca": "chevrolet",
        "modelo": "chevy 500",
        "anofabricacao": "1983",
        "anotermino": "1995"
    },
    {
        "marca": "chevrolet",
        "modelo": "cobalt",
        "anofabricacao": "2011",
        "anotermino": "2020"
    },
    {
        "marca": "chevrolet",
        "modelo": "corisco",
        "anofabricacao": "1947",
        "anotermino": "1963"
    },
    {
        "marca": "chevrolet",
        "modelo": "corsa",
        "anofabricacao": "1994",
        "anotermino": "2012"
    },
    {
        "marca": "chevrolet",
        "modelo": "corsa sedan / classic",
        "anofabricacao": "1995",
        "anotermino": "2002"
    },
    {
        "marca": "chevrolet",
        "modelo": "corsa pick-up",
        "anofabricacao": "1995",
        "anotermino": "2002"
    },
    {
        "marca": "chevrolet",
        "modelo": "corsa wagon",
        "anofabricacao": "1997",
        "anotermino": "2001"
    },
    {
        "marca": "chevrolet",
        "modelo": "cruze",
        "anofabricacao": "2011",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "cruze sport6",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "d-10",
        "anofabricacao": "1980",
        "anotermino": "1985"
    },
    {
        "marca": "chevrolet",
        "modelo": "d-20",
        "anofabricacao": "1985",
        "anotermino": "1995"
    },
    {
        "marca": "chevrolet",
        "modelo": "ipanema",
        "anofabricacao": "1990",
        "anotermino": "1998"
    },
    {
        "marca": "chevrolet",
        "modelo": "kadett",
        "anofabricacao": "1989",
        "anotermino": "1998"
    },
    {
        "marca": "chevrolet",
        "modelo": "kadett conversível",
        "anofabricacao": "1991",
        "anotermino": "1995"
    },
    {
        "marca": "chevrolet",
        "modelo": "marajó",
        "anofabricacao": "1981",
        "anotermino": "1989"
    },
    {
        "marca": "chevrolet",
        "modelo": "meriva",
        "anofabricacao": "2002",
        "anotermino": "2012"
    },
    {
        "marca": "chevrolet",
        "modelo": "montana",
        "anofabricacao": "2003",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "monza sedan",
        "anofabricacao": "1983",
        "anotermino": "1996"
    },
    {
        "marca": "chevrolet",
        "modelo": "monza hatch",
        "anofabricacao": "1982",
        "anotermino": "1988"
    },
    {
        "marca": "chevrolet",
        "modelo": "omega",
        "anofabricacao": "1992",
        "anotermino": "2012"
    },
    {
        "marca": "chevrolet",
        "modelo": "onix",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "opala coupé",
        "anofabricacao": "1971",
        "anotermino": "1988"
    },
    {
        "marca": "chevrolet",
        "modelo": "opala",
        "anofabricacao": "1968",
        "anotermino": "1992"
    },
    {
        "marca": "chevrolet",
        "modelo": "prisma",
        "anofabricacao": "2006",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "silverado",
        "anofabricacao": "1997",
        "anotermino": "2001"
    },
    {
        "marca": "chevrolet",
        "modelo": "s10",
        "anofabricacao": "1995",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "spin",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "suprema",
        "anofabricacao": "1993",
        "anotermino": "1996"
    },
    {
        "marca": "chevrolet",
        "modelo": "trailblazer",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "vectra",
        "anofabricacao": "1993",
        "anotermino": "2011"
    },
    {
        "marca": "chevrolet",
        "modelo": "vectra gt",
        "anofabricacao": "2007",
        "anotermino": "2011"
    },
    {
        "marca": "chevrolet",
        "modelo": "veraneio",
        "anofabricacao": "1964",
        "anotermino": "1994"
    },
    {
        "marca": "chevrolet",
        "modelo": "volt",
        "anofabricacao": "2010",
        "anotermino": "2019"
    },
    {
        "marca": "chevrolet",
        "modelo": "zafira",
        "anofabricacao": "2001",
        "anotermino": "2012"
    },
    {
        "marca": "chevrolet",
        "modelo": "equinox",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "chevrolet",
        "modelo": "ss10",
        "anofabricacao": "1994",
        "anotermino": "1998"
    },
    {
        "marca": "chevrolet",
        "modelo": "caprice",
        "anofabricacao": "1964",
        "anotermino": "2017"
    },
    {
        "marca": "chevrolet",
        "modelo": "malibu",
        "anofabricacao": "2010",
        "anotermino": "2012"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "1800",
        "anofabricacao": "1973",
        "anotermino": "1975"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "1800 polara",
        "anofabricacao": "1976",
        "anotermino": "1981"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "charger",
        "anofabricacao": "1971",
        "anotermino": "1981"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "dakota ",
        "anofabricacao": "1998",
        "anotermino": "2002"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "dart sedan",
        "anofabricacao": "1969",
        "anotermino": "1981"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "dart coupé",
        "anofabricacao": "1970",
        "anotermino": "1981"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "lebaron",
        "anofabricacao": "1979",
        "anotermino": "1980"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "magnum ",
        "anofabricacao": "1979",
        "anotermino": "1981"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "polara",
        "anofabricacao": "1976",
        "anotermino": "1981"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "journey",
        "anofabricacao": "2009",
        "anotermino": "presente"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "durango",
        "anofabricacao": "1998",
        "anotermino": "presente"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "town & country",
        "anofabricacao": "1984",
        "anotermino": "2016"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "300",
        "anofabricacao": "2004",
        "anotermino": "2023"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "pt cruiser",
        "anofabricacao": "2000",
        "anotermino": "2010"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "caravan/grand caravan ",
        "anofabricacao": "1996",
        "anotermino": "2005"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "stratus",
        "anofabricacao": "1995",
        "anotermino": "2007"
    },
    {
        "marca": "crysler/dodge",
        "modelo": "d100",
        "anofabricacao": "1969",
        "anotermino": "1971"
    },
    {
        "marca": "citroën",
        "modelo": "aircross",
        "anofabricacao": "2010",
        "anotermino": "2020"
    },
    {
        "marca": "citroën",
        "modelo": "c3 ",
        "anofabricacao": "2003",
        "anotermino": "presente"
    },
    {
        "marca": "citroën",
        "modelo": "c4 cactus",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "citroën",
        "modelo": "xsara picasso",
        "anofabricacao": "2001",
        "anotermino": "2012"
    },
    {
        "marca": "citroën",
        "modelo": "ds3",
        "anofabricacao": "2012",
        "anotermino": "2017"
    },
    {
        "marca": "citroën",
        "modelo": "xantia",
        "anofabricacao": "1993",
        "anotermino": "2002"
    },
    {
        "marca": "citroën",
        "modelo": "c5 ",
        "anofabricacao": "2001",
        "anotermino": "2017"
    },
    {
        "marca": "citroën",
        "modelo": "c4 pallas",
        "anofabricacao": "2007",
        "anotermino": "2013"
    },
    {
        "marca": "citroën",
        "modelo": "c4 lounge",
        "anofabricacao": "2013",
        "anotermino": "2019"
    },
    {
        "marca": "citroën",
        "modelo": "c4 hatch",
        "anofabricacao": "2009",
        "anotermino": "2013"
    },
    {
        "marca": "citroën",
        "modelo": "c4 vtr ",
        "anofabricacao": "2008",
        "anotermino": "2009"
    },
    {
        "marca": "citroën",
        "modelo": "c6",
        "anofabricacao": "2007",
        "anotermino": "2012"
    },
    {
        "marca": "citroën",
        "modelo": "ds4",
        "anofabricacao": "2013",
        "anotermino": "2018"
    },
    {
        "marca": "citroën",
        "modelo": "ds5",
        "anofabricacao": "2013",
        "anotermino": "2018"
    },
    {
        "marca": "citroën",
        "modelo": "c3 picasso ",
        "anofabricacao": "2012",
        "anotermino": "2017"
    },
    {
        "marca": "citroën",
        "modelo": "xm ",
        "anofabricacao": "1995",
        "anotermino": "2000"
    },
    {
        "marca": "citroën",
        "modelo": "zx",
        "anofabricacao": "1992",
        "anotermino": "1997"
    },
    {
        "marca": "concorde",
        "modelo": "concorde",
        "anofabricacao": "1976",
        "anotermino": "2003"
    },
    {
        "marca": "corona",
        "modelo": "dardo f 1.3 ",
        "anofabricacao": "1979",
        "anotermino": "1983"
    },
    {
        "marca": "corona",
        "modelo": "dardo f 1.5",
        "anofabricacao": "1983",
        "anotermino": "1985"
    },
    {
        "marca": "cross lander",
        "modelo": "cl-244",
        "anofabricacao": "2002",
        "anotermino": "2005"
    },
    {
        "marca": "cross lander",
        "modelo": "cl-330",
        "anofabricacao": "2002",
        "anotermino": "2005"
    },
    {
        "marca": "daewoo",
        "modelo": "espero ",
        "anofabricacao": "1994",
        "anotermino": "2000"
    },
    {
        "marca": "daewoo",
        "modelo": "nubira",
        "anofabricacao": "1997",
        "anotermino": "2002"
    },
    {
        "marca": "daewoo",
        "modelo": "lanos",
        "anofabricacao": "1997",
        "anotermino": "2020"
    },
    {
        "marca": "daewoo",
        "modelo": "leganza",
        "anofabricacao": "1997",
        "anotermino": "2002"
    },
    {
        "marca": "daewoo",
        "modelo": "super salon",
        "anofabricacao": "1994",
        "anotermino": "2004"
    },
    {
        "marca": "daewoo",
        "modelo": "tico",
        "anofabricacao": "1991",
        "anotermino": "2001"
    },
    {
        "marca": "daewoo",
        "modelo": "prince",
        "anofabricacao": "1991",
        "anotermino": "1997"
    },
    {
        "marca": "daihatsu",
        "modelo": "cuore",
        "anofabricacao": "1992",
        "anotermino": "1996"
    },
    {
        "marca": "daihatsu",
        "modelo": "applause",
        "anofabricacao": "1991",
        "anotermino": "1992"
    },
    {
        "marca": "daihatsu",
        "modelo": "terios",
        "anofabricacao": "1997",
        "anotermino": "2001"
    },
    {
        "marca": "daihatsu",
        "modelo": "feroza",
        "anofabricacao": "1989",
        "anotermino": "1998"
    },
    {
        "marca": "dankar",
        "modelo": "squalo",
        "anofabricacao": "1979",
        "anotermino": "1981"
    },
    {
        "marca": "dankar",
        "modelo": "julia",
        "anofabricacao": "1981",
        "anotermino": "1984"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "belcar",
        "anofabricacao": "1958",
        "anotermino": "1967"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "caiçara ",
        "anofabricacao": "1963",
        "anotermino": "1965"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "camioneta",
        "anofabricacao": "1958",
        "anotermino": "1967"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "candango ",
        "anofabricacao": "1958",
        "anotermino": "1963"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "f-91 universal",
        "anofabricacao": "1956",
        "anotermino": "1958"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "fissore",
        "anofabricacao": "1964",
        "anotermino": "1967"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "grande ",
        "anofabricacao": "1958",
        "anotermino": "1967"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "pracinha",
        "anofabricacao": "1966",
        "anotermino": "1967"
    },
    {
        "marca": "dkw-vemag",
        "modelo": "vemaguet",
        "anofabricacao": "1958",
        "anotermino": "1967"
    },
    {
        "marca": "edra",
        "modelo": "rancho pk",
        "anofabricacao": "1993",
        "anotermino": "1993"
    },
    {
        "marca": "edra",
        "modelo": "rancho tt",
        "anofabricacao": "1990",
        "anotermino": "1993"
    },
    {
        "marca": "edra",
        "modelo": "gt",
        "anofabricacao": "2003",
        "anotermino": "1993"
    },
    {
        "marca": "edra",
        "modelo": "gt-r ",
        "anofabricacao": "2003",
        "anotermino": "1993"
    },
    {
        "marca": "edra",
        "modelo": "mog ",
        "anofabricacao": "2005",
        "anotermino": "1993"
    },
    {
        "marca": "edra",
        "modelo": "aris ",
        "anofabricacao": "2009",
        "anotermino": "1993"
    },
    {
        "marca": "emis",
        "modelo": "art",
        "anofabricacao": "1986",
        "anotermino": "1987"
    },
    {
        "marca": "engerauto",
        "modelo": "topazzio",
        "anofabricacao": "1988",
        "anotermino": "1989"
    },
    {
        "marca": "engesa",
        "modelo": "ee-12",
        "anofabricacao": "1984",
        "anotermino": "1984"
    },
    {
        "marca": "engesa",
        "modelo": "ee-34",
        "anofabricacao": "1983",
        "anotermino": "1989"
    },
    {
        "marca": "engesa",
        "modelo": "4",
        "anofabricacao": "1985",
        "anotermino": "1987"
    },
    {
        "marca": "envemo",
        "modelo": "camper ",
        "anofabricacao": "1989",
        "anotermino": "1995"
    },
    {
        "marca": "envemo",
        "modelo": "super 90",
        "anofabricacao": "1980",
        "anotermino": "1995"
    },
    {
        "marca": "envemo",
        "modelo": "super 90 cabriolet",
        "anofabricacao": "1981",
        "anotermino": "1995"
    },
    {
        "marca": "effa",
        "modelo": "effa m100",
        "anofabricacao": "2008",
        "anotermino": "2011"
    },
    {
        "marca": "farus",
        "modelo": "ml-929",
        "anofabricacao": "1978",
        "anotermino": "1990"
    },
    {
        "marca": "farus",
        "modelo": "ts",
        "anofabricacao": "1982",
        "anotermino": "1990"
    },
    {
        "marca": "farus",
        "modelo": "beta",
        "anofabricacao": "1984",
        "anotermino": "1990"
    },
    {
        "marca": "farus",
        "modelo": "beta cabriolet",
        "anofabricacao": "1985",
        "anotermino": "1990"
    },
    {
        "marca": "farus",
        "modelo": "quadro",
        "anofabricacao": "1989",
        "anotermino": "1990"
    },
    {
        "marca": "fiat",
        "modelo": "147",
        "anofabricacao": "1976",
        "anotermino": "1986"
    },
    {
        "marca": "fiat",
        "modelo": "argo",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "brava",
        "anofabricacao": "1999",
        "anotermino": "2003"
    },
    {
        "marca": "fiat",
        "modelo": "bravo",
        "anofabricacao": "2010",
        "anotermino": "2016"
    },
    {
        "marca": "fiat",
        "modelo": "city",
        "anofabricacao": "1978",
        "anotermino": "1988"
    },
    {
        "marca": "fiat",
        "modelo": "cronos",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "dobló",
        "anofabricacao": "2001",
        "anotermino": "2019"
    },
    {
        "marca": "fiat",
        "modelo": "ducato",
        "anofabricacao": "1998",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "elba",
        "anofabricacao": "1986",
        "anotermino": "1996"
    },
    {
        "marca": "fiat",
        "modelo": "fastback",
        "anofabricacao": "2022",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "fiorino",
        "anofabricacao": "1979",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "idea",
        "anofabricacao": "2005",
        "anotermino": "2016"
    },
    {
        "marca": "fiat",
        "modelo": "linea",
        "anofabricacao": "2008",
        "anotermino": "2016"
    },
    {
        "marca": "fiat",
        "modelo": "marea",
        "anofabricacao": "1998",
        "anotermino": "2007"
    },
    {
        "marca": "fiat",
        "modelo": "marea weekend",
        "anofabricacao": "1998",
        "anotermino": "2007"
    },
    {
        "marca": "fiat",
        "modelo": "mobi",
        "anofabricacao": "2016",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "oggi",
        "anofabricacao": "1983",
        "anotermino": "1985"
    },
    {
        "marca": "fiat",
        "modelo": "palio",
        "anofabricacao": "1996",
        "anotermino": "2018"
    },
    {
        "marca": "fiat",
        "modelo": "palio weekend",
        "anofabricacao": "1997",
        "anotermino": "2020"
    },
    {
        "marca": "fiat",
        "modelo": "panorama",
        "anofabricacao": "1980",
        "anotermino": "1986"
    },
    {
        "marca": "fiat",
        "modelo": "prêmio",
        "anofabricacao": "1985",
        "anotermino": "1995"
    },
    {
        "marca": "fiat",
        "modelo": "pulse",
        "anofabricacao": "2021",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "punto",
        "anofabricacao": "2007",
        "anotermino": "2017"
    },
    {
        "marca": "fiat",
        "modelo": "scudo",
        "anofabricacao": "2023",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "siena",
        "anofabricacao": "1998",
        "anotermino": "2022"
    },
    {
        "marca": "fiat",
        "modelo": "grand siena",
        "anofabricacao": "1998",
        "anotermino": "2022"
    },
    {
        "marca": "fiat",
        "modelo": "spazio",
        "anofabricacao": "1983",
        "anotermino": "1984"
    },
    {
        "marca": "fiat",
        "modelo": "stilo",
        "anofabricacao": "2002",
        "anotermino": "2010"
    },
    {
        "marca": "fiat",
        "modelo": "strada",
        "anofabricacao": "1998",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "tempra",
        "anofabricacao": "1991",
        "anotermino": "1999"
    },
    {
        "marca": "fiat",
        "modelo": "tempra sw",
        "anofabricacao": "1991",
        "anotermino": "1999"
    },
    {
        "marca": "fiat",
        "modelo": "tipo",
        "anofabricacao": "1983",
        "anotermino": "1997"
    },
    {
        "marca": "fiat",
        "modelo": "toro",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "fiat",
        "modelo": "uno mille",
        "anofabricacao": "1984",
        "anotermino": "2022"
    },
    {
        "marca": "fiat",
        "modelo": "coupé",
        "anofabricacao": "1995",
        "anotermino": "1996"
    },
    {
        "marca": "fiat",
        "modelo": "500",
        "anofabricacao": "2007",
        "anotermino": "presente"
    },
    {
        "marca": "fnm",
        "modelo": "2000 jk",
        "anofabricacao": "1960",
        "anotermino": "1968"
    },
    {
        "marca": "fnm",
        "modelo": "2150 jk",
        "anofabricacao": "1968",
        "anotermino": "1973"
    },
    {
        "marca": "fnm",
        "modelo": "onça",
        "anofabricacao": "1966",
        "anotermino": "1967"
    },
    {
        "marca": "ford",
        "modelo": "belina",
        "anofabricacao": "1970",
        "anotermino": "1977"
    },
    {
        "marca": "ford",
        "modelo": "belina 2",
        "anofabricacao": "1977",
        "anotermino": "1991"
    },
    {
        "marca": "ford",
        "modelo": "bronco",
        "anofabricacao": "2021",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "corcel",
        "anofabricacao": "1968",
        "anotermino": "1977"
    },
    {
        "marca": "ford",
        "modelo": "corcel 2",
        "anofabricacao": "1977",
        "anotermino": "1986"
    },
    {
        "marca": "ford",
        "modelo": "courier",
        "anofabricacao": "1997",
        "anotermino": "2013"
    },
    {
        "marca": "ford",
        "modelo": "courier van",
        "anofabricacao": "1996",
        "anotermino": "2013"
    },
    {
        "marca": "ford",
        "modelo": "del rey",
        "anofabricacao": "1981",
        "anotermino": "1991"
    },
    {
        "marca": "ford",
        "modelo": "del rey scala",
        "anofabricacao": "1984",
        "anotermino": "1986"
    },
    {
        "marca": "ford",
        "modelo": "ecosport",
        "anofabricacao": "2003",
        "anotermino": "2021"
    },
    {
        "marca": "ford",
        "modelo": "escort",
        "anofabricacao": "1983",
        "anotermino": "2003"
    },
    {
        "marca": "ford",
        "modelo": "escort sw",
        "anofabricacao": "1997",
        "anotermino": "2003"
    },
    {
        "marca": "ford",
        "modelo": "escort conversível",
        "anofabricacao": "1985",
        "anotermino": "1995"
    },
    {
        "marca": "ford",
        "modelo": "f-100",
        "anofabricacao": "1957",
        "anotermino": "1984"
    },
    {
        "marca": "ford",
        "modelo": "f-150",
        "anofabricacao": "2023",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "f-1000",
        "anofabricacao": "1979",
        "anotermino": "1999"
    },
    {
        "marca": "ford",
        "modelo": "f-250",
        "anofabricacao": "1999",
        "anotermino": "2011"
    },
    {
        "marca": "ford",
        "modelo": "f-75",
        "anofabricacao": "1972",
        "anotermino": "1983"
    },
    {
        "marca": "ford",
        "modelo": "fiesta",
        "anofabricacao": "1996",
        "anotermino": "2019"
    },
    {
        "marca": "ford",
        "modelo": "focus",
        "anofabricacao": "2000",
        "anotermino": "2019"
    },
    {
        "marca": "ford",
        "modelo": "jeep",
        "anofabricacao": "1972",
        "anotermino": "1983"
    },
    {
        "marca": "ford",
        "modelo": "galaxie 500",
        "anofabricacao": "1967",
        "anotermino": "1979"
    },
    {
        "marca": "ford",
        "modelo": "galaxie",
        "anofabricacao": "1970",
        "anotermino": "1972"
    },
    {
        "marca": "ford",
        "modelo": "ka",
        "anofabricacao": "1997",
        "anotermino": "2021"
    },
    {
        "marca": "ford",
        "modelo": "ka +",
        "anofabricacao": "2014",
        "anotermino": "2021"
    },
    {
        "marca": "ford",
        "modelo": "ltd",
        "anofabricacao": "1969",
        "anotermino": "1982"
    },
    {
        "marca": "ford",
        "modelo": "ltd landau",
        "anofabricacao": "1971",
        "anotermino": "1983"
    },
    {
        "marca": "ford",
        "modelo": "maverick",
        "anofabricacao": "1973",
        "anotermino": "1979"
    },
    {
        "marca": "ford",
        "modelo": "maverick pick-up",
        "anofabricacao": "2022",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "mustang",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "mondeo",
        "anofabricacao": "1995",
        "anotermino": "2006"
    },
    {
        "marca": "ford",
        "modelo": "pampa",
        "anofabricacao": "1982",
        "anotermino": "1997"
    },
    {
        "marca": "ford",
        "modelo": "ranger",
        "anofabricacao": "1994",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "royale",
        "anofabricacao": "1992",
        "anotermino": "1996"
    },
    {
        "marca": "ford",
        "modelo": "territory",
        "anofabricacao": "2020",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "rural",
        "anofabricacao": "1972",
        "anotermino": "1977"
    },
    {
        "marca": "ford",
        "modelo": "verona",
        "anofabricacao": "1989",
        "anotermino": "1996"
    },
    {
        "marca": "ford",
        "modelo": "versailles",
        "anofabricacao": "1991",
        "anotermino": "1996"
    },
    {
        "marca": "ford",
        "modelo": "fusion",
        "anofabricacao": "2006",
        "anotermino": "2020"
    },
    {
        "marca": "ford",
        "modelo": "edge",
        "anofabricacao": "2009",
        "anotermino": "presente"
    },
    {
        "marca": "ford",
        "modelo": "taurus",
        "anofabricacao": "1994",
        "anotermino": "2000"
    },
    {
        "marca": "ford",
        "modelo": "crown victoria",
        "anofabricacao": "1955",
        "anotermino": "2011"
    },
    {
        "marca": "furglass",
        "modelo": "furglaine",
        "anofabricacao": "1980",
        "anotermino": "1894"
    },
    {
        "marca": "geely",
        "modelo": "ec7",
        "anofabricacao": "2014",
        "anotermino": "2016"
    },
    {
        "marca": "geely",
        "modelo": "gc2",
        "anofabricacao": "2014",
        "anotermino": "2016"
    },
    {
        "marca": "glaspac",
        "modelo": "cobra",
        "anofabricacao": "1982",
        "anotermino": "1987"
    },
    {
        "marca": "gmc",
        "modelo": "3500 hd",
        "anofabricacao": "1997",
        "anotermino": "2001"
    },
    {
        "marca": "grancar",
        "modelo": "futura",
        "anofabricacao": "1990",
        "anotermino": "1991"
    },
    {
        "marca": "gurgel",
        "modelo": "ipanema",
        "anofabricacao": "1969",
        "anotermino": "1971"
    },
    {
        "marca": "gurgel",
        "modelo": "bugato",
        "anofabricacao": "1970",
        "anotermino": "1971"
    },
    {
        "marca": "gurgel",
        "modelo": "xavante xt",
        "anofabricacao": "1971",
        "anotermino": "1975"
    },
    {
        "marca": "gurgel",
        "modelo": "xavante xtr",
        "anofabricacao": "1971",
        "anotermino": "1975"
    },
    {
        "marca": "gurgel",
        "modelo": "xavante xtc",
        "anofabricacao": "1974",
        "anotermino": "1975"
    },
    {
        "marca": "gurgel",
        "modelo": "x-10",
        "anofabricacao": "1875",
        "anotermino": "1977"
    },
    {
        "marca": "gurgel",
        "modelo": "x-20",
        "anofabricacao": "1976",
        "anotermino": "1979"
    },
    {
        "marca": "gurgel",
        "modelo": "x-12",
        "anofabricacao": "1975",
        "anotermino": "1988"
    },
    {
        "marca": "gurgel",
        "modelo": "tocantins",
        "anofabricacao": "1988",
        "anotermino": "1991"
    },
    {
        "marca": "gurgel",
        "modelo": "x-15",
        "anofabricacao": "1979",
        "anotermino": "1982"
    },
    {
        "marca": "gurgel",
        "modelo": "g-15",
        "anofabricacao": "1979",
        "anotermino": "1982"
    },
    {
        "marca": "gurgel",
        "modelo": "itaipu e-150",
        "anofabricacao": "1975",
        "anotermino": "1982"
    },
    {
        "marca": "gurgel",
        "modelo": "itaipu e-500",
        "anofabricacao": "1981",
        "anotermino": "1982"
    },
    {
        "marca": "gurgel",
        "modelo": "g-800",
        "anofabricacao": "1982",
        "anotermino": "1988"
    },
    {
        "marca": "gurgel",
        "modelo": "xef",
        "anofabricacao": "1983",
        "anotermino": "1986"
    },
    {
        "marca": "gurgel",
        "modelo": "carajás",
        "anofabricacao": "1984",
        "anotermino": "1989"
    },
    {
        "marca": "gurgel",
        "modelo": "br-800",
        "anofabricacao": "1988",
        "anotermino": "1991"
    },
    {
        "marca": "gurgel",
        "modelo": "motomachine",
        "anofabricacao": "1990",
        "anotermino": "1992"
    },
    {
        "marca": "gurgel",
        "modelo": "supermini",
        "anofabricacao": "1992",
        "anotermino": "1995"
    },
    {
        "marca": "gwm",
        "modelo": "havai h6",
        "anofabricacao": "2023",
        "anotermino": "presente"
    },
    {
        "marca": "hofstetter",
        "modelo": "hofstetter",
        "anofabricacao": "1986",
        "anotermino": "1993"
    },
    {
        "marca": "honda",
        "modelo": "accord sj",
        "anofabricacao": "1976",
        "anotermino": "1982"
    },
    {
        "marca": "honda",
        "modelo": "accord sm",
        "anofabricacao": "1976",
        "anotermino": "1993"
    },
    {
        "marca": "honda",
        "modelo": "accord sy",
        "anofabricacao": "1981",
        "anotermino": "1985"
    },
    {
        "marca": "honda",
        "modelo": "accord sz",
        "anofabricacao": "1981",
        "anotermino": "1985"
    },
    {
        "marca": "honda",
        "modelo": "accord ac",
        "anofabricacao": "1981",
        "anotermino": "1985"
    },
    {
        "marca": "honda",
        "modelo": "accord ad",
        "anofabricacao": "1981",
        "anotermino": "1985"
    },
    {
        "marca": "honda",
        "modelo": "accord ca 1",
        "anofabricacao": "1985",
        "anotermino": "1989"
    },
    {
        "marca": "honda",
        "modelo": "accord ca 2",
        "anofabricacao": "1985",
        "anotermino": "1989"
    },
    {
        "marca": "honda",
        "modelo": "accord ca 3",
        "anofabricacao": "1985",
        "anotermino": "1989"
    },
    {
        "marca": "honda",
        "modelo": "accord ca 4",
        "anofabricacao": "1985",
        "anotermino": "1989"
    },
    {
        "marca": "honda",
        "modelo": "accord ca 5",
        "anofabricacao": "1985",
        "anotermino": "1989"
    },
    {
        "marca": "honda",
        "modelo": "accord ca 6",
        "anofabricacao": "1985",
        "anotermino": "1989"
    },
    {
        "marca": "honda",
        "modelo": "accord cb7",
        "anofabricacao": "1989",
        "anotermino": "1993"
    },
    {
        "marca": "honda",
        "modelo": "accord cb7 wagon",
        "anofabricacao": "1989",
        "anotermino": "1993"
    },
    {
        "marca": "honda",
        "modelo": "accord cb9",
        "anofabricacao": "1989",
        "anotermino": "1993"
    },
    {
        "marca": "honda",
        "modelo": "accord cd3",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "honda",
        "modelo": "accord cd4",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "honda",
        "modelo": "accord cd5",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "honda",
        "modelo": "accord cd6",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "honda",
        "modelo": "accord cd7",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "honda",
        "modelo": "accord cd9",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "honda",
        "modelo": "ascot innova",
        "anofabricacao": "1993",
        "anotermino": "1998"
    },
    {
        "marca": "honda",
        "modelo": "inspire",
        "anofabricacao": "2003",
        "anotermino": "2007"
    },
    {
        "marca": "honda",
        "modelo": "acura tsx",
        "anofabricacao": "2003",
        "anotermino": "2007"
    },
    {
        "marca": "honda",
        "modelo": "sedan accord",
        "anofabricacao": "2013",
        "anotermino": "2018"
    },
    {
        "marca": "honda",
        "modelo": "coupé accord",
        "anofabricacao": "2013",
        "anotermino": "2018"
    },
    {
        "marca": "honda",
        "modelo": "inspire (décima geração)",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "honda",
        "modelo": "city (quinta geração)",
        "anofabricacao": "2008",
        "anotermino": "2013"
    },
    {
        "marca": "honda",
        "modelo": "city (sexta geração)",
        "anofabricacao": "2014",
        "anotermino": "2022"
    },
    {
        "marca": "honda",
        "modelo": "city (sétima geração)",
        "anofabricacao": "2022",
        "anotermino": "presente"
    },
    {
        "marca": "honda",
        "modelo": "civic (quinta geração)",
        "anofabricacao": "1992",
        "anotermino": "1995"
    },
    {
        "marca": "honda",
        "modelo": "civic (sexta geração)",
        "anofabricacao": "1995",
        "anotermino": "2000"
    },
    {
        "marca": "honda",
        "modelo": "civic (sétima geração)",
        "anofabricacao": "2001",
        "anotermino": "2006"
    },
    {
        "marca": "honda",
        "modelo": "civic (oitava geração)",
        "anofabricacao": "2006",
        "anotermino": "2011"
    },
    {
        "marca": "honda",
        "modelo": "honda civic si",
        "anofabricacao": "2014",
        "anotermino": "2020"
    },
    {
        "marca": "honda",
        "modelo": "civic (nona geração)",
        "anofabricacao": "2012",
        "anotermino": "2016"
    },
    {
        "marca": "honda",
        "modelo": "civic (décima geração)",
        "anofabricacao": "2017",
        "anotermino": "2021"
    },
    {
        "marca": "honda",
        "modelo": "civic (décima-primeira geração)",
        "anofabricacao": "2021",
        "anotermino": "presente"
    },
    {
        "marca": "honda",
        "modelo": "fit (primeira geração)",
        "anofabricacao": "2003",
        "anotermino": "2008"
    },
    {
        "marca": "honda",
        "modelo": "fit (segunda geração)",
        "anofabricacao": "2008",
        "anotermino": "2013"
    },
    {
        "marca": "honda",
        "modelo": "fit (terceira geração)",
        "anofabricacao": "2013",
        "anotermino": "2019"
    },
    {
        "marca": "honda",
        "modelo": "fit (quarta geração)",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "honda",
        "modelo": " fit ev",
        "anofabricacao": "2012",
        "anotermino": "2019"
    },
    {
        "marca": "honda",
        "modelo": "cr-v (primeira geração)",
        "anofabricacao": "1995",
        "anotermino": "2001"
    },
    {
        "marca": "honda",
        "modelo": "cr-v (segunda geração)",
        "anofabricacao": "2001",
        "anotermino": "2006"
    },
    {
        "marca": "honda",
        "modelo": "cr-v (terceira geração)",
        "anofabricacao": "2006",
        "anotermino": "2012"
    },
    {
        "marca": "honda",
        "modelo": "cr-v (quarta geração)",
        "anofabricacao": "2011",
        "anotermino": "2018"
    },
    {
        "marca": "honda",
        "modelo": "cr-v (quinta geração)",
        "anofabricacao": "2017",
        "anotermino": "presente"
    },
    {
        "marca": "honda",
        "modelo": "hr-v",
        "anofabricacao": "2015",
        "anotermino": "presente"
    },
    {
        "marca": "honda",
        "modelo": "wr-v",
        "anofabricacao": "2017",
        "anotermino": "2021"
    },
    {
        "marca": "honda",
        "modelo": "nsx",
        "anofabricacao": "1990",
        "anotermino": "2016"
    },
    {
        "marca": "hummer",
        "modelo": "h1",
        "anofabricacao": "1992",
        "anotermino": "1996"
    },
    {
        "marca": "hummer",
        "modelo": "h2",
        "anofabricacao": "2003",
        "anotermino": "2009"
    },
    {
        "marca": "hummer",
        "modelo": "h3",
        "anofabricacao": "2006",
        "anotermino": "2010"
    },
    {
        "marca": "hyundai",
        "modelo": "accent ",
        "anofabricacao": "1995",
        "anotermino": "1998"
    },
    {
        "marca": "hyundai",
        "modelo": "hyundai atos",
        "anofabricacao": "2000",
        "anotermino": "2002"
    },
    {
        "marca": "hyundai",
        "modelo": "creta ",
        "anofabricacao": "2016",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "hb20 ",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "hb20s ",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "hb20x ",
        "anofabricacao": "2012",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "hyundai i30/i30 cw",
        "anofabricacao": "2009",
        "anotermino": "2017"
    },
    {
        "marca": "hyundai",
        "modelo": "ix35",
        "anofabricacao": "2011",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "tucson ",
        "anofabricacao": "2005",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "azera ",
        "anofabricacao": "2007",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "veloster",
        "anofabricacao": "2011",
        "anotermino": "2014"
    },
    {
        "marca": "hyundai",
        "modelo": "santa fe ",
        "anofabricacao": "2007",
        "anotermino": "presente"
    },
    {
        "marca": "hyundai",
        "modelo": "veracruz",
        "anofabricacao": "2006",
        "anotermino": "2012"
    },
    {
        "marca": "hyundai",
        "modelo": "genesis",
        "anofabricacao": "2009",
        "anotermino": "2017"
    },
    {
        "marca": "hyundai",
        "modelo": "elantra ",
        "anofabricacao": "2011",
        "anotermino": "2020"
    },
    {
        "marca": "hyundai",
        "modelo": "equus",
        "anofabricacao": "2009",
        "anotermino": "2012"
    },
    {
        "marca": "hyundai",
        "modelo": "sonata ",
        "anofabricacao": "2011",
        "anotermino": "2014"
    },
    {
        "marca": "ibap",
        "modelo": "democrata",
        "anofabricacao": "1963",
        "anotermino": "1968"
    },
    {
        "marca": "infiniti",
        "modelo": "fx35",
        "anofabricacao": "2003",
        "anotermino": "2014"
    },
    {
        "marca": "infiniti",
        "modelo": "qx56",
        "anofabricacao": "2000",
        "anotermino": "presente"
    },
    {
        "marca": "infiniti",
        "modelo": "fx50",
        "anofabricacao": "2003",
        "anotermino": "2014"
    },
    {
        "marca": "infiniti",
        "modelo": "j30",
        "anofabricacao": "1993",
        "anotermino": "1997"
    },
    {
        "marca": "jac",
        "modelo": "t5",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "jac",
        "modelo": "t40",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "jac",
        "modelo": "j3",
        "anofabricacao": "2011",
        "anotermino": "2018"
    },
    {
        "marca": "jac",
        "modelo": "j3 turin",
        "anofabricacao": "2011",
        "anotermino": "2018"
    },
    {
        "marca": "jac",
        "modelo": "j6",
        "anofabricacao": "2011",
        "anotermino": "2018"
    },
    {
        "marca": "jac",
        "modelo": "j5",
        "anofabricacao": "2012",
        "anotermino": "2018"
    },
    {
        "marca": "jac",
        "modelo": "j2",
        "anofabricacao": "2010",
        "anotermino": "2018"
    },
    {
        "marca": "jac",
        "modelo": "iev 20",
        "anofabricacao": "2019",
        "anotermino": "2020"
    },
    {
        "marca": "jac",
        "modelo": "iev 60",
        "anofabricacao": "2019",
        "anotermino": "2020"
    },
    {
        "marca": "jac",
        "modelo": "iev 40",
        "anofabricacao": "2019",
        "anotermino": "2020"
    },
    {
        "marca": "jac",
        "modelo": "t80",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "jac",
        "modelo": "t50",
        "anofabricacao": "2018",
        "anotermino": "presente"
    },
    {
        "marca": "jac",
        "modelo": "t60",
        "anofabricacao": "2019",
        "anotermino": "presente"
    },
    {
        "marca": "jac",
        "modelo": "t6",
        "anofabricacao": "2015",
        "anotermino": "presente"
    }
];

try {
  carrosData = JSON.parse(fs.readFileSync("carrosbrasil.json", "utf-8"));
} catch (error) {
  console.error("Erro ao ler o arquivo:", error);
}




app.post("/consultarCarro", (req, res) => {
  console.log("Recebida solicitação para consultar carro.");

  console.log(req.query);
  console.log(req.body);

  const input = (req.query.input || "")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/gi, "");
  const palavras = input.split(/\s+/);
  console.log(req.body);
  console.log("Palavras a serem pesquisadas:", palavras);

  let marcaEncontrada = false;
  let modeloEncontrado = false;

  for (const item of carrosData) {
    for (const pal of palavras) {
      if (pal == item.marca) {
        marcaEncontrada = true;
      }
      if (pal == item.modelo) {
        modeloEncontrado = true;
      }

    }
  }

  console.log("Marca encontrada:", marcaEncontrada);
  console.log("Modelo encontrado:", modeloEncontrado);

  if (marcaEncontrada && modeloEncontrado) {
    const resposta = { mensagem: "Marca e modelo do carro validados." };
    console.log("Enviando resposta:", resposta);
    res.json(resposta);
  } else {
    const erro = { error: "Marca ou modelo do carro não encontrados." };
    console.log("Enviando resposta de erro:", erro);
    res.status(404).json(erro);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});

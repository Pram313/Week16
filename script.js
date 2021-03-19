let year = prompt("Please enter message: ");
let zodiac = parseInt(year);
switch (zodiac) {
    case 1972:
    case 1984:
    case 1996:
    case 2008:
    case 2020:
        alert("Rat Zodiac");
        console.log("Rat Zodiac");
        document.getElementById("hContent").innerHTML = "Rat Zodiac";
        break;

    case 1973:
    case 1985:
    case 1997:
    case 2009:
    case 2021:
        alert(year + "Oxen Zodiac");
        console.log("Oxen Zodiac");
        document.getElementById("hContent").innerHTML = "Oxen Zodiac";
        break;

    case 1974:
    case 1986:
    case 1998:
    case 2010:
    case 2022:
        alert("Tiger Zodiac");
        console.log("Tiger Zodiac");
        document.getElementById("hContent").innerHTML = "Tiger Zodiac";
        break;

    case 1975:
    case 1987:
    case 1999:
    case 2011:
    case 2023:
        alert("Rabbit Zodiac");
        console.log("Rabbit Zodiac");
        document.getElementById("hContent").innerHTML = "Rabbit Zodiac";
        break;

    case 1976:
    case 1988:
    case 2000:
    case 2012:
    case 2024:
        alert("Dragon Zodiac");
        console.log("Dragon Zodiac");
        document.getElementById("hContent").innerHTML = "Dragon Zodiac";
        break;

    case 1977:
    case 1989:
    case 2001:
    case 2013:
    case 2025:
        alert("Suake Zodiac");
        console.log("Suake Zodiac");
        document.getElementById("hContent").innerHTML = "Suake Zodiac";
        break;

    case 1978:
    case 1990:
    case 2002:
    case 2014:
    case 2026:
        alert("Horse Zodiac");
        console.log("Horse Zodiac");
        document.getElementById("hContent").innerHTML = "Horse Zodiac";
        break;

    case 1979:
    case 1991:
    case 2003:
    case 2015:
    case 2027:
        alert("Sheep Zodiac");
        console.log("Sheep Zodiac");
        document.getElementById("hContent").innerHTML = "Sheep Zodiac";
        break;

    case 1980:
    case 1992:
    case 2004:
    case 2016:
    case 2028:
        alert("Monkey Zodiac");
        console.log("Monkey ZOdiac");
        document.getElementById("hContent").innerHTML = "Monkey Zodiac";
        break;

    case 1981:
    case 1993:
    case 2005:
    case 2017:
    case 2029:
        alert("Rooster Zodiac");
        console.log("Rooster Zodiac");
        document.getElementById("hContent").innerHTML = "Rooster Zodiac";
        break;

    case 1982:
    case 1994:
    case 2006:
    case 2018:
    case 2030:
        alert("Dog Zodiac");
        console.log("Dog Zodiac");
        document.getElementById("hContent").innerHTML = "Dog Zodiac";
        break;

    case 1983:
    case 1995:
    case 2007:
    case 2019:
    case 2031:
        alert("Pig Zodiac");
        console.log("Pig Zodiac");
        document.getElementById("hContent").innerHTML = "Pig Zodiac";
        break;

    default:
        alert("ERROR ZODIAC SIGNS");
        console.log("ERROR");
        document.getElementById("hContent").innerHTML = "ERROR ZODIAC SIGNS";
        break;
}
let year = prompt("Please enter message: ");
let zodiac = parseInt(year);

function jjj(zodiac) {
    let a = ['rat', 'x', 'y', ]
    switch (zodiac) {
        case 2020:
        case 2008:
        case 1996:
        case 1984:
        case 1972:
            alert(`${zodiac} is ${a[0]}zodiac Signs`);
            console.log(`${zodiac} Rat zodiac Signs`);
            document.getElementById("hContent").innerHTML = (`${zodiac} Rat zodiac`);
            break;
        case 2021:
        case 2009:
        case 1997:
        case 1985:
        case 1973:
            alert(`${zodiac} Oxen Zodiac`);
            console.log(`${zodiac} Oxen Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac} Rat zodiac`);
            break;
        case 2022:
        case 2010:
        case 1998:
        case 1986:
        case 1974:
            alert(`${zodiac} Tiger Zodiac`);
            console.log(`${zodiac} Tiger Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac} Tiger Zodiac`);
            break;
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            alert(`${zodiac} Rabbit Zodiac`);
            console.log(`${zodiac} Rabbit Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac} Rabbit Zodiac`);
            break;
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            alert(`${zodiac} Dragon Zodiac`);
            console.log(`${zodiac} Dragon Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac} Dragon Zodiac`);
            break;
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            alert(`${zodiac} Suake Zodiac`);
            console.log(`${zodiac} Suake Zodiac`);
            document.getElementById("hCotent").innerHTML = (`${zodiac} Suake Zodiac`);
            break;
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            alert(`${zodiac} Horse Zodiac`);
            console.log(`${zodiac} Horse Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac} Horse Zodiac`);
            break;
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            alert(`${zodiac}Sheep Zodiac`);
            console.log(`${zodiac}Sheep Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac}Sheep Zodiac`);
            break;
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            alert(`${zodiac}Monkey Zodiac`);
            console.log(`${zodiac}Monkey Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac}Monkey Zodiac`);
            break;
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            alert(`${zodiac}Rooster Zodiac`);
            console.log(`${zodiac}Rooster Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac}Rooster Zodiac`);
            break;
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            alert(`${zodiac}Dog Zodiac`);
            console.log(`${zodiac}Dog Zodiac`);
            document.getElementById("zodiac01").innerHTML = (`${zodiac}Dog Zodiac`);
            break;
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            alert(`${zodiac}Pig Zodiac`);
            console.log(`${zodiac}Pig Zodiac`);
            document.getElementById("hContent").innerHTML = (`${zodiac}Pig Zodiac`);
            break;
        default:
            alert(`ERROR ZODIAC SIGNS`);
            console.log(`ERROR`);
            document.getElementById("hContent").innerHTML = `ERROR ZODIAC SIGNS`;
            break;
    }
}
jjj(zodiac)
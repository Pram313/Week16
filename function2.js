let year = prompt("Please enter year: ");
let zodiac = parseInt(year);

function myzodiac(zodiac, ily) {
    let name = {
        name1: 'Rat',
        name2: 'Oxen',
        name3: 'Tiger',
        name4: 'Rabbit',
        name5: 'Dragon',
        name6: 'Suake',
        name7: 'Horse',
        name8: 'sheep',
        name9: 'Monkey',
        name10: 'Rooter',
        name11: 'Dog',
        name12: 'Pig',

    }
    switch (zodiac) {
        case 2020:
        case 2008:
        case 1996:
        case 1984:
        case 1972:
            alert(`${zodiac} is ${name.name1} zodiac Signs ${ily}`);
            console.log(`${zodiac} is ${name.name1} zodiac Signs ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} is ${name.name1} zodiac ${ily}`);
            break;
        case 2021:
        case 2009:
        case 1997:
        case 1985:
        case 1973:
            alert(`${zodiac} ${name.name2} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name2} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name2} zodiac ${ily}`);
            break;
        case 2022:
        case 2010:
        case 1998:
        case 1986:
        case 1974:
            alert(`${zodiac} ${name.name3} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name3} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name3} Zodiac ${ily}`);
            break;
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            alert(`${zodiac} ${name.name4} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name4} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name4} Zodiac ${ily}`);
            break;
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            alert(`${zodiac} ${name.name5} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name5} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name5} Zodiac ${ily}`);
            break;
        case 1977:
        case 1989:
        case 2001:
        case 2013:
        case 2025:
            alert(`${zodiac} ${name.name6} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name6} Zodiac ${ily}`);
            document.getElementById("hCotent").innerHTML = (`${zodiac} ${name.name6} Zodiac ${ily}`);
            break;
        case 1978:
        case 1990:
        case 2002:
        case 2014:
        case 2026:
            alert(`${zodiac} ${name.name7} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name7} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name7} Zodiac ${ily}`);
            break;
        case 1979:
        case 1991:
        case 2003:
        case 2015:
        case 2027:
            alert(`${zodiac} ${name.name8} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name8} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name8} Zodiac ${ily}`);
            break;
        case 1980:
        case 1992:
        case 2004:
        case 2016:
        case 2028:
            alert(`${zodiac} ${name.name9} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name9} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name9} Zodiac ${ily}`);
            break;
        case 1981:
        case 1993:
        case 2005:
        case 2017:
        case 2029:
            alert(`${zodiac} ${name.name10} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name10} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name10} Zodiac ${ily}`);
            break;
        case 1982:
        case 1994:
        case 2006:
        case 2018:
        case 2030:
            alert(`${zodiac} ${name.name11} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name11} Zodiac ${ily}`);
            document.getElementById("zodiac01").innerHTML = (`${zodiac} ${name.name11} Zodiac ${ily}`);
            break;
        case 1983:
        case 1995:
        case 2007:
        case 2019:
        case 2031:
            alert(`${zodiac} ${name.name12} Zodiac ${ily}`);
            console.log(`${zodiac} ${name.name12} Zodiac ${ily}`);
            document.getElementById("hContent").innerHTML = (`${zodiac} ${name.name12} Zodiac ${ily}`);
            break;
        default:
            alert(`ERROR ZODIAC SIGNS ${ily}`);
            console.log(`ERROR ${ily}`);
            document.getElementById("hContent").innerHTML = `ERROR ZODIAC SIGNS ${ily}`;
            break;
    }
}
myzodiac(zodiac, "I LOVE YOU")
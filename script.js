const people = [
    {name: 'Alex', year: 1981},
    {name: 'Arri', year: 1986},
    {name: 'Kaja', year: 1998},
    {name: 'Pour', year: 2015},
];

const comments = [
    {text: 'I love you!', id: 523423},
    {text: 'eu ti amo!', id: 823423},
    {text: 'I am the only!', id: 2039842},
    {text: 'I want you!', id: 123523},
    {text: 'Yes!', id: 542328},
];

console.log(people)
console.log(comments)

//.some and .every checks
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true;
    }
})

console.log(isAdult)
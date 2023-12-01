const spanCount = document.querySelector('#spanCount');
const spanAverageRate = document.querySelector('#spanAverageRate');
const ul = document.querySelector('ul');

const freelancers = [
    {name: "Dr. Slice", price: 25, occupation: "gardener"},
    {name: "Dr. Pressure", price: 51, occupation: "programmer"}
];

spanCount.innerHTML = freelancers.length;

let sum = 0;
freelancers.forEach((freelancer)=> {
    sum = sum + freelancer.price;
});
const average = sum / freelancers.length;
spanAverageRate.innerHTML = average;

const html = freelancers.map((freelancer)=> {
    return `
        <li>
        ${freelancer.name} <br>
        price: ${freelancer.price} <br>
        occupation: ${freelancer.occupation} <br>
        </li>
    `;
}).join('');

ul.innerHTML = html;

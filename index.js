const spanCount = document.querySelector('#spanCount');
const spanAverageRate = document.querySelector('#spanAverageRate');
const ul = document.querySelector('ul');

const freelancers = [
    {name: "Dr. Slice", price: 25, occupation: "gardener"},
    {name: "Dr. Pressure", price: 51, occupation: "programmer"}
];

const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];

const occupations = ["gardener", "programmer", "teacher", "gardner"];

function render(){
    spanCount.innerHTML = freelancers.length;

    let sum = 0;
    freelancers.forEach((freelancer)=> {
        sum = sum + freelancer.price;
    });
    const average = sum / freelancers.length;
    spanAverageRate.innerHTML = average.toFixed(2);

    const html = freelancers.map((freelancer)=> {
        return `
          <li>
             ${freelancer.name} <br>
             price: $${freelancer.price.toFixed(2)} <br>
             occupation: ${freelancer.occupation} <br>
         </li>
     `;
    }).join('');

    ul.innerHTML = html;
}

render();

const interval = setInterval(()=> {
    const nameIndex = Math.floor(Math.random()*names.length); 
    const name = names[nameIndex];
    const price = Math.ceil(Math.random()*100);
    const occupationIndex = Math.floor(Math.random()*occupations.length); 
    const occupation = occupations[occupationIndex];
    const randomFreelancer = {
        name: name,
        price: price,
        occupation: occupation
    };
    freelancers.push(randomFreelancer);
    render();
    if(freelancers.length === 20){
    clearInterval(interval);
    }
}, 1000)

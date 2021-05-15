const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = [];
for (let i of employers) {
	i.length > 0 && i.length != '' ? employersNames.push(i) : ''
}

for (let i of employersNames) {
	i = i.toLowerCase().trim();
}

const sponsors = {
	cash: [40000, 5000, 30400, 12000],
	eu: ['SRL', 'PLO', 'J&K'],
	rus: ['RusAuto', 'SBO']
};

const { cash,  eu} = sponsors

function calcCash(own = 0) {
	let total = 0
	own.forEach((item) => {
		total += item
	})
	return total
}

const money = calcCash(cash);


 const makeBusiness = (owner, director = 'Victor', cash , emp) =>  {
	const sumSponsors = eu.concat(sponsors.rus, 'unexpected sponsor');
	console.log(`We have a business. Owner: ${owner}, director: ${director}/ Our budget: ${cash}. And our employers: ${emp}`);
	console.log('And we have a sponsors: ');
	console.log(sumSponsors.join());
	console.log(`Note. Be careful with  ${eu[0]}". It's a huge risk.`);
}
makeBusiness({cash: money, emp: employers});
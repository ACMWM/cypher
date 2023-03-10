function parse(file, options) {
	return new Promise((complete, error) => {
		Papa.parse(file, { ...options, complete, error });
	});
}

function EventElements(data) {
	const info = document.createElement('tr');

	const time = document.createElement('td');
	time.innerText = data.Time;
	const title = document.createElement('td');
	title.innerText = data.Title;
	const location = document.createElement('td');
	location.innerText = data.Location;
	info.append(time, title, location);

	if (!data.Details) return [info];

	const detailsRow = document.createElement('tr');
	detailsRow.classList.add('details');

	const details = document.createElement('td');
	details.setAttribute('colspan', 3);
	details.innerText = data.Details;
	detailsRow.append(details);

	return [info, detailsRow];
}

(async function () {
	const {data} = await parse(
		"https://docs.google.com/spreadsheets/d/e/2PACX-1vQ85UWX8YgueGqmEsfdwoFKlozGIuMe6zmlSpdV92TtOa-2L0b-FGrRGLoTs5x5hfq4S2YKvpKWYfjM/pub?gid=0&single=true&output=csv",
		{
			download: true,
			header: true,
		}
	);
	data.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
	const dayTables = new Map();
	for (let event of data) {
		const day = event.Date.toLowerCase();
		let table = dayTables.get(day);
		if (table === undefined) {
			table = document.querySelector(`#${day}-schedule`);
			dayTables.set(day, table ?? null);
		}
		if (table) {
			table.append(...EventElements(event))
			console.log(event)
		}
	}
	
})();


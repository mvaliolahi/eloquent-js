# EloquentJS

This library help us to execute queries on json files in simplest posible way.


## Getting Started

After install:

	1. ```js import {EloquentJS} from '../../node_modules/eloquent-js/EloquentJS'; ```
	2. import Your JsonFile ```js import DB from "../assets/data/countries.json"; ```
	3. extends you class from EloquentJS and add JSONFile field for refer the jsonfile.
	4. enjoy it!
 

## example


#### 1. Define a class to work with your json file.

	import DB from "../assets/data/countries.json";
	import {EloquentJS} from '../../node_modules/eloquent-js/EloquentJS';

	export class Country extends EloquentJS {

		JSONFile = DB;

		statesOf(CountryName) {
			let result = this.query('name', CountryName).states;
			return result;
		}
	}
	

#### 2. Usage
	
	const country = new Country();

	let cities = country
        .where('name', 'Iran')
        .pluck('states')
        .andWhere('name', 'Tehran')
        .pluck('cities')
        .get();


## methods 

	- all() // return JsonFile as an object.
	- where(key, value) 
	- pluck(field) // pick a part of current query result.
	- andWhwre(key, value) // apply another where statement to current query.
	- get() // execute and return final query result.
	- etc ...
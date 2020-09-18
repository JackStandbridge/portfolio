import { connect } from 'mongoose';

class Database {
	constructor() {
		this.connect();
	}

	async connect() {
		await connect('mongodb://localhost/games', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		});
	}
}

export default new Database();
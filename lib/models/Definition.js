import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const definitionSchema = new Schema({
	word: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	definitions: Array,
});

let model;

try {
	model = mongoose.model('Definition');
} catch (e) {
	model = mongoose.model('Definition', definitionSchema);
}

export default model;
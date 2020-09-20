import mongoose, { Model, Document, Types } from 'mongoose';

const Schema = mongoose.Schema;

const DefinitionSchema = new Schema({
	word: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
	},
	definitions: Array,
});

interface IDefinitionSchema extends Document {
	word: string|string[],
	definitions: Types.Array<number>
}

let model: Model<IDefinitionSchema>;

try {
	model = mongoose.model('Definition');
} catch (e) {
	model = mongoose.model('Definition', DefinitionSchema);
}

export default model;
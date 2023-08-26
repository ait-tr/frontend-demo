export default interface Task {
	id: number;
	name: string;
	description: string;
}

export type TaskId = Task['id'];

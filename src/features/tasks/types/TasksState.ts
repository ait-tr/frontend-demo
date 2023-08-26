import Task from './Task';

export default interface TasksState {
	tasks: Task[];
	error?: string;
}

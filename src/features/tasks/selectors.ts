import Task from './types/Task';
import { RootState } from '../../app/store';

export const selectTasks = (state: RootState): Task[] => state.tasks.tasks;
export const selectError = (state: RootState): string | undefined => state.tasks.error;

import { useCallback, useEffect } from 'react';
import { selectTasks } from '../../features/tasks/selectors';
import { loadTasksOfAll, deleteTask } from '../../features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TaskId } from '../../features/tasks/types/Task';

export default function AdminCabinet(): JSX.Element {
	const tasks = useAppSelector(selectTasks);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(loadTasksOfAll());
	}, [dispatch]);

	const handleTaskRemove = useCallback(
		(id: TaskId) => {
			dispatch(deleteTask(id));
		},
		[dispatch]
	);

	return (
		<>
			<div>Admin cabinet</div>
			<h3>Все таски, без привязки к юзерам</h3>
			<ul>
				{tasks?.map((element) => (
					<li key={element.id}>
						{element.name} {element.description}
						<span
							className="badge bg-danger rounded-pill remove-task"
							role="button"
							onClick={() => handleTaskRemove(element.id)}
							tabIndex={0}
						>
							удалить
						</span>
					</li>
				))}
			</ul>
		</>
	);
}

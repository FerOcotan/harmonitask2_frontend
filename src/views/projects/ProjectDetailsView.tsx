import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { getFullProject } from "@/api/ProjectAPI"

import AddTaskModal from "@/components/tasks/AddTaskModal"
import TaskList from "@/components/tasks/TaskList"
import EditTaskData from "@/components/tasks/EditTaskData"
import TaskModalDetails from "@/components/tasks/TaskModalDetails"

export default function ProjectDetailsView() {

    const navigate = useNavigate()

    const params = useParams()
    const projectId = params.projectId!
    const { data, isLoading, isError } = useQuery({
        queryKey: ['project', projectId],
        queryFn: () => getFullProject(projectId),
        retry: false
    })
   
    if (isLoading ) return 'Cargando...'

    if (isError) return 'Error cargando el proyecto';
    if (!data) return 'Proyecto no encontrado';

    if (data) return (
        <> 
            <h1 className="text-5xl font-black">{data.projectName}</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">{data.description}</p>

         
                <nav className="my-5 flex gap-3">
                    <button
                        type="button"
                        className="bg-cyan-400 hover:bg-cyan-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                        onClick={() => navigate(location.pathname + '?newTask=true')}
                    >Agregar Tarea</button>

                    <Link
                        to={'team'}
                        className="bg-blue-600 hover:bg-blue-700 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
                    >Colaboradores</Link>
                </nav>
        

            <TaskList 
                tasks={data.tasks}
                canEdit={true}
            
              
            />
            <AddTaskModal />
            <EditTaskData/>  
            <TaskModalDetails />

           
        </>
    )
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";

import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailsView from "./views/projects/ProjectDetailsView";
import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/LoginView";
import RegisterView from "./views/auth/RegisterView";
import ConfirmAccountView from "./views/auth/ConfirmAccountView";
import RequestNewCodeView from "./views/auth/RequestNewCodeView";
import ForgotPasswordView from "./views/auth/ForgotPasswordView";
import NewPasswordView from "./views/auth/NewPasswordView";
import ProjectTeamView from "./views/projects/ProjectTeamView";
import NotFound from "./components/tasks/404/NotFound";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    {/* Aquí se usa `index` correctamente para la ruta por defecto */}
                    <Route path="/" element={<DashboardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />} index />
                    <Route path="/projects/:projectId" element={<ProjectDetailsView/>} index />
                    <Route path="/projects/:projectId/edit" element={<EditProjectView/>} index />
                    <Route path="/projects/:projectId/team" element={<ProjectTeamView/>} index />
                </Route>


                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginView/>} index />
                    <Route path="/auth/register" element={<RegisterView/>} index />
                    <Route path="/auth/confirm-account" element={<ConfirmAccountView/>} index />
                    <Route path="/auth/request-code" element={<RequestNewCodeView/>} index />
                    <Route path="/auth/forgot-password" element={<ForgotPasswordView/>} index />
                    <Route path="/auth/new-password" element={<NewPasswordView/>} index />
                
                </Route>

                {/* Ruta no encontrada */}
                <Route path="/404" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}

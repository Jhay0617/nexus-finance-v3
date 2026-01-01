import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  MainLayout,
  ContentArea,
  PageContainer,
} from "../styles/ApplayoutStyles";
import { useState } from "react";

function AppLayout() {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  return (
    <MainLayout>
      <Sidebar onOpenAccountModal={() => setIsAccountModalOpen(true)} />
      <ContentArea>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </ContentArea>
      {isAccountModalOpen && (
        <AddAccountModal onClose={() => setIsAccountModalOpen(false)} />
      )}
    </MainLayout>
  );
}

export default AppLayout;

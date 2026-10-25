import React from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { FloatButton } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

import { KPICards, CoreCharts } from "@/components/dashboard/Module1";
import { BusinessModuleDashboard } from "@/components/dashboard/Module2";
import { AlertsCenter } from "@/components/dashboard/Module3";
import { TrendAnalysis } from "@/components/dashboard/Module4";
import { Rankings } from "@/components/dashboard/Module5";
import { FunnelResources } from "@/components/dashboard/Module6";
import AISelection from "@/components/AISelection";
import AICustomerService from "@/components/AICustomerService";
import InventoryWarning from "@/components/InventoryWarning";
import DataMonitoring from "@/components/DataMonitoring";
import AdAnalysis from "@/components/AdAnalysis";
import ProductMatchPage from "@/components/ProductMatchPage";
import LocalProductPage from "@/components/LocalProductPage";
import EmployeeManagementPage from "@/components/EmployeeManagementPage";
import RoleManagementPage from "@/components/RoleManagementPage";
import OrderManagementPage from "@/components/OrderManagementPage";
import ShippedOrderManagementPage from "@/components/ShippedOrderManagementPage";
import ReturnOrderManagementPage from "@/components/ReturnOrderManagementPage";
import CreateOrderPage from "@/components/CreateOrderPage";
import IssueOrderPage from "@/components/IssueOrderPage";
import RecycleBinPage from "@/components/RecycleBinPage";
import MerchandisePage from "@/components/MerchandisePage";
import DistributionProductPage from "@/components/DistributionProductPage";
import DistributionOrderPage from "@/components/DistributionOrderPage";
import DistributionAccountPage from "@/components/DistributionAccountPage";
import BalanceRechargePage from "@/components/BalanceRechargePage";
import ConsumptionRecordPage from "@/components/ConsumptionRecordPage";
import RechargeAuditPage from "@/components/RechargeAuditPage";
import RechargeRecordPage from "@/components/RechargeRecordPage";
import StoreWithdrawalPage from "@/components/StoreWithdrawalPage";
import CompensationClaimPage from "@/components/CompensationClaimPage";
import WarehouseInboundPage from "@/components/WarehouseInboundPage";
import InventoryPage from "@/components/InventoryPage";
import InventoryLogPage from "@/components/InventoryLogPage";
import InventoryAgePage from "@/components/InventoryAgePage";
import DistributionLogPage from "@/components/DistributionLogPage";
import SlotManagementPage from "@/components/SlotManagementPage";
import StockPushPage from "@/components/StockPushPage";
import PlatformSettlementPage from "@/components/PlatformSettlementPage";
import ProfitStatisticsPage from "@/components/ProfitStatisticsPage";
import ExpressClaimPage from "@/components/ExpressClaimPage";
import ProcurementRecordPage from "@/components/ProcurementRecordPage";
import ReturnApplicationPage from "@/components/ReturnApplicationPage";
import RefusalSignPage from "@/components/RefusalSignPage";
import PackageClaimPage from "@/components/PackageClaimPage";
import UserProfilePage from "@/components/UserProfilePage";
import CommonAddressPage from "@/components/CommonAddressPage";
import LogisticsChannelPage from "@/components/LogisticsChannelPage";
import Authorization1688Page from "@/components/Authorization1688Page";
import ExchangeRatePage from "@/components/ExchangeRatePage";
import FreightTrialPage from "@/components/FreightTrialPage";
import AutoShippingPage from "@/components/AutoShippingPage";
import InvitationListPage from "@/components/InvitationListPage";
import InvitationWithdrawalPage from "@/components/InvitationWithdrawalPage";
import CommissionFlowPage from "@/components/CommissionFlowPage";
import FileDownloadTaskPage from "@/components/FileDownloadTaskPage";
import ProductCollectionPage from "@/components/ProductCollectionPage";
import InventorySyncPage from "@/components/InventorySyncPage";
import NavigationPage from "@/components/NavigationPage";

function GlobalNavButton() {
  const navigate = useNavigate();
  return (
    <FloatButton 
      icon={<AppstoreOutlined />} 
      type="primary" 
      style={{ right: 24, bottom: 24, width: 48, height: 48 }}
      tooltip="全页面导航"
      onClick={() => navigate("/navigation")} 
    />
  );
}

function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      {/* Module 1: Super Data Dashboard */}
      <section className="flex flex-col gap-5">
        <KPICards />
        <CoreCharts />
      </section>

      {/* Module 2: Full Business Module Dashboard */}
      <section>
        <BusinessModuleDashboard />
      </section>

      {/* Module 3: Real-time & Alerts */}
      <section>
        <AlertsCenter />
      </section>

      {/* Module 4: Trends Analysis */}
      <section>
        <TrendAnalysis />
      </section>

      {/* Module 5: Rankings */}
      <section>
        <Rankings />
      </section>

      {/* Module 6: Funnel & Resources */}
      <section>
        <FunnelResources />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans">
        <main className="max-w-[1920px] mx-auto w-full">
          <Routes>
            <Route path="/" element={<div className="p-6"><Dashboard /></div>} />
            <Route path="/navigation" element={<NavigationPage />} />
            <Route path="/ai-selection" element={<AISelection />} />
            <Route path="/ai-customer-service" element={<AICustomerService />} />
            <Route path="/inventory-warning" element={<InventoryWarning />} />
            <Route path="/data-monitoring" element={<DataMonitoring />} />
            <Route path="/ad-analysis" element={<AdAnalysis />} />
            <Route path="/product-collection" element={<ProductCollectionPage />} />
            <Route path="/inventory-sync" element={<InventorySyncPage />} />
            <Route path="/product-match" element={<ProductMatchPage />} />
            <Route path="/local-product" element={<LocalProductPage />} />
            <Route path="/employee-management" element={<EmployeeManagementPage />} />
            <Route path="/role-management" element={<RoleManagementPage />} />
            <Route path="/order-management" element={<OrderManagementPage />} />
            <Route path="/shipped-order-management" element={<ShippedOrderManagementPage />} />
            <Route path="/return-order-management" element={<ReturnOrderManagementPage />} />
            <Route path="/issue-order" element={<IssueOrderPage />} />
            <Route path="/create-order" element={<CreateOrderPage />} />
            <Route path="/recycle-bin" element={<RecycleBinPage />} />
            <Route path="/merchandise-page" element={<MerchandisePage />} />
            <Route path="/distribution-product" element={<DistributionProductPage />} />
            <Route path="/distribution-order" element={<DistributionOrderPage />} />
            <Route path="/distribution-account" element={<DistributionAccountPage />} />
            <Route path="/balance-recharge" element={<BalanceRechargePage />} />
            <Route path="/consumption-record" element={<ConsumptionRecordPage />} />
            <Route path="/recharge-audit" element={<RechargeAuditPage />} />
            <Route path="/recharge-record" element={<RechargeRecordPage />} />
            <Route path="/store-withdrawal" element={<StoreWithdrawalPage />} />
            <Route path="/compensation-claim" element={<CompensationClaimPage />} />
            <Route path="/warehouse-inbound" element={<WarehouseInboundPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/inventory-log" element={<InventoryLogPage />} />
            <Route path="/inventory-age" element={<InventoryAgePage />} />
            <Route path="/distribution-log" element={<DistributionLogPage />} />
            <Route path="/slot-management" element={<SlotManagementPage />} />
            <Route path="/stock-push" element={<StockPushPage />} />
            <Route path="/platform-settlement" element={<PlatformSettlementPage />} />
            <Route path="/profit-statistics" element={<ProfitStatisticsPage />} />
            <Route path="/procurement-record" element={<ProcurementRecordPage />} />
            <Route path="/express-claim" element={<ExpressClaimPage />} />
            <Route path="/return-application" element={<ReturnApplicationPage />} />
            <Route path="/refusal-sign" element={<RefusalSignPage />} />
            <Route path="/package-claim" element={<PackageClaimPage />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path="/common-address" element={<CommonAddressPage />} />
            <Route path="/logistics-channel" element={<LogisticsChannelPage />} />
            <Route path="/authorization-1688" element={<Authorization1688Page />} />
            <Route path="/exchange-rate" element={<ExchangeRatePage />} />
            <Route path="/freight-trial" element={<FreightTrialPage />} />
            <Route path="/auto-shipping" element={<AutoShippingPage />} />
            <Route path="/invitation-list" element={<InvitationListPage />} />
            <Route path="/invitation-withdrawal" element={<InvitationWithdrawalPage />} />
            <Route path="/commission-flow" element={<CommissionFlowPage />} />
            <Route path="/file-download-task" element={<FileDownloadTaskPage />} />
          </Routes>
          <GlobalNavButton />
        </main>
      </div>
    </HashRouter>
  );
}

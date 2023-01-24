import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All Pages Layouts Starts
import AuthLayout from './auth/AuthLayout';
import VendorDashboardLayout from './vendor_dashboard_pages/VendorDashboardLaylout';
import SuperadminDashboardLayout from './superadmin_dashboard_pages/SuperadminDashboardLayout';
import UsersDashboardLayout from './users_dashboard_pages/UsersDashboardLayout';
// All Pages Layouts Ends

// Auth Pages Routes Starts
import Login from './auth/Login';
import ForgottenPassword from './auth/ForgottenPassword';
import Signup from './auth/Signup';
// Auth Pages Routes Ends

// Vendor Dashboard Pages Routes Starts
import Dashboard from './vendor_dashboard_pages/Dashboard';
import Orders from './vendor_dashboard_pages/Orders';
import OrderList from './vendor_dashboard_pages/OrderList';
import AddProduct from './vendor_dashboard_pages/AddProduct';
import EditProducts from './vendor_dashboard_pages/EditProducts';
import AddNewPackage from './vendor_dashboard_pages/AddNewPackage';
import AddOffer from './vendor_dashboard_pages/AddOffer';
import Wallet from './vendor_dashboard_pages/Wallet';
import Tickets from './vendor_dashboard_pages/Tickets';
import RecentRiders from './vendor_dashboard_pages/RecentRiders';
import ShopSettings from './vendor_dashboard_pages/ShopSettings';
import ProfileSettings from './vendor_dashboard_pages/ProfileSettings';
import PaymentSettings from './vendor_dashboard_pages/PaymentSettings';
import RequestWithdrawal from './vendor_dashboard_pages/RequestWithdrawal';
// Vendor Dashboard Pages Routes Ends



// Superadmin Dashboard Pages Routes Starts
import SuperadminDashboard from './superadmin_dashboard_pages/SuperadminDashboard';
import UserReport from './superadmin_dashboard_pages/UserReport';
import FinancialReport from './superadmin_dashboard_pages/FinancialReport';
import SystemReport from './superadmin_dashboard_pages/SystemReport';
import Withdrawals from './superadmin_dashboard_pages/Withdrawals';
import Announcements from './superadmin_dashboard_pages/Announcement';
import AccessTickets from './superadmin_dashboard_pages/AccessTickets';
import AddVendor from './superadmin_dashboard_pages/AddVendor';
import ManageVendors from './superadmin_dashboard_pages/ManageVendors';
import ApproveVendors from './superadmin_dashboard_pages/ApproveVendors';
import AddUser from './superadmin_dashboard_pages/AddUser';
import ManageUsers from './superadmin_dashboard_pages/ManageUsers';
import AddRider from './superadmin_dashboard_pages/AddRider';
import ManageRider from './superadmin_dashboard_pages/ManageRider';
import ApproveRider from './superadmin_dashboard_pages/ApproveRider';
import AddStaff from './superadmin_dashboard_pages/AddStaff';
import ManageStaff from './superadmin_dashboard_pages/ManageStaff';
// Superadmin Dashboard Pages Routes Ends

// Users Dashboard Pages Routes Start
import UsersDashboard from './users_dashboard_pages/UsersDashboard';
import AccountInfo from './users_dashboard_pages/AccountInfo';
import UsersSettingsPage from './users_dashboard_pages/UserSettingsPage';
// Users Dashboard Pages Routes Ends




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='recover-password' element={<ForgottenPassword />} />
          <Route path='sign-up' element={<Signup />} />
        </Route>

        {/* Vendor Dashboard Routes */}
        <Route path='/' element={<VendorDashboardLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='order-list' element={<OrderList/>}/>
          <Route path='add-products' element={<AddProduct/>}/>
          <Route path='edit-products' element={<EditProducts/>}/>
          <Route path='add-new-package' element={<AddNewPackage/>}/>
          <Route path='add-offer' element={<AddOffer/>}/>
          <Route path='wallet' element={<Wallet/>}/>
          <Route path='tickets' element={<Tickets/>}/>
          <Route path='recent-riders' element={<RecentRiders/>}/>
          <Route path='shop-settings' element={<ShopSettings/>}/>
          <Route path='profile-settings' element={<ProfileSettings/>}/>
          <Route path='payment-settings' element={<PaymentSettings/>}/>
          <Route path='request-withdrawal' element={<RequestWithdrawal/>} />
        </Route>

        {/* Superadmin Pages Routes  */}
        <Route path='/' element={<SuperadminDashboardLayout/>}>
          <Route path='superadmin_dashboard' element={<SuperadminDashboard/>}/>
          <Route path='user-report' element={<UserReport/>}/>
          <Route path='financial-report' element={<FinancialReport/>}/>
          <Route path='system-report' element={<SystemReport/>}/>
          <Route path='withdrawals' element={<Withdrawals/>}/>
          <Route path='announcements' element={<Announcements/>}/>
          <Route path='access-tickets' element={<AccessTickets/>}/>
          <Route path='add-vendor' element={<AddVendor/>}/>
          <Route path='manage-vendors' element={<ManageVendors/>}/>
          <Route path='approve-vendors' element={<ApproveVendors/>}/>
          <Route path='add-user' element={<AddUser/>}/>
          <Route path='manage-users' element={<ManageUsers/>}/>
          <Route path='add-rider' element={<AddRider/>}/>
          <Route path='manage-riders' element={<ManageRider/>}/>
          <Route path='approve-rider' element={<ApproveRider/>}/>
          <Route path='add-staff' element={<AddStaff/>}/>
          <Route path='manage-staffs' element={<ManageStaff/>}/>
        </Route>

        {/* Users Pages Routes  */}
        <Route path='/' element={< UsersDashboardLayout/>}>
          <Route path='users-dashboard' element={< UsersDashboard/>}/>
          <Route path='account-info' element={<AccountInfo/>}/>
          <Route path='user-settings' element={<UsersSettingsPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<App />, document.getElementById("root"));


import Sidebar from './components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-4 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;

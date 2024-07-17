import SideNav from '@/app/ui/dashboard/sidenav';

export const experimental_ppr = true;     // 开启ppr（预渲染），Suspense包裹的组件视为动态的，next会在编译时自动确认静态与动态部分
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
import { LayoutDashboard, Folder, ChevronDown, ChevronRight, MessageCircle, Calendar, Users, Info, LogOut } from 'lucide-react'
import { useState } from 'react'

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6 flex flex-col justify-between sidebar-container">
      <div>
        <div className="workspace-header">
          <div className="label">workspace</div>
          <div className="title-row">
            <span>Root folder</span>
            <svg width="24" height="24" viewBox="0 10 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" fill="#353945" />
            </svg>

          </div>
        </div>
        <nav className="flex flex-col gap-4 text-gray-600">
          <div className="flex items-center gap-2 font-medium sidebar-button"><LayoutDashboard size={18} /><span>Dashboard</span></div>
          <div className="boards-container">
            <button onClick={() => setOpen(!open)} className="boards-toggle">
              <Folder size={18} />
              <span>Boards</span>
              {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>

            {open && (
              <div className="boards-list">
                <span>› Create routes</span>
                <span>› Development React App</span>
                <span className="active">› Sport Xi Project</span>
                <span>› Wordpress theme</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 sidebar-button"><MessageCircle size={18} /><span className="flex justify-between w-full">Messages<span className="bg-orange-500 text-white rounded-full px-2 text-xs">3</span></span></div>
          <div className="flex items-center gap-2 sidebar-button"><Calendar size={18} /><span>Calendar</span></div>
          <div className="flex items-center gap-2 sidebar-button"><Users size={18} /><span>Team members</span></div>
        </nav>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#777E91" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7ZM12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12C13 11.4477 12.5523 11 12 11Z" fill="#777E91" />
          </svg>

          <span>Support</span>
        </div>
        <div className="sidebar-bottom-button-dark">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.0292 15.0007C11.5811 14.9799 12.0454 15.4104 12.0662 15.9623C12.1132 17.2065 12.1791 18.1145 12.244 18.7656C12.3079 19.4068 12.695 19.7926 13.2345 19.8586C13.8708 19.9363 14.7683 20 16 20C17.2317 20 18.1292 19.9363 18.7655 19.8586C19.3048 19.7926 19.6921 19.4067 19.7559 18.7653C19.8763 17.5568 20 15.4688 20 12C20 8.53118 19.8763 6.44321 19.7559 5.23468C19.6921 4.59333 19.3048 4.20736 18.7655 4.14144C18.1292 4.06366 17.2317 4 16 4C14.7683 4 13.8708 4.06365 13.2345 4.14143C12.695 4.20739 12.3079 4.59318 12.244 5.23437C12.1791 5.88545 12.1132 6.79354 12.0662 8.03772C12.0454 8.58961 11.5811 9.02012 11.0292 8.99929C10.4773 8.97845 10.0468 8.51417 10.0676 7.96228C10.1158 6.68524 10.1842 5.73543 10.2538 5.03611C10.4003 3.56595 11.4253 2.3477 12.9919 2.15621C13.7211 2.06707 14.7008 2 16 2C17.2992 2 18.2789 2.06707 19.0082 2.15622C20.5748 2.34774 21.5997 3.56655 21.7461 5.03643C21.875 6.33068 22 8.48847 22 12C22 15.5115 21.875 17.6693 21.7461 18.9636C21.5997 20.4334 20.5748 21.6523 19.0082 21.8438C18.2789 21.9329 17.2992 22 16 22C14.7008 22 13.7211 21.9329 12.9919 21.8438C11.4253 21.6523 10.4003 20.4341 10.2538 18.9639C10.1842 18.2646 10.1158 17.3148 10.0676 16.0377C10.0468 15.4858 10.4773 15.0215 11.0292 15.0007Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.20711 14.7929C7.59763 15.1834 7.59763 15.8166 7.20711 16.2071C6.81658 16.5976 6.18342 16.5976 5.79289 16.2071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L5.79289 7.79289C6.18342 7.40237 6.81658 7.40237 7.20711 7.79289C7.59763 8.18342 7.59763 8.81658 7.20711 9.20711L5.41421 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13L5.41421 13L7.20711 14.7929Z" fill="white" />
          </svg>

          <span>Logout</span>
        </div>
      </div>
    </aside>
  )
}

import React, { useState, useRef, useEffect } from 'react';
import { 
  Database, ArrowRight, Server, Shield, Users, CreditCard, 
  LayoutDashboard, Cloud, Bell, Layers, Link as LinkIcon, 
  Activity, Play, CheckCircle2, ChevronRight, ChevronDown, Move, ZoomIn, ZoomOut, Maximize
} from 'lucide-react';

// --- DATA STRUCTURE ---
const architectureData = [
  {
    id: 'auth',
    title: '1. Authentication Module',
    color: 'purple',
    icon: Shield,
    nodes: [
      { title: 'Sign Up', apis: ['POST /register'], flow: ['User', 'Validation', 'Hash Password (bcrypt)', 'Database', 'Success Response'], db: 'User Collection' },
      { title: 'Login', apis: ['POST /login'], flow: ['User Credentials', 'Verify Email', 'Compare Password', 'Generate JWT', 'Set Cookie', 'Login Success'], db: 'User Collection' },
      { title: 'Forgot Password', apis: ['POST /forgot-password', 'POST /reset-password'], flow: ['User Email', 'Generate OTP', 'Send Email', 'Verify OTP', 'Reset Password', 'Update Database'] },
      { title: 'Logout', apis: ['POST /logout'], flow: ['User', 'Clear Cookie', 'Session Removed'] }
    ]
  },
  {
    id: 'users',
    title: '2. User Management',
    color: 'blue',
    icon: Users,
    nodes: [
      { title: 'Profile', apis: ['GET /profile', 'PUT /profile/update'], flow: ['User', 'Authentication Middleware', 'Fetch User Data', 'Update Profile', 'Save Changes'], db: 'User Collection' },
      { title: 'User Dashboard', flow: ['User Login', 'Fetch User Data', 'Fetch Events', 'Fetch Registrations', 'Display Dashboard'] }
    ]
  },
  {
    id: 'events',
    title: '3. Event Management',
    color: 'green',
    icon: LayoutDashboard,
    nodes: [
      { title: 'Create Event', apis: ['POST /create-event'], flow: ['Admin', 'Validate Input', 'Upload Images', 'Save Event', 'Return Event ID'], db: 'Event Collection' },
      { title: 'Get All Events', apis: ['GET /events'], flow: ['Client Request', 'Database Query', 'Return Event List'] },
      { title: 'Get Single Event', apis: ['GET /event/:id'], flow: ['Client', 'Event ID', 'Fetch Event', 'Return Details'] },
      { title: 'Update Event', apis: ['PUT /event/:id'], flow: ['Admin', 'Validate Changes', 'Update Database'] },
      { title: 'Delete Event', apis: ['DELETE /event/:id'], flow: ['Admin', 'Verify Authorization', 'Remove Event'] }
    ]
  },
  {
    id: 'registration',
    title: '4. Event Registration Flow',
    color: 'teal',
    icon: Activity,
    nodes: [
      { title: 'Registration Process', apis: ['POST /register-event'], flow: ['User', 'Select Event', 'Submit Registration', 'Verify Eligibility', 'Save Registration', 'Generate Record'], db: 'Registration Collection' },
      { title: 'View Registrations', apis: ['GET /my-registrations'], flow: ['User', 'Authentication', 'Fetch Registrations', 'Display Data'] }
    ]
  },
  {
    id: 'payments',
    title: '5. Payment Flow',
    color: 'orange',
    icon: CreditCard,
    nodes: [
      { title: 'Initiate Payment', apis: ['POST /create-order'], flow: ['User', 'Event Selection', 'Calculate Amount', 'Razorpay Order Creation', 'Return Order Details'] },
      { title: 'Verify Payment', apis: ['POST /verify-payment'], flow: ['Payment Success', 'Verify Signature', 'Update Registration', 'Payment Confirmed'], db: 'Payment Collection', integrations: ['Razorpay'] }
    ]
  },
  {
    id: 'admin',
    title: '6. Admin Panel',
    color: 'red',
    icon: Server,
    nodes: [
      { title: 'Admin Dashboard', flow: ['Admin Login', 'Analytics', 'Event Statistics', 'Registration Statistics', 'Revenue Statistics'] },
      { title: 'User Management', apis: ['GET /users', 'DELETE /users/:id'], flow: ['Admin', 'Fetch Users', 'Manage Accounts'] },
      { title: 'Event Management', flow: ['Admin', 'Create Event', 'Edit Event', 'Delete Event', 'Publish Event'] },
      { title: 'Registration Monitoring', flow: ['Admin', 'View Registrations', 'Approve', 'Reject', 'Export Reports'] }
    ]
  },
  {
    id: 'media',
    title: '7. Media Upload System',
    color: 'cyan',
    icon: Cloud,
    nodes: [
      { title: 'Image Upload', apis: ['POST /upload'], flow: ['Client Upload', 'Cloud Storage', 'Store URL', 'Return URL'], db: 'Media Collection', integrations: ['Cloudinary / AWS S3'] }
    ]
  },
  {
    id: 'notifications',
    title: '8. Notification System',
    color: 'pink',
    icon: Bell,
    nodes: [
      { title: 'Email Notifications', events: ['Registration Success', 'Payment Success', 'Password Reset', 'Event Updates'], flow: ['Trigger', 'Email Service', 'User Inbox'], integrations: ['Nodemailer'] }
    ]
  },
  {
    id: 'middleware',
    title: '9. Middleware Layer',
    color: 'slate',
    icon: Layers,
    nodes: [
      { title: 'Authentication Middleware', flow: ['Request', 'Verify JWT', 'Allow Access'] },
      { title: 'Authorization Middleware', flow: ['Request', 'Check Role', 'Admin/User Access Control'] },
      { title: 'Error Handler', flow: ['Exception', 'Central Error Middleware', 'Structured Response'] }
    ]
  },
  {
    id: 'database',
    title: '10. Database Layer',
    color: 'gray',
    icon: Database,
    nodes: [
      { title: 'MongoDB Collections', items: ['Users', 'Events', 'Registrations', 'Payments', 'Notifications', 'Media'] },
      { title: 'Relationships', relations: [
        { from: 'User', action: 'Registers For', to: 'Event' },
        { from: 'Event', action: 'Has Many', to: 'Registrations' },
        { from: 'User', action: 'Makes', to: 'Payments' }
      ]}
    ]
  },
  {
    id: 'integrations',
    title: '11. Third Party Integrations',
    color: 'yellow',
    icon: LinkIcon,
    nodes: [
      { title: 'Razorpay', purpose: 'Payment Processing' },
      { title: 'Cloudinary', purpose: 'Image Storage' },
      { title: 'Gmail / Nodemailer', purpose: 'Email Delivery' }
    ]
  },
  {
    id: 'e2e',
    title: '12. Complete End-to-End Application Flow',
    color: 'indigo',
    icon: Play,
    nodes: [
      { title: 'User Journey', flowVertical: [
        'User Opens Application', 'Sign Up / Login', 'Browse Events', 'Select Event', 
        'Register', 'Make Payment', 'Payment Verification', 'Registration Confirmation', 
        'Email Notification', 'Dashboard Update', 'Admin Monitoring', 'Analytics & Reports'
      ]}
    ]
  }
];

// --- COLOR UTILITIES ---
const colorMap = {
  purple: { border: 'border-purple-500', bg: 'bg-purple-50', headerBg: 'bg-purple-600', text: 'text-purple-900', lightBorder: 'border-purple-200' },
  blue: { border: 'border-blue-500', bg: 'bg-blue-50', headerBg: 'bg-blue-600', text: 'text-blue-900', lightBorder: 'border-blue-200' },
  green: { border: 'border-green-500', bg: 'bg-green-50', headerBg: 'bg-green-600', text: 'text-green-900', lightBorder: 'border-green-200' },
  teal: { border: 'border-teal-500', bg: 'bg-teal-50', headerBg: 'bg-teal-600', text: 'text-teal-900', lightBorder: 'border-teal-200' },
  orange: { border: 'border-orange-500', bg: 'bg-orange-50', headerBg: 'bg-orange-600', text: 'text-orange-900', lightBorder: 'border-orange-200' },
  red: { border: 'border-red-500', bg: 'bg-red-50', headerBg: 'bg-red-600', text: 'text-red-900', lightBorder: 'border-red-200' },
  cyan: { border: 'border-cyan-500', bg: 'bg-cyan-50', headerBg: 'bg-cyan-600', text: 'text-cyan-900', lightBorder: 'border-cyan-200' },
  pink: { border: 'border-pink-500', bg: 'bg-pink-50', headerBg: 'bg-pink-600', text: 'text-pink-900', lightBorder: 'border-pink-200' },
  slate: { border: 'border-slate-500', bg: 'bg-slate-50', headerBg: 'bg-slate-700', text: 'text-slate-900', lightBorder: 'border-slate-200' },
  gray: { border: 'border-gray-600', bg: 'bg-gray-100', headerBg: 'bg-gray-800', text: 'text-gray-900', lightBorder: 'border-gray-300' },
  yellow: { border: 'border-yellow-500', bg: 'bg-yellow-50', headerBg: 'bg-yellow-600', text: 'text-yellow-900', lightBorder: 'border-yellow-200' },
  indigo: { border: 'border-indigo-500', bg: 'bg-indigo-50', headerBg: 'bg-indigo-600', text: 'text-indigo-900', lightBorder: 'border-indigo-200' },
};

// --- SUB-COMPONENTS ---
const FlowArrow = () => <ArrowRight size={14} className="mx-1 text-gray-400 flex-shrink-0 mt-0.5" />;

const ApiBadge = ({ endpoint }) => {
  const method = endpoint.split(' ')[0];
  const methodColors = {
    POST: 'bg-green-100 text-green-800 border-green-300',
    GET: 'bg-blue-100 text-blue-800 border-blue-300',
    PUT: 'bg-orange-100 text-orange-800 border-orange-300',
    DELETE: 'bg-red-100 text-red-800 border-red-300',
  };
  const colorClass = methodColors[method] || 'bg-gray-100 text-gray-800 border-gray-300';
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${colorClass} shadow-sm`}>
      {endpoint}
    </span>
  );
};

const NodeCard = ({ node, colors }) => {
  return (
    <div className={`relative mb-3 last:mb-0 ml-8 bg-white border ${colors.lightBorder} rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
      {/* Connector line from parent */}
      <div className={`absolute -left-8 top-5 w-8 border-t-2 ${colors.border}`} />
      
      <div className="p-3">
        <h4 className={`text-sm font-bold ${colors.text} mb-2 flex items-center`}>
          {node.title}
        </h4>

        <div className="space-y-2 text-sm text-gray-700">
          {/* APIs */}
          {node.apis && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-500 uppercase">API:</span>
              {node.apis.map((api, idx) => <ApiBadge key={idx} endpoint={api} />)}
            </div>
          )}

          {/* Horizontal Flow */}
          {node.flow && (
            <div className="flex flex-wrap items-start bg-gray-50 p-2 rounded border border-gray-100 text-xs">
              <span className="font-semibold text-gray-500 uppercase mr-2 mt-0.5">Flow:</span>
              <div className="flex flex-wrap items-center flex-1">
                {node.flow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="bg-white px-2 py-0.5 rounded border border-gray-200 font-medium whitespace-nowrap mb-1">
                      {step}
                    </span>
                    {idx < node.flow.length - 1 && <FlowArrow />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Vertical Flow (for E2E) */}
          {node.flowVertical && (
            <div className="flex flex-col space-y-1 bg-gray-50 p-3 rounded border border-gray-100">
              {node.flowVertical.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex flex-col items-center mr-3">
                    <div className={`w-3 h-3 rounded-full ${colors.headerBg}`} />
                    {idx < node.flowVertical.length - 1 && <div className={`w-0.5 h-6 ${colors.bg} border-l-2 border-dashed ${colors.border} opacity-50`} />}
                  </div>
                  <span className="font-medium text-gray-800 pb-5">{step}</span>
                </div>
              ))}
            </div>
          )}

          {/* DB Collection */}
          {node.db && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-semibold text-gray-500 uppercase">DB:</span>
              <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-slate-800 text-slate-100 font-medium">
                <Database size={12} className="mr-1.5 text-blue-300" />
                {node.db}
              </span>
            </div>
          )}

          {/* Event Triggers (Notifications) */}
          {node.events && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-500 uppercase">Triggers:</span>
              {node.events.map((evt, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-pink-100 text-pink-800 border border-pink-200">
                  <Activity size={10} className="mr-1" /> {evt}
                </span>
              ))}
            </div>
          )}

          {/* Specific Integrations per node */}
          {node.integrations && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-500 uppercase">Integration:</span>
              {node.integrations.map((int, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-yellow-100 text-yellow-800 border border-yellow-300 font-medium">
                  <LinkIcon size={10} className="mr-1" /> {int}
                </span>
              ))}
            </div>
          )}

          {/* Database Items List */}
          {node.items && (
            <div className="flex flex-wrap gap-2 mt-2">
              {node.items.map((item, idx) => (
                <span key={idx} className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-200 text-gray-800 border border-gray-300 font-medium">
                  <Database size={12} className="mr-1 text-gray-600" /> {item}
                </span>
              ))}
            </div>
          )}

          {/* Database Relationships */}
          {node.relations && (
             <div className="flex flex-col space-y-2 mt-2">
               {node.relations.map((rel, idx) => (
                 <div key={idx} className="flex items-center text-xs bg-gray-50 p-1.5 rounded border border-gray-200 w-fit">
                   <span className="font-bold text-blue-700">{rel.from}</span>
                   <span className="mx-2 text-gray-500 italic flex items-center">
                     <span className="w-4 border-b border-dashed border-gray-400 mr-1" />
                     {rel.action}
                     <ArrowRight size={10} className="ml-1 text-gray-400" />
                   </span>
                   <span className="font-bold text-green-700">{rel.to}</span>
                 </div>
               ))}
             </div>
          )}

          {/* Integrations Purpose */}
          {node.purpose && (
             <div className="flex items-center text-sm text-gray-600">
               <CheckCircle2 size={14} className="mr-2 text-green-500" />
               Purpose: <span className="font-semibold ml-1 text-gray-800">{node.purpose}</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BranchSection = ({ branch, isExpanded, toggleExpand }) => {
  const colors = colorMap[branch.color];
  const Icon = branch.icon;

  return (
    <div className={`relative mb-4 last:mb-0 ml-12 transition-all duration-300 ${isExpanded ? 'w-[600px]' : 'w-[350px]'}`}>
      {/* Connector line from root trunk */}
      <div className="absolute -left-12 top-6 w-12 border-t-2 border-gray-400" />
      
      <div className={`border-2 ${colors.border} rounded-xl shadow-sm bg-white overflow-hidden`}>
        {/* Branch Header */}
        <div 
          className={`px-4 py-3 ${colors.headerBg} flex items-center justify-between cursor-pointer text-white`}
          onClick={() => toggleExpand(branch.id)}
        >
          <div className="flex items-center gap-3 font-semibold tracking-wide">
            <Icon size={18} className="opacity-90" />
            {branch.title}
          </div>
          {isExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
        
        {/* Branch Content (Nodes) */}
        {isExpanded && (
          <div className={`p-4 ${colors.bg} relative`}>
            {/* Vertical trunk line for this branch */}
            <div className={`absolute left-4 top-0 bottom-6 w-0 border-l-2 ${colors.border}`} />
            
            {branch.nodes.map((node, idx) => (
              <NodeCard key={idx} node={node} colors={colors} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [expandedBranches, setExpandedBranches] = useState(['auth', 'users', 'database']);
  
  // Pan & Zoom State
  const containerRef = useRef(null);
  const [transform, setTransform] = useState({ x: 50, y: 50, scale: 0.8 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const toggleExpand = (id) => {
    setExpandedBranches(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const expandAll = () => setExpandedBranches(architectureData.map(b => b.id));
  const collapseAll = () => setExpandedBranches([]);

  // Mouse event handlers for panning
  const handleMouseDown = (e) => {
    // Only drag on the canvas background, not inside cards
    if (e.target.closest('.card-content-ignore-drag')) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTransform(prev => ({
      ...prev,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    }));
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Wheel event for zooming
  const handleWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const scaleBy = 1.05;
      const newScale = e.deltaY < 0 ? transform.scale * scaleBy : transform.scale / scaleBy;
      setTransform(prev => ({ ...prev, scale: Math.max(0.2, Math.min(newScale, 2.5)) }));
    }
  };

  // Zoom controls
  const zoomIn = () => setTransform(prev => ({ ...prev, scale: Math.min(prev.scale * 1.2, 2.5) }));
  const zoomOut = () => setTransform(prev => ({ ...prev, scale: Math.max(prev.scale / 1.2, 0.2) }));
  const resetView = () => setTransform({ x: 50, y: 50, scale: 0.8 });

  // Grid background style
  const gridPattern = {
    backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
    backgroundSize: `${20 * transform.scale}px ${20 * transform.scale}px`,
    backgroundPosition: `${transform.x}px ${transform.y}px`,
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 overflow-hidden font-sans">
      
      {/* Top Navigation / Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm z-10 flex-shrink-0">
        <div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center">
            <Layers className="mr-2 text-indigo-600" />
            KalaiYarangam Architecture
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-1">Interactive System Design Mind Map</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-md p-1 border border-gray-200">
            <button onClick={collapseAll} className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-white rounded hover:shadow-sm transition-all">Collapse All</button>
            <button onClick={expandAll} className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-white rounded hover:shadow-sm transition-all">Expand All</button>
          </div>
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <div className="flex items-center gap-2">
            <button onClick={zoomOut} className="p-1.5 text-gray-600 hover:bg-gray-100 rounded" title="Zoom Out"><ZoomOut size={18} /></button>
            <span className="text-xs font-mono w-12 text-center bg-gray-100 py-1 rounded">{Math.round(transform.scale * 100)}%</span>
            <button onClick={zoomIn} className="p-1.5 text-gray-600 hover:bg-gray-100 rounded" title="Zoom In"><ZoomIn size={18} /></button>
            <button onClick={resetView} className="p-1.5 text-gray-600 hover:bg-gray-100 rounded ml-1" title="Reset View"><Maximize size={18} /></button>
          </div>
        </div>
      </div>

      {/* Instructions Overlay */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none opacity-60">
        <div className="bg-white/80 backdrop-blur border border-gray-200 px-3 py-2 rounded shadow-sm flex flex-col gap-1 pointer-events-auto">
          <span className="text-xs text-gray-600 flex items-center gap-1"><Move size={12}/> Drag to pan</span>
          <span className="text-xs text-gray-600 flex items-center gap-1"><ZoomIn size={12}/> Cmd/Ctrl + Scroll to zoom</span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div 
        ref={containerRef}
        className="flex-1 relative cursor-grab active:cursor-grabbing overflow-hidden"
        style={gridPattern}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div 
          className="absolute origin-top-left transition-transform duration-75"
          style={{ 
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})` 
          }}
        >
          {/* Architecture Tree Wrapper */}
          <div className="flex items-start py-20 px-10 card-content-ignore-drag">
            
            {/* ROOT NODE */}
            <div className="relative z-10 flex flex-col items-center justify-center min-w-[280px]">
              <div className="bg-gradient-to-br from-indigo-800 to-purple-900 border-[3px] border-indigo-400 p-6 rounded-2xl shadow-xl text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                  <Layers size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-wide">KalaiYarangam</h2>
                <p className="text-indigo-200 text-sm font-semibold mt-1">System Architecture</p>
                <div className="mt-4 flex gap-2 justify-center">
                   <span className="px-2 py-1 bg-black/30 rounded text-[10px] text-white uppercase font-bold tracking-wider">Full-Stack</span>
                   <span className="px-2 py-1 bg-black/30 rounded text-[10px] text-white uppercase font-bold tracking-wider">API</span>
                </div>
              </div>
            </div>

            {/* MAIN VERTICAL TRUNK */}
            <div className="relative">
              {/* Horizontal line from Root to Trunk */}
              <div className="absolute top-[100px] -left-0 w-12 border-t-4 border-gray-400" />
              
              {/* Vertical trunk line grouping all branches */}
              <div className="absolute top-[30px] left-12 bottom-[30px] border-l-4 border-gray-400 rounded" />

              <div className="ml-12 py-8 flex flex-col gap-6 relative">
                 {architectureData.map((branch) => (
                   <BranchSection 
                     key={branch.id} 
                     branch={branch} 
                     isExpanded={expandedBranches.includes(branch.id)}
                     toggleExpand={toggleExpand}
                   />
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
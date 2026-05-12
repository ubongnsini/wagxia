import { User, Mail, Phone, MapPin, Calendar, Edit, Crown, Shield, Activity, TrendingUp, Target, Trash2, CheckCircle, Lock, AlertTriangle } from 'lucide-react';
import { TopBar } from '../components/TopBar';
import { BackButton } from '../components/BackButton';
import { useUser } from '../context/UserContext';
import { VIPCrown } from '../components/VIPCrown';
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';

export function Profile() {
  const navigate = useNavigate();
  const { isVIP, vipLevel, formatCurrency } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    memberSince: 'March 2026',
  });

  const stats = {
    totalGames: 145,
    totalWins: 87,
    winRate: '60%',
    totalEarnings: 45600,
  };

  const recentActivity = [
    { action: 'Won Color Prediction', amount: 500, time: '2 hours ago' },
    { action: 'Deposited funds', amount: 1000, time: '5 hours ago' },
    { action: 'Won Dice Game', amount: 750, time: '1 day ago' },
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const handleDeleteAccount = () => {
    toast.error('Account deletion feature coming soon');
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-screen overflow-y-auto" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <TopBar />

      {/* DESKTOP: STRUCTURED LAYOUT - MAX 1320px */}
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-10 pb-20">
        
        {/* Back Button */}
        <div className="mb-5">
          <BackButton />
        </div>

        {/* PROFILE HEADER */}
        <div className="rounded-2xl shadow-sm p-6 mb-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ 
                background: 'linear-gradient(135deg, #0A84FF 0%, #0066CC 100%)',
                boxShadow: '0 4px 16px rgba(10, 132, 255, 0.2)'
              }}>
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {profile.name}
                  </h2>
                  {vipLevel > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ 
                      backgroundColor: 'rgba(255, 215, 0, 0.15)',
                      border: '2px solid rgba(255, 215, 0, 0.4)',
                      boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)',
                    }}>
                      <VIPCrown level={vipLevel as 1 | 2 | 3} size="sm" />
                      <span className="text-sm font-black tracking-wide" style={{ 
                        color: '#FFD700',
                        letterSpacing: '0.5px',
                        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                      }}>
                        VIP {vipLevel}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <Calendar className="w-4 h-4" />
                  <span>Member since {profile.memberSince}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
              style={{ 
                background: 'linear-gradient(135deg, #0A84FF 0%, #0066CC 100%)',
                color: 'white'
              }}
            >
              <Edit className="w-5 h-5" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="flex-1 px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: 'var(--bg-accent)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              ) : (
                <span style={{ color: 'var(--text-primary)' }}>{profile.email}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="flex-1 px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: 'var(--bg-accent)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              ) : (
                <span style={{ color: 'var(--text-primary)' }}>{profile.phone}</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
              {isEditing ? (
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="flex-1 px-3 py-2 rounded-lg text-sm"
                  style={{
                    backgroundColor: 'var(--bg-accent)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                  }}
                />
              ) : (
                <span style={{ color: 'var(--text-primary)' }}>{profile.location}</span>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                  color: 'white'
                }}
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
                style={{
                  backgroundColor: 'var(--bg-accent)',
                  color: 'var(--text-primary)',
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* STATS ROW - 4 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="rounded-xl p-5 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(10, 132, 255, 0.1)' }}>
              <Target className="w-5 h-5" style={{ color: '#0A84FF' }} />
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#0A84FF' }}>
              {stats.totalGames}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Total Games</p>
          </div>

          <div className="rounded-xl p-5 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <CheckCircle className="w-5 h-5" style={{ color: '#22C55E' }} />
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#22C55E' }}>
              {stats.totalWins}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Total Wins</p>
          </div>

          <div className="rounded-xl p-5 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
              <TrendingUp className="w-5 h-5" style={{ color: '#8B5CF6' }} />
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#8B5CF6' }}>
              {stats.winRate}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Win Rate</p>
          </div>

          <div className="rounded-xl p-5 text-center" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
              <Crown className="w-5 h-5" style={{ color: '#FFD700' }} />
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#FFD700' }}>
              {formatCurrency(stats.totalEarnings)}
            </p>
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Total Earnings</p>
          </div>
        </div>

        {/* DESKTOP: 70/30 SPLIT LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* LEFT COLUMN: 70% - ACCOUNT ACTIONS */}
          <div className="w-full lg:flex-[0.7] space-y-5">
            
            {/* Account Actions */}
            <div className="rounded-2xl shadow-sm p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
                Account Actions
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/wallet')}
                  className="w-full p-4 rounded-xl flex items-center justify-between transition-all hover:scale-[1.01]"
                  style={{ backgroundColor: 'var(--bg-accent)', border: '1px solid var(--border-color)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(10, 132, 255, 0.1)' }}>
                      <Activity className="w-5 h-5" style={{ color: '#0A84FF' }} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>View Wallet</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Manage your funds</p>
                    </div>
                  </div>
                  <Edit className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                </button>

                <button
                  onClick={() => navigate('/settings')}
                  className="w-full p-4 rounded-xl flex items-center justify-between transition-all hover:scale-[1.01]"
                  style={{ backgroundColor: 'var(--bg-accent)', border: '1px solid var(--border-color)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                      <Lock className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Security Settings</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>PIN, password & 2FA</p>
                    </div>
                  </div>
                  <Edit className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
                </button>

                <button
                  onClick={() => navigate('/upgrade')}
                  className="w-full p-4 rounded-xl flex items-center justify-between transition-all hover:scale-[1.01]"
                  style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.2)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
                      <Crown className="w-5 h-5" style={{ color: '#FFD700' }} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>VIP Membership</p>
                      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Unlock exclusive benefits</p>
                    </div>
                  </div>
                  <Edit className="w-5 h-5" style={{ color: '#FFD700' }} />
                </button>
              </div>
            </div>

            {/* Verification Status */}
            <div className="rounded-2xl shadow-sm p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 className="text-xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>
                Verification Status
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#22C55E' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Email Verified</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22C55E' }}>
                    Verified
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#22C55E' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Phone Verified</span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22C55E' }}>
                    Verified
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5" style={{ color: '#F59E0B' }} />
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Identity Verification</span>
                  </div>
                  <button
                    onClick={() => toast.info('KYC verification coming soon')}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B' }}
                  >
                    Pending
                  </button>
                </div>
              </div>
            </div>

            {/* Delete Account */}
            <div className="rounded-2xl shadow-sm p-6" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#EF4444' }}>
                Danger Zone
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all active:scale-95"
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#EF4444',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}
              >
                <Trash2 className="w-5 h-5" />
                Delete Account
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 30% - INSIGHTS & ACTIVITY */}
          <div className="w-full lg:flex-[0.3] space-y-5">
            
            {/* Security Status */}
            <div className="rounded-2xl shadow-sm p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                  <Shield className="w-5 h-5" style={{ color: '#22C55E' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Security Status
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Account protection
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>2FA Enabled</span>
                  <CheckCircle className="w-4 h-4" style={{ color: '#22C55E' }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>PIN Enabled</span>
                  <CheckCircle className="w-4 h-4" style={{ color: '#22C55E' }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Email Verified</span>
                  <CheckCircle className="w-4 h-4" style={{ color: '#22C55E' }} />
                </div>
              </div>

              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                <p className="text-xs font-semibold" style={{ color: '#22C55E' }}>
                  ✓ Your account is secure
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl shadow-sm p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(10, 132, 255, 0.1)' }}>
                  <Activity className="w-5 h-5" style={{ color: '#0A84FF' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Recent Activity
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Last 3 actions
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-accent)' }}>
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                      {activity.action}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{activity.time}</span>
                      <span className="text-sm font-bold" style={{ color: '#22C55E' }}>
                        +{formatCurrency(activity.amount)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Insights */}
            <div className="rounded-2xl shadow-sm p-6" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}>
                  <TrendingUp className="w-5 h-5" style={{ color: '#8B5CF6' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Insights
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                    Your performance
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Active Days</span>
                  <span className="text-lg font-bold" style={{ color: '#8B5CF6' }}>24</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Win Streak</span>
                  <span className="text-lg font-bold" style={{ color: '#22C55E' }}>5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Favorite Game</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Dice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={() => setShowDeleteModal(false)}
        >
          <div 
            className="rounded-2xl shadow-2xl p-6 max-w-md w-full"
            style={{ backgroundColor: 'var(--bg-card)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
              <Trash2 className="w-8 h-8" style={{ color: '#EF4444' }} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#EF4444' }}>
              Delete Account?
            </h2>
            <p className="text-center text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              This action cannot be undone. All your data, including games history, earnings, and VIP status will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 py-3 rounded-xl font-semibold transition-all active:scale-95"
                style={{
                  backgroundColor: 'var(--bg-accent)',
                  color: 'var(--text-primary)',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="flex-1 py-3 rounded-xl font-semibold transition-all active:scale-95"
                style={{
                  backgroundColor: '#EF4444',
                  color: 'white',
                }}
              >
                Delete Forever
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import Layout from '../layout/Layout';
import AccountSidebar from './AccountSidebar';
import ProfilePreferences from './ProfilePreferences';

const ProfilePreferencesPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl mb-8">Информация об аккаунте</h1>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4">
            <AccountSidebar />
          </div>

          <div className="w-full md:w-3/4">
            <ProfilePreferences />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePreferencesPage;

import React from 'react'
import '../css/profile.css'
import EditProfile from '../component/EditProfile'
import Layout from '../component/Layout/Layout'
const profile = () => {
  return <>
    <Layout>
      <section className='profile-container'>
        <div className='card'>
          <EditProfile />
        </div>
      </section>
    </Layout>
  </>
}

export default profile

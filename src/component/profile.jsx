import React from 'react'
import '../css/profile.css'
import EditProfile from '../component/EditProfile'
import Option from '../component/Option'
import Layout from '../component/Layout/Layout'
const profile = () => {
  return <>
    <Layout>
      <section className='profile-container'>
        <div className='card'>
          <EditProfile />
          {/* <Option/> */}
        </div>
      </section>
    </Layout>
  </>
}

export default profile

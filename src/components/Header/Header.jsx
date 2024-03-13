import profile from '../../assets/images/profile.png'

function Header() {
  return (
    <header className='pb-6' >
        <div className='flex justify-between items-center pt-6 pb-4'>
          <h3 className='text-2xl font-bold'>Knowledge Cafe</h3>
          <img className='w-10' src={profile} alt="" />
        </div>
        <hr />
        
        
    </header>
  )
}

export default Header